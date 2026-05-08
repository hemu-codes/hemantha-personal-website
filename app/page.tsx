import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hemantha Akkaraju — Software Engineer",
  description: "Software Engineer with 5+ years building scalable systems at Amazon and beyond. Based in Seattle, WA.",
};

const skills = {
  "Languages & Frameworks": ["Java", "TypeScript", ".NET / C#", "Python", "React", "Angular", "Spring Boot", "GraphQL", "C++"],
  "Cloud & Infrastructure": ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "SQS / SNS", "CloudWatch", "Azure Container Apps", "Docker", "Microservices"],
  "Databases & Storage": ["PostgreSQL", "DynamoDB", "SQL Server", "Redis"],
  "DevOps & CI/CD": ["Git", "Azure DevOps", "Docker", "CloudFormation", "CodePipeline", "Maven", "Vercel"],
  "AI & Automation": ["Amazon Q", "Amazon Bedrock", "Google Gemini", "LLM Integration", "Auth0"],
  "Testing": ["JUnit", "Jest", "React Testing Library", "Cypress"],
};

const experience = [
  {
    title: "Software Development Engineer",
    company: "RBC Technologies",
    location: "Seattle, WA",
    period: "Nov 2025 – Present",
    bullets: [
      "Building an AI-powered testing automation tool that generates test cases from requirement documents, reducing manual test planning effort and improving coverage",
      "Developing full-stack applications using .NET, C#, and Angular with Docker containerization and Auth0 SSO",
      "Collaborating with cross-functional teams to translate ambiguous product requirements into production-ready solutions",
    ],
  },
  {
    title: "Software Engineer",
    company: "Amazon — Device Supply Chain Technologies",
    location: "Seattle, WA",
    period: "Jan 2023 – Sep 2025",
    bullets: [
      "Built and maintained Townsend PLM, a supply-chain operations tool used by 3,000+ internal users with real-time tracking and workflow automation",
      "Built responsive UI components using React and TypeScript, reducing customer support tickets by 15%",
      "Designed microservice-based workflow automation using AWS Lambda, API Gateway, and DynamoDB",
      "Reduced downtime incidents by 20% through proactive CloudWatch monitoring and on-call ownership",
      "Leveraged Amazon Q and Bedrock to accelerate development and automate documentation",
      "Mentored junior engineers and authored standardized runbooks for testing and development",
    ],
  },
  {
    title: "Software Engineer",
    company: "Amazon — Device Sales & Financial System Automation",
    location: "Seattle, WA",
    period: "May 2022 – Dec 2022",
    bullets: [
      "Cut credit claim processing timelines by 2.5 days and reduced manager workload by 60% through workflow automation",
      "Built automated approval models that improved finance team productivity by 25% and reduced manual errors",
      "Partnered with cross-functional stakeholders to modernize approval workflows",
    ],
  },
  {
    title: "Systems Development Engineer",
    company: "Amazon — Operations Tech",
    location: "Seattle, WA",
    period: "Apr 2021 – May 2022",
    bullets: [
      "Developed automation tools ensuring 99.99% service availability for critical operational systems",
      "Created real-time monitoring dashboards for immediate stakeholder visibility into service health",
      "Integrated AWS Lambda with DynamoDB pipelines to reduce manual intervention by 40%",
    ],
  },
];

