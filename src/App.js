import React from "react";

// ===== Profile =====
const profile = {
  name: "Keerthi Kumar Basavaraj",
  title: "Full-Stack / Frontend Software Developer",
  blurb:
    "Graduate student at Wilmington University with 1.5+ years of experience. I’ve shipped full-stack features (React + Flask), optimized APIs & DBs, and love building fast, intuitive apps.",
  location: "Claymont, DE",
  email: "keerthik2700@gmail.com",
  github: "https://github.com/Keerthik2700",
  linkedin: "https://linkedin.com/in/keerthi-kumar-b-774391187",
  resume: "/Keerthi_Resume.pdf", // Put your resume in public folder
};

// ===== Skills =====
const skills = [
  "React.js",
  "React Native",
  "JavaScript / TypeScript",
  "Python (Flask)",
  "C++ (DSA)",
  "MySQL / PostgreSQL",
  "AWS (EC2, S3)",
  "CI/CD (GitHub Actions)",
  "Redux",
  "Docker",
];

// ===== Experience =====
const experience = [
  {
    company: "More Retail Pvt Ltd",
    role: "Software Developer",
    period: "Jul 2022 – Dec 2023",
    location: "Bangalore, India",
    bullets: [
      "Built and optimized Flask REST APIs (20% faster latency).",
      "Improved MySQL throughput by 25% with schema tuning.",
      "Developed React Native app features for 50K+ users.",
      "Automated AWS deployments → 99.9% uptime.",
      "Mentored 4+ juniors, cut onboarding time by 40%.",
    ],
  },
  {
    company: "More Retail Pvt Ltd",
    role: "SDE Intern",
    period: "Apr 2022 – Jul 2022",
    location: "Bangalore, India",
    bullets: [
      "Contributed UI components in React Native.",
      "Integrated backend APIs; reduced testing errors by 15%.",
    ],
  },
];

// ===== Education =====
const education = [
  {
    school: "Wilmington University",
    degree: "M.S. Information Systems Technologies",
    period: "Jan 2024 – Dec 2025",
    extras: ["GPA: 3.87"],
  },
  {
    school: "New Horizon College of Engineering",
    degree: "B.E. Computer Science",
    period: "2018 – 2022",
    extras: ["CGPA: 8.25"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* ===== Header ===== */}
      <header className="sticky top-0 bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">{profile.name}</h1>
          <div className="space-x-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800"
            >
              GitHub
            </a>
            <a
              href={profile.resume}
              className="px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">{profile.title}</h2>
        <p className="mt-4 text-lg text-gray-600">{profile.blurb}</p>
        <p className="mt-2 text-gray-500">📍 {profile.location}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Contact Me
        </a>
      </section>

      {/* ===== Skills ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-gray-200 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ===== Experience ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="p-5 border rounded-md bg-white shadow-sm">
              <h4 className="text-lg font-bold">{exp.role}</h4>
              <p className="text-sm text-gray-500">
                {exp.company} • {exp.period} • {exp.location}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Education ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="p-5 border rounded-md bg-white shadow-sm">
              <h4 className="text-lg font-bold">{edu.school}</h4>
              <p>{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
              {edu.extras && (
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {edu.extras.map((e, j) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-6 border-t mt-12 text-gray-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}