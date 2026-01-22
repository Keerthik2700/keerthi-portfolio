import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowUp,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
} from "react-icons/fa";

/**
 * Upgraded Portfolio
 * - Smart header (shrinks + active section)
 * - Scroll progress bar
 * - Section reveal (IntersectionObserver)
 * - Sticky side nav (desktop)
 * - Back-to-top button
 * - Stronger narrative structure
 */

export default function App() {
  const sections = useMemo(
    () => [
      { id: "about", label: "About", icon: <FaMapMarkerAlt /> },
      { id: "highlights", label: "Highlights", icon: <FaCode /> },
      { id: "education", label: "Education", icon: <FaGraduationCap /> },
      { id: "experience", label: "Experience", icon: <FaBriefcase /> },
      { id: "skills", label: "Skills", icon: <FaCode /> },
      { id: "projects", label: "Projects", icon: <FaCode /> },
      { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
      { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    ],
    []
  );

  const [activeId, setActiveId] = useState("about");
  const [isCompactHeader, setIsCompactHeader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsCompactHeader(y > 24);
      setShowTop(y > 600);

      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        // pick most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-neutral-900">
      {/* ===== Scroll Progress Bar ===== */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-neutral-900/80"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ===== Top Nav (Smart Header) ===== */}
      <header className="sticky top-0 z-50">
        <div
          className={[
            "backdrop-blur border-b border-black/5 transition-all",
            isCompactHeader ? "bg-white/80 shadow-sm" : "bg-[#FBFBFD]/70",
          ].join(" ")}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={[
                "flex items-center justify-between transition-all",
                isCompactHeader ? "py-3" : "py-4",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500" />
                </div>

                <div className="leading-tight">
                  <p className="font-semibold tracking-tight">
                    Keerthi Kumar Basavaraj
                  </p>
                  <p className="text-xs text-neutral-500">
                    Software Engineer • Full-Stack • Mobile • AI
                  </p>
                </div>
              </div>

              <nav className="hidden lg:flex items-center gap-2 text-sm">
                {sections.slice(0, 7).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    className={[
                      "px-3 py-2 rounded-xl transition",
                      activeId === s.id
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-black/[0.04]",
                    ].join(" ")}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:keerthik2700@gmail.com"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 bg-white hover:bg-black/[0.02] transition text-sm"
                >
                  <FaEnvelope className="text-neutral-700" />
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1Xq4aR11jgAuX69XKccfa84405etzf-54/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm"
                >
                  <FaFileAlt />
                  Resume
                </a>
              </div>
            </div>

            {/* Compact header: show current section */}
            <div
              className={[
                "pb-3 transition-all",
                isCompactHeader ? "opacity-100" : "opacity-0 h-0 pb-0 overflow-hidden",
              ].join(" ")}
            >
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-black/[0.04]">
                  <span className="text-neutral-800 font-medium">Viewing:</span>
                  <span className="capitalize">{activeId}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* subtle decorative glow */}
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

          <p className="text-sm text-neutral-600 mb-3 relative">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-neutral-500" />
              United States • Open to Relocation
            </span>
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight relative">
              Building reliable software <br className="hidden md:block" />
              across web, mobile, cloud, and AI.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-neutral-700 max-w-3xl text-justify relative">
          Software Engineer with <b>2 years of professional experience</b> building and shipping
          production-grade systems across web, mobile, backend services, cloud infrastructure,
          and applied AI, with a strong focus on scalable systems, clean user interfaces,
          and reliable deployments.
          </p>


          <div className="mt-7 flex flex-wrap items-center gap-3 relative">
            <a
              href="mailto:keerthik2700@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition"
            >
              <FaEnvelope />
              Email me
            </a>

            <a
              href="https://github.com/Keerthik2700"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/keerthi-kumar-basavaraj/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <button
              onClick={() => scrollToId("projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-black/10 bg-black/[0.04] hover:bg-black/[0.06] transition"
            >
              View Projects →
            </button>
          </div>
        </div>
      </section>

      {/* ===== Layout: Side Nav + Main ===== */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-[240px_1fr] gap-8">
        {/* ===== Sticky Side Nav (Desktop) ===== */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-neutral-500 px-2 pb-2">
                Navigation
              </p>

              <div className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    className={[
                      "flex items-center gap-2 px-3 py-2 rounded-2xl text-sm transition text-left",
                      activeId === s.id
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-black/[0.04]",
                    ].join(" ")}
                  >
                    <span className={activeId === s.id ? "text-white" : "text-neutral-500"}>
                      {s.icon}
                    </span>
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-2xl bg-black/[0.04]">
                <p className="text-xs text-neutral-600">
                  Quick pitch ✨
                </p>
                <p className="text-sm text-neutral-800 mt-1">
                  Full-stack engineer focused on shipping clean UI + reliable APIs.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="space-y-12">
          {/* ===== About (Stronger identity section) ===== */}
          <RevealSection id="about">
            <SectionTitle title="About" subtitle="A quick story of what I do and how I work." />
            <Card>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-neutral-800 text-justify leading-relaxed">
                    I’m a <b>Software Engineer</b> who enjoys building products end-to-end—clean UI,
                    reliable backend APIs, and smooth releases. I’ve worked on production systems
                    supporting real users, and I’m most comfortable in <b>React/TypeScript</b> and
                    <b> Python (Flask)</b>, with database performance tuning and cloud deployments.
                  </p>
                  <p className="text-neutral-800 text-justify leading-relaxed mt-4">
                    I care about <b>craft</b> (readable code), <b>speed</b> (performance), and <b>ownership</b>
                    (shipping features all the way to production).
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Chip>React</Chip>
                    <Chip>React Native</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Python / Flask</Chip>
                    <Chip>REST APIs</Chip>
                    <Chip>MySQL / PostgreSQL</Chip>
                    <Chip>AWS (EC2 / RDS / S3)</Chip>
                    <Chip>Agile / Scrum</Chip>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="rounded-2xl border border-black/10 bg-[#FBFBFD] p-4">
                    <p className="text-sm font-semibold">Currently</p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                      <li>• Building portfolio + interview readiness</li>
                      <li>• Strengthening system design + DSA</li>
                      <li>• Improving cloud + CI/CD depth</li>
                    </ul>

                    <div className="mt-4 pt-4 border-t border-black/10">
                      <p className="text-sm font-semibold">Open to</p>
                      <p className="text-sm text-neutral-700 mt-2">
                        SDE / Full-Stack / Frontend / Backend roles (US)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </RevealSection>

          {/* ===== Highlights ===== */}
          <RevealSection id="highlights">
            <SectionTitle title="Highlights" subtitle="A few measurable outcomes and strengths." />
            <div className="grid md:grid-cols-3 gap-5">
              <StatCard value="50K+" label="Daily users supported" />
              <StatCard value="~20%" label="API latency improvement" />
              <StatCard value="95%+" label="On-time sprint delivery" />
            </div>
          </RevealSection>

          {/* ===== Education ===== */}
          <RevealSection id="education">
            <SectionTitle title="Education" />
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <p className="text-sm text-neutral-500">Jan 2024 – Dec 2025</p>
                <h3 className="mt-2 text-lg font-semibold">Wilmington University, USA</h3>
                <p className="text-neutral-700">M.S. Information Systems Technologies</p>
              </Card>

              <Card>
                <p className="text-sm text-neutral-500">Aug 2018 – Jul 2022</p>
                <h3 className="mt-2 text-lg font-semibold">
                  New Horizon College of Engineering (VTU), India
                </h3>
                <p className="text-neutral-700">B.E. Computer Science Engineering</p>
              </Card>
            </div>
          </RevealSection>

          {/* ===== Experience (Timeline style) ===== */}
          <RevealSection id="experience">
            <SectionTitle title="Professional Experience" subtitle="Where I shipped real software." />
            <div className="space-y-5">
              <TimelineCard
                title="Software Developer"
                company="More Retail Pvt Ltd"
                location="Bengaluru, India"
                dates="Apr 2022 – Dec 2023"
                bullets={[
                  "Delivered production features across web and mobile using React, React Native, and TypeScript/JavaScript.",
                  "Built and maintained backend services and REST APIs using Python (Flask) with consistent validation and error handling.",
                  "Optimized MySQL/PostgreSQL queries (indexes, joins, schema tuning), reducing API response latency by ~20%.",
                  "Handled production support and defect resolution using logs + root-cause analysis to keep releases stable.",
                  "Supported AWS deployments (EC2/RDS/S3) and contributed to CI/CD release readiness.",
                  "Gained exposure to Docker/Kubernetes patterns for environment consistency and scalable deployments.",
                ]}
              />

              <TimelineCard
                title="Program Analyst Trainee"
                company="Cognizant Technology Solutions"
                location="Bengaluru, India"
                dates="Jan 2022 – Apr 2022"
                bullets={[
                  "Strengthened DSA, OOP, debugging, and problem-solving through structured exercises and assessments.",
                  "Practiced SDLC fundamentals (requirements → implementation → validation) with focus on maintainability.",
                  "Improved code quality via clean code principles (modularity, readability, naming) and iterative reviews.",
                  "Built small backend utilities using Python and SQL focusing on correctness and documentation habits.",
                ]}
              />
            </div>
          </RevealSection>

          {/* ===== Skills (Chips + grouped) ===== */}
          <RevealSection id="skills">
            <SectionTitle title="Skills" subtitle="My toolbox (grouped for clarity)." />

            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <h3 className="font-semibold">Languages</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "C#", "Bash", "PowerShell (basic)"].map(
                    (x) => (
                      <Chip key={x}>{x}</Chip>
                    )
                  )}
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold">Frontend & Mobile</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "React Native", "HTML5", "CSS3", "Responsive UI", "Component Design"].map((x) => (
                    <Chip key={x}>{x}</Chip>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold">Backend & APIs</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Python (Flask)", "REST API Design", "Integrations", "Validation", "Error Handling", "Node.js (basic)"].map(
                    (x) => (
                      <Chip key={x}>{x}</Chip>
                    )
                  )}
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold">Cloud & DevOps</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["AWS (EC2, S3, RDS)", "CI/CD", "Git/GitHub", "Linux", "Docker (exposure)", "Kubernetes (exposure)"].map(
                    (x) => (
                      <Chip key={x}>{x}</Chip>
                    )
                  )}
                </div>
              </Card>
            </div>
          </RevealSection>

          {/* ===== Projects (Upgraded cards + CTAs + tags) ===== */}
          <RevealSection id="projects">
            <SectionTitle title="Projects" subtitle="Selected work that represents me best." />

            <div className="grid md:grid-cols-2 gap-5">
              <ProjectCard
                title="AI Music Recommendation System"
                description="Emotion-based recommendation system for personalized music suggestions."
                tags={["Python", "ML Workflow", "Backend", "Evaluation"]}
                bullets={[
                  "Built emotion-based recommendation workflow for personalized suggestions.",
                  "Designed modular processing and backend logic in Python for reliability.",
                  "Focused on maintainable pipeline structure and evaluation flow.",
                ]}
                primaryHref="https://github.com/Keerthik2700"
                primaryLabel="View Code"
                secondaryHref="mailto:keerthik2700@gmail.com?subject=Project%20Demo%20Request"
                secondaryLabel="Request Demo"
              />

              <ProjectCard
                title="SCDLC – Sustainable Course Development Lifecycle"
                description="A system-thinking approach to improve course delivery and industry alignment."
                tags={["SDLC", "Documentation", "Roadmap", "Process Design"]}
                bullets={[
                  "Applied SDLC and system-thinking to redesign course delivery.",
                  "Documented requirements and gaps into a structured improvement roadmap.",
                  "Delivered clear artifacts emphasizing maintainability and scalability.",
                ]}
                primaryHref="mailto:keerthik2700@gmail.com?subject=SCDLC%20Artifacts%20Request"
                primaryLabel="See Artifacts"
                secondaryHref="https://www.linkedin.com/in/keerthi-kumar-basavaraj/"
                secondaryLabel="Connect"
              />
            </div>
          </RevealSection>

          {/* ===== Certifications ===== */}
          <section id="certifications">
  <div className="flex items-end justify-between mb-5">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
      Certifications
    </h2>
  </div>

  <Card>
    <ul className="space-y-3 text-neutral-800 text-justify">
      <li>
        <b>McKinsey.org Forward Program</b> — McKinsey & Company  
        <span className="block text-sm text-neutral-600">
          Problem solving, structured thinking, digital and business fundamentals
        </span>
      </li>

      <li>
        <b>Artificial Intelligence Fundamentals</b> — IBM  
        <span className="block text-sm text-neutral-600">
          Core AI concepts, applied use cases, and responsible AI foundations
        </span>
      </li>

      <li>
        <b>Data Fundamentals</b> — IBM  
        <span className="block text-sm text-neutral-600">
          Data concepts, analytics basics, and data-driven decision making
        </span>
      </li>

      <li>
        <b>JavaScript: Test-Driven Development (ES6)</b> — LinkedIn Learning  
        <span className="block text-sm text-neutral-600">
          Writing reliable, testable JavaScript using modern ES6 practices
        </span>
      </li>
    </ul>
  </Card>
</section>


          {/* ===== Contact ===== */}
          <RevealSection id="contact">
            <SectionTitle title="Contact" subtitle="Let’s talk — I reply fast 🙂" />
            <Card>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-neutral-800">
                    Want to collaborate or discuss a role?
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Email is best. LinkedIn works too.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:keerthik2700@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition"
                  >
                    <FaEnvelope />
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/keerthi-kumar-basavaraj/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Keerthik2700"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </Card>
          </RevealSection>
        </main>
      </div>

      {/* ===== Back To Top Button ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={[
          "fixed z-50 right-5 bottom-5 p-3 rounded-2xl border border-black/10 shadow-sm transition",
          "bg-white hover:bg-black/[0.03]",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      {/* ===== Footer ===== */}
      <footer className="border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Keerthi Kumar Basavaraj
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:keerthik2700@gmail.com"
              className="p-3 rounded-xl border border-black/10 bg-[#FBFBFD] hover:bg-black/[0.02] transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Keerthik2700"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-black/10 bg-[#FBFBFD] hover:bg-black/[0.02] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthi-kumar-basavaraj/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-black/10 bg-[#FBFBFD] hover:bg-black/[0.02] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------------------- UI Components ----------------------------- */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-neutral-600">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-black/10 bg-[#FBFBFD]">
      {children}
    </span>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-neutral-600">{label}</p>
    </div>
  );
}

function TimelineCard({ title, company, location, dates, bullets }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-neutral-700">
            {company} • {location}
          </p>
        </div>
        <p className="text-sm text-neutral-500">{dates}</p>
      </div>

      <ul className="mt-4 space-y-2 text-neutral-800 list-disc pl-5 text-justify">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags = [],
  bullets = [],
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-700">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      <ul className="mt-4 space-y-2 list-disc pl-5 text-neutral-800 text-justify">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">
        {primaryHref ? (
          <a
            href={primaryHref}
            target={primaryHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryHref.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm"
          >
            {primaryLabel || "Primary"}
          </a>
        ) : null}

        {secondaryHref ? (
          <a
            href={secondaryHref}
            target={secondaryHref.startsWith("http") ? "_blank" : undefined}
            rel={secondaryHref.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition text-sm"
          >
            {secondaryLabel || "Secondary"}
          </a>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------- Reveal On Scroll (No libs) ------------------------- */
function RevealSection({ id, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) setShown(true);
      },
      { threshold: 0.12 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={[
        "scroll-mt-28 transition-all duration-700",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
      ].join(" ")}
    >
      {children}
    </section>
  );
}
