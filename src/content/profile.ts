/**
 * All site content lives here — edit this file to add publications,
 * awards, experience entries, etc. The page components read from it.
 */

export const profile = {
  name: "Kazi Abrar Shafin",
  identity: "Machine Learning Researcher — Semiconductor Device Optimization",
  intro:
    "I'm an Electrical and Electronic Engineering graduate from the University of Rajshahi, working at the intersection of machine learning and photovoltaic device physics. My research applies explainable AI and simulation-driven modeling to optimize next-generation solar cell architectures.",
  email: "kazishafin09@gmail.com",
  cvUrl: "/__l5e/assets-v1/5c607fca-1a16-44f9-9694-ee43f62e6380/Resume.pdf",
};

export const profileLinks = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8JMeH_0AAAAJ&hl=en" },
  { label: "GitHub", href: "https://github.com/AbrarShafin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abrar-shafin" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Kazi-Abrar-Shafin" },
  { label: "ORCID", href: "https://orcid.org/0009-0001-1828-027X" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Thesis", href: "#thesis" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutText =
  "I recently completed my B.Sc. in Electrical and Electronic Engineering at the University of Rajshahi (CGPA 3.77, 2nd Merit Position), where I conducted my undergraduate thesis at the Photonic & Advanced Materials Laboratory under Dr. Jaker Hossain. My work focused on integrating machine learning with device simulation (SCAPS-1D) to optimize stacked-absorber heterojunction solar cells, resulting in a first-author publication in the Journal of Physics D: Applied Physics. In 2025, I was selected to participate in an international collaborative research program at Ritsumeikan University, Japan, where I presented this work and trained in thin-film fabrication and characterization techniques. I am now preparing to pursue graduate research in machine learning for materials and device optimization.";

export const researchInterests =
  "My research centers on applying machine learning — particularly explainable AI methods like SHAP — to accelerate and interpret the design of optoelectronic devices. I'm interested in combining physics-based simulation with data-driven optimization to identify material and structural parameters that push device performance beyond conventional limits, with a current focus on multi-junction and stacked-absorber solar cell architectures.";

export type ExperienceEntry = {
  title: string;
  dates: string;
  institution: string;
  note?: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Undergraduate Researcher (Thesis Work)",
    dates: "Jan 2024 – Jun 2026",
    institution:
      "Photonic & Advanced Materials Laboratory, Dept. of EEE, University of Rajshahi",
    note: "Supervisor: Dr. Jaker Hossain",
    bullets: [
      "Conducted research on machine learning-enhanced modeling and optimization of solar cells and photodetectors",
      "Designed and evaluated double absorber layer solar cell architectures for improved performance",
      "Applied explainable AI (SHAP) to identify optimal material properties governing device performance",
      "Integrated simulation (SCAPS-1D) and ML techniques for device-level optimization, resulting in a first-author publication in Journal of Physics D: Applied Physics",
    ],
  },
  {
    title: "International Research Collaboration",
    dates: "Sep 2025",
    institution:
      "FY2025 International Collaborative Research Promotion Program, Ritsumeikan University (BKC, Japan)",
    bullets: [
      'Presented: "Machine Learning-Enhanced Modeling and Optimization of Double Absorber Layer Solar Cells"',
      "Hands-on training: Spin Coating, Raman Spectroscopy, PL Spectroscopy, Mist CVD, MoS2 Fabrication, SEM, Photolithography, Electron Beam Deposition",
    ],
    links: [
      {
        label: "Program Report",
        href: "https://drive.google.com/file/d/1DvqemLDN1Rb5iGs1DHsFFGMD5RYNnVmn/view?usp=sharing",
      },
      {
        label: "Official Documents",
        href: "https://drive.google.com/drive/folders/1plfcVt2IRLHO4uhvZPxOe0l9SVzCk7IN?usp=sharing",
      },
    ],
  },
];

export type Publication = {
  title: string;
  authors: string[];
  boldAuthor: string;
  venue: string;
  status: string;
  links?: { label: string; href: string }[];
  note?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Machine learning-aided modeling and absorption optimization in stacked-absorber heterojunction solar cells",
    authors: ["K. A. Shafin", "M. A. H. Pappu", "A. T. Abir", "A. Kuddus", "S. Mouri", "J. Hossain"],
    boldAuthor: "K. A. Shafin",
    venue: "Journal of Physics D: Applied Physics, Vol. 59, 155103 (2026)",
    status: "Published",
    links: [
      { label: "DOI", href: "https://doi.org/10.1088/1361-6463/ae571c" },
      { label: "Code & Dataset", href: "https://github.com/AbrarShafin/ML-SHAP-SCAPS.git" },
    ],
  },
  {
    title:
      "Mapping the Mind at Rest: Machine-Learning Identification of Alzheimer's and Frontotemporal Dementia through EEG Microstate Parameters",
    authors: ["K. A. Shafin", "M. M. Imtiaz", "R. A. Nahiyan", "R. Rahman", "M.R.C. Mahdy"],
    boldAuthor: "K. A. Shafin",
    venue: "Submitted to PLOS",
    status: "Under Review",
    note: "Independent research applying ML methodology to a neuroscience dataset, conducted outside the author's primary photovoltaics research.",
  },
];

