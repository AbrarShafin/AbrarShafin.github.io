# Shafin Research Hub

Build personal academic research portfolio website for a recent Electrical and Electronic Engineering graduate applying to Master's/PhD programs. The site must look like the personal website of a young academic researcher — NOT a startup landing page, NOT a generic software developer portfolio. Target audience: professors, PhD admissions committees, and potential research supervisors reviewing this site in under 60 seconds.

## VISUAL DESIGN (strict requirements)

- Color palette: deep navy/charcoal (#1a2332 or similar) and off-white/cream background (#faf8f5 or similar), with ONE muted accent color (muted teal #4a7c7c or warm amber #b8860b) used sparingly for links/highlights only.
- Typography: a serif font for headings (Source Serif Pro, Lora, or similar) paired with a clean sans-serif for body text (Inter or IBM Plex Sans). This pairing is essential — do not use a single sans-serif font throughout, it must read as academic, not corporate.
- Layout: single-column, generous whitespace, narrow reading-width content blocks (max ~720px for text). No multi-column marketing-style grids.
- NO gradients. NO large hero background images or stock photography. NO glowing buttons, no card hover-scale animations, no parallax scrolling, no animated counters/statistics.
- Minimal, subtle animation only: gentle fade-in on scroll is acceptable; nothing else.
- Publication entries should look like citation blocks (author list with the site owner's name bolded, title, venue, year, links) — not flashy image cards.
- Buttons: simple rectangular or slightly rounded outline/solid buttons in the accent color, no shadows or gradients.
- Icons: minimal line icons only where necessary (external link icons, email icon) — no icon-heavy decoration.
- Light theme by default. A dark mode toggle is a nice-to-have, not required.
- Fully responsive: must look clean and readable on mobile with the same restrained aesthetic.

## SITE STRUCTURE

Single-page site with smooth-scroll navigation. Nav bar (sticky, minimal): Home · About · Research · Publications · Thesis · Skills · Education · Contact

### 1. HOME (hero section)
- Name: Kazi Abrar Shafin
- Identity line: "Machine Learning Researcher — Semiconductor Device Optimization"
- Intro text: "I'm an Electrical and Electronic Engineering graduate from the University of Rajshahi, working at the intersection of machine learning and photovoltaic device physics. My research applies explainable AI and simulation-driven modeling to optimize next-generation solar cell architectures."
- Two buttons: "View CV" (link placeholder, I will add the CV file link later) and "Contact Me" (scrolls to contact section)
- Row of profile links with small icons: Google Scholar (https://scholar.google.com/citations?user=8JMeH_0AAAAJ&hl=en), GitHub (https://github.com/AbrarShafin), LinkedIn (https://www.linkedin.com/in/abrar-shafin), ResearchGate (https://www.researchgate.net/profile/Kazi-Abrar-Shafin), ORCID (https://orcid.org/0009-0001-1828-027X)
- Include a circular profile photo placeholder on the right side of the hero (I will upload my own photo later)

### 2. ABOUT
Section heading "About". Body text:
"I recently completed my B.Sc. in Electrical and Electronic Engineering at the University of Rajshahi (CGPA 3.77, 2nd Merit Position), where I conducted my undergraduate thesis at the Photonic & Advanced Materials Laboratory under Dr. Jaker Hossain. My work focused on integrating machine learning with device simulation (SCAPS-1D) to optimize stacked-absorber heterojunction solar cells, resulting in a first-author publication in the Journal of Physics D: Applied Physics. In 2025, I was selected to participate in an international collaborative research program at Ritsumeikan University, Japan, where I presented this work and trained in thin-film fabrication and characterization techniques. I am now preparing to pursue graduate research in machine learning for materials and device optimization."

### 3. RESEARCH INTERESTS
Section heading "Research Interests". Body text:
"My research centers on applying machine learning — particularly explainable AI methods like SHAP — to accelerate and interpret the design of optoelectronic devices. I'm interested in combining physics-based simulation with data-driven optimization to identify material and structural parameters that push device performance beyond conventional limits, with a current focus on multi-junction and stacked-absorber solar cell architectures."

### 4. RESEARCH EXPERIENCE
Two entries, each as a distinct timeline/card block with title, dates right-aligned, institution, and bullet points:

**Entry 1:**
- Title: Undergraduate Researcher (Thesis Work)
- Dates: Jan 2024 – Jun 2026
- Institution: Photonic & Advanced Materials Laboratory, Dept. of EEE, University of Rajshahi
- Line: Supervisor: Dr. Jaker Hossain
- Bullets:
  - Conducted research on machine learning-enhanced modeling and optimization of solar cells and photodetectors
  - Designed and evaluated double absorber layer solar cell architectures for improved performance
  - Applied explainable AI (SHAP) to identify optimal material properties governing device performance
  - Integrated simulation (SCAPS-1D) and ML techniques for device-level optimization, resulting in a first-author publication in Journal of Physics D: Applied Physics

**Entry 2:**
- Title: International Research Collaboration
- Dates: Sep 2025
- Institution: FY2025 International Collaborative Research Promotion Program, Ritsumeikan University (BKC, Japan)
- Bullets:
  - Presented: "Machine Learning-Enhanced Modeling and Optimization of Double Absorber Layer Solar Cells"
  - Hands-on training: Spin Coating, Raman Spectroscopy, PL Spectroscopy, Mist CVD, MoS2 Fabrication, SEM, Photolithography, Electron Beam Deposition
  - Links: "Program Report" and "Official Documents" (use placeholder # links, I will fill these in)

### 5. PUBLICATIONS
Section heading "Publications", with a small subtitle link to Google Scholar. Two citation-style entries:

**Publication 1:**
"Machine learning-aided modeling and absorption optimization in stacked-absorber heterojunction solar cells"
Authors: K. A. Shafin, M. A. H. Pappu, A. T. Abir, A. Kuddus, S. Mouri, J. Hossain (bold "K. A. Shafin")
Journal of Physics D: Applied Physics, Vol. 59, 155103 (2026)
Links: DOI (https://doi.org/10.1088/1361-6463/ae571c) and Code & Dataset (https://github.com/AbrarShafin/ML-SHAP-SCAPS.git)
Status badge: "Published"

**Publication 2:**
"Mapping the Mind at Rest: Machine-Learning Identification of Alzheimer's and Frontotemporal Dementia through EEG Microstate Parameters"
Authors: K. A. Shafin, M. M. Imtiaz, R. A. Nahiyan, R. Rahman, M.R.C. Mahdy (bold "K. A. Shafin")
Submitted to PLOS
Status badge: "Under Review"
Small italic note below: "Independent research applying ML methodology to a neuroscience dataset, conducted outside the author's primary photovoltaics research."

### 6. THESIS
Section heading "Thesis".
Title: "Machine Learning-Aided Modeling and Absorption Optimization in Stacked-Absorber Heterojunction Solar Cells"
Subtitle: University of Rajshahi, Dept. of EEE — Supervisor: Dr. Jaker Hossain
Abstract text (as a blockquote or highlighted text block):
"Achieving superior light harvesting in stacked-absorber heterojunction solar cells requires precise electronic and optical alignment between adjacent absorber layers. This work integrates machine-learning models with SCAPS-1D device simulations to identify optimal absorber-layer properties and guide rational design of stacked architectures. Explainable AI (SHAP) analysis revealed key design rules governing density of states, carrier concentration, and band alignment. Using these ML-derived criteria, optimized device structures incorporating ZnSnN2, CdTe, and Cu3PSe4 as top absorbers with MoTe2 as bottom absorber achieved simulated power-conversion efficiencies exceeding 39%, surpassing single-junction performance limits."
Note below in small italic text: "This thesis research was later published as a first-author paper in the Journal of Physics D: Applied Physics (see Publications)."
Button: "Thesis PDF" linking to a placeholder # (I will add the file later)

### 7. SKILLS
Section heading "Skills". Display as grouped categories in a clean grid (2 columns on desktop, 1 on mobile), NOT a single long list:
- Programming Languages: Python, C, MATLAB, VHDL
- AI/ML: Machine Learning, Deep Learning, Explainable AI (SHAP)
- Frameworks & Tools: Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib
- Engineering & Design Tools: SCAPS-1D, Vivado, Proteus, AutoCAD, SolidWorks
- Research Methods: Solar Cell Analysis, Photovoltaics, Device Simulation, Data Visualization, Model Optimization

### 8. EDUCATION
Section heading "Education". Three entries in a simple vertical list:
- University of Rajshahi — B.Sc. (Engr.) in Electrical & Electronic Engineering, Dec 2021 – Jul 2026, CGPA 3.77, 2nd Merit Position, Dean's Award for Academic Excellence (4th Year, YGPA 4.962)
- Dhaka City College — HSC in Science, 2018–2020, GPA 5.00/5.00
- Dhanmondi Govt. Boys' High School — SSC in Science, 2018, GPA 5.00/5.00

### 9. LEADERSHIP & INVOLVEMENT
Section heading "Leadership & Involvement". Simple bulleted list:
- Chairperson, IEEE Robotics and Automation Society, University of Rajshahi SBC (Present)
- Vice-Chair, IEEE Robotics and Automation Society, RU SBC (2024)
- Membership Development Coordinator, IEEE University of Rajshahi Student Branch (2023)
- Industrial Training, Training Institute for Chemical Industries (TICI) — Grade A+ (4/4)
- Volunteer, IEEE ICRPSET-2024 & ProCon-2025

### 10. CONTACT
Section heading "Contact". Text:
"I'm currently applying for Master's/PhD research positions in machine learning for materials and device optimization. Feel free to reach out."
Email: kazishafin09@gmail.com (as a clickable mailto link)
Repeat the profile links row (Google Scholar, GitHub, LinkedIn, ResearchGate, ORCID)

Simple footer below contact: "© 2026 Kazi Abrar Shafin"

## TECHNICAL REQUIREMENTS
- Fully responsive (mobile, tablet, desktop)
- Semantic HTML structure with proper heading hierarchy (h1 for name, h2 for section titles)
- Fast loading, no unnecessary heavy assets
- Accessible: sufficient color contrast, alt text placeholders on images, keyboard-navigable nav
- SEO: proper page title ("Kazi Abrar Shafin — ML Researcher in Semiconductor Device Optimization"), meta description summarizing the research identity
- Clean, easy-to-edit structure since I will need to add new publications/awards over time

Do not invent any additional content, testimonials, statistics, or sections beyond what is specified above.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kaziabrarshafin.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d77f999-fb9a-4c5a-8bb1-ae750fb1a02b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
