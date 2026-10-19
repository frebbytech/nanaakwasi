/**
 * Site-wide content carried over from the previous implementation.
 * Nothing here is new information: wording was only corrected for typos
 * (e.g. "CPGA" -> "CGPA") and technology names were normalised
 * (e.g. "NextJS" -> "Next.js").
 */

export const site = {
  name: "Nana Akwasi",
  title: "Software Developer",
  location: "Kumasi, Ghana",
  resumeUrl: "/resume/KWASI_OWUSU_ANSAH.pdf",
  portrait: {
    low: "/images/me/nana_akwasi_low.JPG",
    full: "/images/me/nana_akwasi.JPG",
  },
} as const;

export const navItems = [
  { label: "Projects", hash: "projects" },
  { label: "Services", hash: "services" },
  { label: "Expertise", hash: "expertise" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "From dynamic web applications to enterprise-grade solutions, I build responsive, secure, and scalable web applications with technologies like React, Node.js, and Next.js.",
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description:
      "Intuitive mobile applications that deliver seamless user experiences across iOS and Android, from simple apps to complex solutions with offline capabilities.",
  },
  {
    id: "desktop",
    title: "Desktop Application Development",
    description:
      "Custom desktop applications that are fast, reliable, and user-friendly, whether you need a cross-platform app or a native experience that fits your workflow.",
  },
  {
    id: "support",
    title: "Technical Support & Maintenance",
    description:
      "Installation, configuration, and maintenance of computer hardware, software, and network systems, plus troubleshooting for end users and help with system performance issues.",
  },
];

export type ExpertiseGroup = { title: string; items: string[] };

export const expertise: ExpertiseGroup[] = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "PHP", "Python"],
  },
  {
    title: "Frameworks & libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Laravel",
      "React Native",
      "JavaFX",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Adobe XD", "Adobe Photoshop"],
  },
];

export const education = [
  {
    title: "Bachelor of Information Technology",
    period: "2017 – 2021",
    place: "University of Education, Winneba",
    note: "CGPA 3.86 / 4.00",
  },
  {
    title: "General Science",
    period: "2010 – 2013",
    place: "Prempeh College",
    note: "",
  },
];

export const experience = [
  {
    title: "IT Coordinator and Tech Support",
    period: "September 2024 – Present",
    place: "Akaal Skill Development Academy, Ejisu, Ghana",
    points: [
      "Trains and develops students’ skills in programming, software development, word processing, spreadsheet and database programs.",
      "Installs, configures, and maintains computer hardware, software, and network systems.",
      "Troubleshoots technical issues for end users and assists with system performance issues.",
    ],
  },
  {
    title: "IT Coordinator",
    period: "November 2022 – Present",
    place: "Kumawu Technical Institute, Kumawu, Ghana",
    points: [
      "Trains and develops students’ skills in programming, software development, word processing, spreadsheet and database programs.",
      "Supports technical and administrative work in student enrollment.",
      "Generates and analyses student reports.",
      "Configures and maintains computer hardware, software, and network systems.",
    ],
  },
  {
    title: "Programmer and Tech Support",
    period: "September 2021 – September 2022",
    place: "Kodie District Assembly, Kumasi, Ghana",
    points: [
      "Completed a redesign of the existing website to improve navigation and enhance visibility.",
      "Supported technical and administrative tasks.",
      "Generated reports for management decision making.",
      "Installed, configured, and maintained computer hardware, software, and network systems.",
      "Troubleshot technical issues for end users and assisted with system performance issues.",
    ],
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

/** Approved by the site owner. */
export const testimonials: Testimonial[] = [
  {
    id: "bamfo",
    quote:
      "Working with Nana Akwasi was a fantastic experience. He delivered our web site ahead of schedule and exceeded our expectations in both design and functionality.",
    author: "Dr. Ben Bamfo",
    role: "CEO, Bamfo Herbal Center",
    avatar: "/images/reviews/bamfo.jpg",
  },
  {
    id: "gabs",
    quote:
      "Nana's attention to detail and problem-solving skills helped us launch a seamless e-commerce platform. Communication was clear and professional throughout.",
    author: "Mr. Gabriel Addai Bediako",
    role: "CEO, Gab Powerful Consult",
    avatar: "/images/reviews/gabs.jpg",
  },
  {
    id: "kuti",
    quote:
      "Nana consistently delivered robust and maintainable projects. His collaborative approach and technical insight added great value to our team.",
    author: "Mr. Gordon Owusu Yeboah",
    role: "Principal, Kumawu Technical Institute",
    avatar: "/images/reviews/kuti.webp",
  },
  {
    id: "donkor",
    quote:
      "I highly recommend Nana for any React or TypeScript project. He quickly understood our requirements and implemented robust solutions that scaled perfectly.",
    author: "Kwame Donkor",
    role: "Project Manager, Vincere Consult",
    avatar: "/images/reviews/kwame_donkor.jpg",
  },
];

export const contact = {
  primaryEmail: "naakwasi00@gmail.com",
  otherEmails: [
    "kwasiowusuansah00@gmail.com",
    "info@nanaakwasi.dev",
    "frebbytechconsults@gmail.com",
  ],
  phones: [
    { display: "+233 543 772 591", tel: "+233543772591" },
    { display: "+233 560 372 844", tel: "+233560372844" },
  ],
  address: ["Plot 15, Block D", "Kronum Kwaprah"],
} as const;

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/nanaakwasi00" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/kwasi-owusu-ansah-24484b238",
  },
  { id: "x", label: "X", href: "https://x.com/nanaakwasi_oo?s=21" },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/16AcvDMDaA/?mibextid=wwXIfr",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@nana_akwasi_o?_t=8qTo0f1tkTG&_r=1",
  },
] as const;

export type SocialId = (typeof socials)[number]["id"];
