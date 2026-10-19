import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/site";
import { cn } from "@/utils/cn";

// Existing production IDs stay as fallbacks so the form keeps working
// without a .env file. Override with VITE_EMAILJS_* (see .env.example).
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xz0gbfm",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ij1o85e",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "JQ9M1nWARe1bnp95W",
};

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!v.subject.trim()) e.subject = "Please add a subject.";
  if (!v.message.trim()) e.message = "Please tell me a little about your project.";
  else if (v.message.trim().length < 10)
    e.message = "Please write at least 10 characters.";
  return e;
}

const inputClass =
  "w-full rounded-control border bg-surface px-3.5 py-3 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-accent";

type FieldProps = {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  multiline,
}: FieldProps) {
  const id = useId();
  const errId = `${id}-error`;
  const common = {
    id,
    name,
    value,
    required: true,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    className: cn(inputClass, error ? "border-red-500" : "border-line"),
  };
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...common}
          rows={6}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          {...common}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && (
        <p id={errId} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // "Enquire" buttons in Services pass the chosen service via router state.
  const service = (location.state as { service?: string } | null)?.service;
  useEffect(() => {
    if (service) setValues((v) => ({ ...v, subject: `Enquiry: ${service}` }));
  }, [service, location.key]);

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
      setStatus({ kind: "idle" });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        e.currentTarget,
        { publicKey: EMAILJS.publicKey }
      );
      setValues(EMPTY);
      setStatus({ kind: "success" });
    } catch (err) {
      const detail =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: unknown }).text)
          : "";
      setStatus({
        kind: "error",
        message: detail
          ? `Could not send your message (${detail}). Please try again, or email me directly.`
          : "Could not send your message. Please try again later, or email me directly.",
      });
    }
  };

  const sending = status.kind === "sending";

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Tell me about your project"
            description="Share a few details and I’ll get back to you by email."
          />
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="mt-10 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={values.name}
                error={errors.name}
                onChange={set("name")}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={set("email")}
                autoComplete="email"
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              value={values.subject}
              error={errors.subject}
              onChange={set("subject")}
            />
            <Field
              label="Message"
              name="message"
              multiline
              value={values.message}
              error={errors.message}
              onChange={set("message")}
            />
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
              <p
                role={status.kind === "error" ? "alert" : "status"}
                aria-live="polite"
                className={cn(
                  "text-sm",
                  status.kind === "error"
                    ? "text-red-600 dark:text-red-400"
                    : "text-accent"
                )}
              >
                {status.kind === "success" &&
                  "Thank you. Your message has been sent and I’ll reply soon."}
                {status.kind === "error" && status.message}
              </p>
            </div>
          </form>
        </div>

        <Reveal delay={0.1}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Contact details
          </h3>
          <dl className="mt-5 space-y-7 border-t border-line pt-7">
            <div className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-fg">Email</dt>
                <dd className="mt-1 space-y-1 break-words text-muted">
                  {[contact.primaryEmail, ...contact.otherEmails].map((m) => (
                    <p key={m}>
                      <a
                        href={`mailto:${m}`}
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {m}
                      </a>
                    </p>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-fg">Phone</dt>
                <dd className="mt-1 space-y-1 text-muted">
                  {contact.phones.map((p) => (
                    <p key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {p.display}
                      </a>
                    </p>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-fg">Address</dt>
                <dd className="mt-1 text-muted">
                  {contact.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
          <div className="mt-8">
            <p className="mb-3 text-sm text-muted">Find me online</p>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