export const thesis = {
  title:
    "Machine Learning-Aided Modeling and Absorption Optimization in Stacked-Absorber Heterojunction Solar Cells",
  subtitle: "University of Rajshahi, Dept. of EEE — Supervisor: Dr. Jaker Hossain",
  abstract:
    "Achieving superior light harvesting in stacked-absorber heterojunction solar cells requires precise electronic and optical alignment between adjacent absorber layers. This work integrates machine-learning models with SCAPS-1D device simulations to identify optimal absorber-layer properties and guide rational design of stacked architectures. Explainable AI (SHAP) analysis revealed key design rules governing density of states, carrier concentration, and band alignment. Using these ML-derived criteria, optimized device structures incorporating ZnSnN2, CdTe, and Cu3PSe4 as top absorbers with MoTe2 as bottom absorber achieved simulated power-conversion efficiencies exceeding 39%, surpassing single-junction performance limits.",
  note: "This thesis research was later published as a first-author paper in the Journal of Physics D: Applied Physics (see Publications).",
  pdfUrl: "#",
};

export const skills = [
  { category: "Programming Languages", items: ["Python", "C", "MATLAB", "VHDL"] },
  { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Explainable AI (SHAP)"] },
  {
    category: "Frameworks & Tools",
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Engineering & Design Tools",
    items: ["SCAPS-1D", "Vivado", "Proteus", "AutoCAD", "SolidWorks"],
  },
  {
    category: "Research Methods",
    items: [
      "Solar Cell Analysis",
      "Photovoltaics",
      "Device Simulation",
      "Data Visualization",
      "Model Optimization",
    ],
  },
];

export const education = [
  {
    institution: "University of Rajshahi",
    degree: "B.Sc. (Engr.) in Electrical & Electronic Engineering",
    dates: "Dec 2021 – Jul 2026",
    details: [
      "CGPA 3.77, 2nd Merit Position",
      "Dean's Award for Academic Excellence (4th Year, YGPA 4.962)",
    ],
  },
  {
    institution: "Dhaka City College",
    degree: "HSC in Science",
    dates: "2018 – 2020",
    details: ["GPA 5.00/5.00"],
  },
  {
    institution: "Dhanmondi Govt. Boys' High School",
    degree: "SSC in Science",
    dates: "2018",
    details: ["GPA 5.00/5.00"],
  },
];

export const leadership = [
  "Chairperson, IEEE Robotics and Automation Society, University of Rajshahi SBC (Present)",
  "Vice-Chair, IEEE Robotics and Automation Society, RU SBC (2024)",
  "Membership Development Coordinator, IEEE University of Rajshahi Student Branch (2023)",
  "Industrial Training, Training Institute for Chemical Industries (TICI) — Grade A+ (4/4)",
  "Volunteer, IEEE ICRPSET-2024 & ProCon-2025",
];

export const contactText =
  "I'm currently applying for Master's/PhD research positions in machine learning for materials and device optimization. Feel free to reach out.";
