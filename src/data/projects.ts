export type ProjectGroup = "professional" | "personal";

export type Project = {
  /** URL-safe identifier, also used as a React key */
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  group: ProjectGroup;
  /** Screenshot URL or path. Omit until one exists: a designed placeholder is shown instead. */
  image?: string;
  /** Only set when a real, working URL exists. */
  liveUrl?: string;
  /** Only set when a real, public source URL exists. */
  sourceUrl?: string;
  /** Personal projects only */
  year?: string;
};

const FIREBASE_IMG =
  "https://firebasestorage.googleapis.com/v0/b/nanaakwasi-8d50e.firebasestorage.app/o/frebbytech%2Fportfolio%2F";

/**
 * Single source of truth for every project on the site.
 * Content below is carried over unchanged from the previous
 * routes/portfolio, mocks/projects.json and mocks/personal.json.
 * Placeholder links ("#") and the two broken "your-bucket" image URLs
 * were dropped, not replaced with invented values.
 */
export const professionalProjects: Project[] = [
  {
    id: "gpc-pins",
    group: "professional",
    title: "GPC Pins",
    category: "Web App",
    description:
      "A digital platform for selling e-vouchers, event tickets, prepaid units, and related digital products. The system integrates secure online payment, instant code delivery, and user-friendly product browsing. It enhances convenience for customers while providing an easy-to-manage backend for administrators.",
    technologies: ["ReactJs", "ExpressJs", "Nodejs", "MySQL"],
    image: `${FIREBASE_IMG}gpc.PNG?alt=media&token=e0d5c23b-0f1e-428e-b5de-1e095ffe5cc3`,
    liveUrl: "https://gpcpins.com",
  },
  {
    id: "gpc-scanner-app",
    group: "professional",
    title: "GPC Scanner App",
    category: "Mobile App",
    description:
      "A fast and reliable mobile application for scanning and validating e-vouchers, tickets, and digital codes. Features include real-time server verification, duplicate detection, offline fallback, and a clean operator-friendly interface built for events and sales operations.",
    technologies: ["React Native", "Expo", "Axios", "REST API"],
    liveUrl: "https://gpcpins.com/downloads/apps/gpcscanner.apk",
  },
  {
    id: "bamfo-herbal-center",
    group: "professional",
    title: "Bamfo Herbal Center",
    category: "Web App",
    description:
      "A professional website for Bamfo Herbal Centre, a Ghanaian herbal clinic specializing in natural remedies for conditions such as hepatitis B, typhoid, and diabetes. The platform features service listings, a virtual herbal store, and a contact system, enabling patients to learn about herbal treatments and connect with the clinic easily.",
    technologies: ["ReactJs", "ExpressJs", "Nodejs", "Firebase"],
    image: `${FIREBASE_IMG}bamfo.PNG?alt=media&token=eda0e6af-db50-45cd-ac36-11b82acc2548`,
    liveUrl: "https://bamfoherbalcenter.vercel.app",
  },
  {
    id: "vincere-consult",
    group: "professional",
    title: "Vincere Consult",
    category: "Web App",
    description:
      "A modern website designed for Vincere Consult, a reputable law firm in Ghana. The project highlights their core legal services, attorney profiles, practice areas, and contact channels. It incorporates a professional, trust-building design with responsive layouts and accessibility in mind, enabling clients to easily access information and request consultations online.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Hosting",
    ],
    image: `${FIREBASE_IMG}vc.png?alt=media&token=19467c75-d098-479c-b422-1affb1686f56`,
    liveUrl: "https://vincereconsult.com",
    sourceUrl: "https://github.com/nanaakwasi/vincere-consult",
  },
  {
    id: "kumawu-technical-institute",
    group: "professional",
    title: "Kumawu Technical Institute",
    category: "Educational Website",
    description:
      "An academic website built for Kumawu Technical Institute, a leading technical and vocational education and training (TVET) institution in Ghana. The platform includes academic programmes, admission guidelines, news updates, events, and an alumni page. It offers a structured and accessible experience for prospective students, parents, and alumni while maintaining an institutional look and feel.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Firestore",
      "MUI",
    ],
    image: `${FIREBASE_IMG}kuti.png?alt=media&token=f449c8a4-d5d2-48e8-b1c5-42f2a9f692df`,
    liveUrl: "https://kuti.vercel.app/",
  },
  {
    id: "covid-19-tracker",
    group: "professional",
    title: "COVID-19 Tracker",
    category: "Desktop App",
    description:
      "A real-time COVID-19 tracking desktop application that visualizes global and country-specific statistics. Displays confirmed cases, recoveries, deaths, and historical trends using interactive charts. API-powered and optimized for fast data retrieval with a clean JavaFX interface.",
    technologies: ["Java", "JavaFX", "Retrofit", "REST APIs", "JSON"],
    sourceUrl: "https://github.com/nicktest701/covid-19-tracker",
  },
  {
    id: "panacea-home-health-care",
    group: "professional",
    title: "Panacea Home Health Care",
    category: "Web App",
    description:
      "A responsive website built for Panacea Home Health Care, a service provider delivering quality health care at home. The platform showcases services like elderly care, post-surgery support, and home nursing, with a booking system for clients to request appointments. The design emphasizes empathy, trust, and user-friendliness for families seeking reliable healthcare solutions.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase Firestore",
      "Node.js",
    ],
    image: `${FIREBASE_IMG}panacea.png?alt=media&token=5d7c06e0-1838-49d0-82c7-4baea204c42c`,
    liveUrl: "https://panaceahomehealthcare.vercel.app/",
  },
  {
    id: "frebbys-school-portal",
    group: "professional",
    title: "Frebbys School Portal",
    category: "Web App",
    description:
      "A school management system designed for efficient administration of student data, academic records, class schedules, and fee management. The system supports authentication, role-based access (admin, teacher, student, parent), and reporting, providing a digital solution for modern educational institutions.",
    technologies: ["ReactJs", "ExpressJs", "Nodejs", "Mongo DB"],
    image: `${FIREBASE_IMG}frebbys.PNG?alt=media&token=5fa2e47f-4d80-4fc8-913b-2de49431b535`,
    liveUrl: "https://frebbys-school-portal.vercel.app/",
  },
  {
    id: "sikadua-cocoa",
    group: "professional",
    title: "Sikadua Cocoa",
    category: "Web App",
    description:
      "A comprehensive management system developed for cocoa purchasing processes. It streamlines operations such as farmer registration, cocoa purchases, payments, and reporting. The system provides dashboards for managers to track transactions, generate financial reports, and ensure accountability in the cocoa value chain.",
    technologies: ["ReactJs", "ExpressJs", "Nodejs", "Mongo DB"],
    image: `${FIREBASE_IMG}cocoa.PNG?alt=media&token=02a73da4-67b7-48f4-af5a-e7397cf4983f`,
    liveUrl: "https://cocoa-system.onrender.com/",
  },
  {
    id: "think-and-act-sales-inventory",
    group: "professional",
    title: "Think and Act Sales Inventory",
    category: "Web App",
    description:
      "A sales inventory management system designed for Think and Act Enterprise. It enables tracking of products, sales transactions, stock levels, and customer information. The platform provides dashboards for monitoring inventory, generating sales reports, and ensuring efficient business operations.",
    technologies: ["Next.js", "Firebase Firestore", "Clerk Auth", "MySQL"],
    image: `${FIREBASE_IMG}tac.png?alt=media&token=b853b54b-3a87-4029-aa0f-132a93581959`,
    liveUrl: "https://think-and-act.vercel.app",
  },
];