const projects = [
  {
    name: "H-1B Job Tracker",
    badge: "AI-Powered",
    badgeColor: "blue",
    description: "A personal job search dashboard built for H-1B visa holders. Discovers roles in non-traditional industries — HealthTech, FinTech, Aerospace, Gaming, and more — scores them against your resume using AI, and tracks your full application pipeline with cross-device sync.",
    features: [
      "AI-researched company discovery across 12 non-traditional industries",
      "Live job postings from LinkedIn, Indeed and Glassdoor via JSearch API",
      "Resume match scoring (60-95) using Google Gemini AI",
      "H-1B sponsorship filtering with 300+ verified employer list",
      "Contract and C2C roles tab with separate pipeline tracking",
      "PDF resume upload with cross-device sync via Upstash Redis",
      "Vercel cron job for automatic daily refresh",
    ],
    tech: ["Next.js", "TypeScript", "React", "Google Gemini AI", "Upstash Redis", "JSearch API", "Vercel"],
    techColors: ["blue", "blue", "blue", "purple", "green", "orange", "gray"],
    github: "https://github.com/hemu-codes/job-tracker",
    demo: "https://job-tracker-bs7i.vercel.app",
  },
  {
    name: "Finance Tracker",
    badge: "Full Stack",
    badgeColor: "green",
    description: "A full-stack financial management application for tracking expenses, managing budgets, and gaining insights into spending patterns through interactive visualizations.",
    features: [
      "Expense tracking and categorization system",
      "Budget management with real-time spending alerts",
      "Interactive dashboards with data visualizations",
      "RESTful API backend with secure authentication",
      "Responsive Angular frontend with Material Design",
    ],
    tech: [".NET Core", "C#", "Angular", "TypeScript", "SQL Server", "Entity Framework"],
    techColors: ["purple", "purple", "red", "blue", "green", "orange"],
    github: "https://github.com/hemu-codes/FinanceTracker/tree/main",
    demo: null,
  },
];

const lego = [
  { src: "/camper.jpg", alt: "Vintage Camper LEGO Build", title: "Vintage Camper", desc: "A detailed retro camper build complete with flamingo lawn ornaments and a miniature grill." },
  { src: "/bottle-ship.jpg", alt: "Ship in a Bottle LEGO Build", title: "Ship in a Bottle — Leviathan", desc: "An intricate ship-in-a-bottle featuring the Leviathan with detailed rigging and ocean effects." },
];

const tagColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  green: "bg-green-100 text-green-800",
  orange: "bg-orange-100 text-orange-800",
  red: "bg-red-100 text-red-800",
  gray: "bg-gray-100 text-gray-800",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-tight">Hemantha Akkaraju</span>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {["about", "experience", "skills", "projects", "hobbies", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="text-gray-500 hover:text-gray-900 capitalize transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">Software Engineer</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">Hemantha<br />Akkaraju</h1>
        <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">Building scalable systems and automation solutions with 5+ years of experience. Based in Seattle, WA.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">Get In Touch</a>
          <a href="#projects" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors text-sm font-medium">View Projects</a>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">Software Engineer with 5+ years at Amazon building scalable, data-driven systems across supply chain and financial automation. Experienced in solving complex operational problems end-to-end — from understanding stakeholder pain points to designing, deploying, and integrating production-grade solutions. Passionate about applying technical depth to real-world impact through customer-focused engineering.</p>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.title + job.company} className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-blue-600 font-medium text-sm mt-0.5">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-gray-500">{job.location}</p>
                    <p className="text-sm text-gray-400">{job.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-gray-300 mt-1 shrink-0">&#8594;</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Toolkit</p>
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <span className={`${tagColors[project.badgeColor]} px-2.5 py-0.5 rounded-full text-xs font-semibold`}>{project.badge}</span>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1.5">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-blue-400 shrink-0 mt-0.5">&#10003;</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={t} className={`${tagColors[project.techColors[i]]} px-3 py-1 rounded-full text-xs font-medium`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    GitHub &rarr;
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center">
              <p className="text-gray-400 font-medium">More projects coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Outside of Work</p>
          <h2 className="text-3xl font-bold mb-4">Hobbies & Interests</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">When I&apos;m not coding, I enjoy building LEGO sets and other creative projects. Here&apos;s my growing collection:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {lego.map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img src={item.src} alt={item.alt} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border-2 border-dashed border-gray-200 h-56 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Next build coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Say Hello</p>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">I&apos;m currently open to new opportunities and collaborations. If you&apos;d like to get in touch, reach out!</p>
          <a href="mailto:hemanthaakkaraju@gmail.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
            hemanthaakkaraju@gmail.com
          </a>
        </div>
      </section>

      <footer className="py-6 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        &copy; 2026 Hemantha Akkaraju. All rights reserved.
      </footer>
    </div>
  );
}