/**
 * Personal projects. Image paths now match the real filenames in
 * public/images/portfolio (the .PNG extension is upper-case on disk,
 * and Firebase Hosting is case-sensitive).
 */
export const personalProjects: Project[] = [
  {
    id: "nothing-website-inspiration",
    group: "personal",
    title: "Nothing Website Inspiration",
    category: "Web App",
    description: "A marketing website,etc",
    technologies: ["HTML", "CSS3", "Tailwind CSS", "Vite", "JavaScript"],
    image: "/images/portfolio/nothing.PNG",
    liveUrl: "https://nothing-site-mu.vercel.app/",
    sourceUrl: "https://github.com/nicktest701/nothing_site",
    year: "2023",
  },
  {
    id: "epa-hub",
    group: "personal",
    title: "EPA HUB",
    category: "Web App",
    description: "A figma Design Dashboard Inspiration",
    technologies: [
      "ReactJs",
      "Typescript",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
    ],
    image: "/images/portfolio/epa.PNG",
    liveUrl: "https://epahubb.vercel.app/",
    sourceUrl: "https://github.com/nicktest701/epahubb",
    year: "2024",
  },
  {
    id: "vevol-media",
    group: "personal",
    title: "Vevol Media",
    category: "Web Site",
    description: "A software development company website inspiration.",
    technologies: ["NextJS", "Tailwind CSS", "JavaScript"],
    image: "/images/portfolio/vevol.PNG",
    liveUrl: "https://vivol-media-demo.vercel.app/",
    sourceUrl: "https://github.com/nicktest701/vivol-media-demo",
    year: "2023",
  },
  {
    id: "optima-ninja",
    group: "personal",
    title: "Optima Ninja",
    category: "Web App Site",
    description: "A software development company website inspiration.",
    technologies: ["HTML", "CSS3", "Sass", "Mongo DB", "JavaScript"],
    image: "/images/portfolio/optima.png",
    liveUrl: "https://optima-ninja.vercel.app/",
    sourceUrl: "https://github.com/nicktest701/optima-ninja",
    year: "2022",
  },
];

export const allProjects: Project[] = [
  ...professionalProjects,
  ...personalProjects,
];
