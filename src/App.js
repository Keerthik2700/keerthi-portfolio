import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-indigo-900/90 backdrop-blur-md shadow-md"
            : "bg-gradient-to-r from-purple-700 to-indigo-900"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Keerthi Kumar Basavaraj</h1>
          <nav className="flex space-x-6">
            <a
              href="https://github.com/Keerthik2700"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/keerthikumarb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:keerthikumarbe@gmail.com"
              className="hover:text-gray-300"
            >
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1Xq4aR11jgAuX69XKccfa84405etzf-54/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

        {/* ===== Professional Summary ===== */}
          <main className="flex-grow container mx-auto px-6 py-20">
            {/* Title & Location → Center */}
            <div className="text-center">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Software Developer
              </h2>
              <p className="mt-3 text-gray-400">📍 Claymont, DE</p>
              <a
                href="mailto:keerthik2700@gmail.com"
                className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Contact Me
              </a>
            </div>

             {/* ===== Profile Summary ===== */}
              <div className="mt-10 max-w-6xl mx-auto px-6">
                <p className="text-lg text-gray-300 leading-relaxed text-justify">
                  I am a <b>graduate student at Wilmington University</b> with <b>1.5+ years of professional 
                  experience</b> in software development. I have built <b>frontend applications</b> with 
                  <b> React and modern UI frameworks</b>, ensuring responsive and intuitive user experiences. 
                  On the backend, I specialize in <b>Flask and Node.js</b>, where I’ve designed and optimized 
                  <b> scalable REST APIs</b>, reduced query latency, and improved database performance.
                  My expertise also extends to <b>cloud computing</b>, with hands-on experience deploying 
                  and managing applications on <b>AWS (EC2, S3)</b> while implementing <b>CI/CD pipelines</b> 
                  to ensure reliability and scalability. With a strong foundation in <b>Data Structures & 
                  Algorithms (DSA)</b>, <b>Operating Systems</b>, and <b>System Design</b>, I bring both 
                  academic depth and real-world engineering experience to solving complex problems.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed text-justify mt-4">
                 
                </p>

                <p className="text-lg text-gray-300 leading-relaxed text-justify mt-4">
                  Beyond technical skills, I thrive in <b>cross-functional teams</b>, mentoring peers, 
                  and working in agile environments. I am passionate about building <b>end-to-end solutions</b> 
                  that combine <b>frontend usability</b>, <b>backend efficiency</b>, and <b>cloud-native 
                  deployments</b> to deliver impactful software products.
                </p>
              </div>
          </main>


      {/* ===== Skills Section ===== */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "React Native",
              "JavaScript",
              "TypeScript",
              "Python (Flask)",
              "C++",
              "DSA",
              "System Design",
              "Operating Systems",
              "MySQL",
              "PostgreSQL",
              "AWS (EC2, S3)",
              "CI/CD (GitHub Actions)",
              "Redux",
              "REST APIs",
              "Node.js",
              "Git / GitHub",
              "HTML5 / CSS3",
              "Agile / Scrum",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Experience Section ===== */}
      <section className="bg-gray-900 py-12">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-8">Experience</h3>
    
    {/* Responsive grid */}
    <div className="grid md:grid-cols-2 gap-8">
      
              {/* SDE Intern */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">SDE Intern</h4>
              <p className="text-gray-400">
                More Retail Pvt Ltd • April 2022 – July 2022 • Bangalore, India
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-justify mt-5">
                <li>
                  Contributed to <b>UI development</b> in <b>React Native</b>, learning to build 
                  <b> responsive layouts</b> and improve user interactions.
                </li>
                <li>
                  Assisted in integrating <b>backend REST APIs</b> with the front end, gaining 
                  hands-on experience in <b>client–server communication</b>.
                </li>
                <li>
                  Explored and supported <b>CI/CD pipelines</b> for <b>automated deployments</b>, 
                  improving understanding of <b>DevOps practices</b>.
                </li>
                <li>
                  Practiced writing and running <b>unit tests</b> to improve code 
                  <b> stability</b> and <b> reliability</b>.
                </li>
              </ul>
            </div>

            {/* Software Developer */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">Software Developer</h4>
              <p className="text-gray-400">
                More Retail Pvt Ltd • July 2022 – December 2023 • Bangalore, India
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-justify mt-5">
                <li>
                  Designed and optimized <b>Flask-based REST APIs</b>, reducing 
                  average latency by <b>20%</b> and enabling smoother 
                  <b> customer-facing applications</b>.
                </li>
                <li>
                  Enhanced <b>MySQL database performance</b> by <b>25%</b> through 
                  <b> schema redesign</b>, <b>indexing strategies</b>, and 
                  <b> query optimization</b>, improving scalability for high-traffic apps.
                </li>
                <li>
                  Developed and deployed <b>React Native features</b> used by 
                  <b>50K+ active users</b>, significantly improving 
                  <b> usability</b>, <b>retention</b>, and <b>app engagement</b>.
                </li>
                <li>
                  Automated <b>AWS deployments</b> (EC2, S3) using 
                  <b> CI/CD pipelines</b>, ensuring <b>99.9% uptime</b> and reducing 
                  manual operational overhead.
                </li>
                <li>
                  Mentored and guided <b>4+ junior developers</b>, streamlining 
                  onboarding and cutting ramp-up time by <b>40%</b> through 
                  <b> code reviews</b>, <b>pair programming</b>, and 
                  <b>knowledge-sharing sessions</b>.
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

          {/* ===== Education Section ===== */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Education</h3>
          
          {/* Responsive Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* WilmU */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                Wilmington University, <br/>
                M.S. in Information Systems Technologies
              </h4>
              <p className="text-gray-400">January 2024 – December 2025</p>
              <p className="mt-3 text-gray-300">
                Relevant Coursework: <b>Cloud Computing</b>, <b>Advanced Databases</b>, 
                <b> Software Engineering</b>, <b>AI & Machine Learning</b>, 
                <b> Web Application Development</b>.
              </p>
            </div>

            {/* NHCE */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                New Horizon College of Engineering, <br />
                B.E in Computer Science Engineering <br />
                <span className="text-gray-400 text-sm">
                  (Affiliated to Visvesvaraya Technological University)
                </span>
              </h4>
              <p className="text-gray-400">August 2018 – July 2022</p>
              <p className="mt-3 text-gray-300">
                Relevant Coursework: <b>Data Structures & Algorithms</b>, 
                <b> Operating Systems</b>, <b>Database Management Systems</b>, 
                <b> Computer Networks</b>, <b>System Design</b>.
              </p>
            </div>

          </div>
        </div>
      </section>

              {/* ===== Certificates Section ===== */}
        <section className="bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-8">Certificates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <a href="https://www.credly.com/badges/e7b9c6e4-7c97-4750-88fc-906c42c914c1/public_url" 
                target="_blank" rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-indigo-400">McKinsey.org Forward Program</h4>
                <p className="text-gray-400 text-sm">Career readiness & leadership skills</p>
              </a>

              <a href="https://www.credly.com/badges/24a57b06-591b-4e17-a020-1e9b480a3486/public_url" 
                target="_blank" rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-indigo-400">IBM AI Fundamentals</h4>
                <p className="text-gray-400 text-sm">AI/ML basics, models, and applications</p>
              </a>

              <a href="https://www.credly.com/badges/b7038112-1d6d-4bed-8ac0-aa7bacf784ed/public_url" 
                target="_blank" rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-indigo-400">IBM Data Fundamentals</h4>
                <p className="text-gray-400 text-sm">Databases, SQL, and data handling</p>
              </a>

              <a href="https://www.linkedin.com/learning/certificates/06718f3822d91d4451b46dcdb3bca388943138d700ea3bdf0f44619ef539c042?trk=share_certificate" 
                target="_blank" rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-indigo-400">React.js Essential Training</h4>
                <p className="text-gray-400 text-sm">Core React concepts & modern UI development</p>
              </a>

              <a href="https://www.linkedin.com/learning/certificates/1134ca7d3e155d3140a6ad230c94f5e3a7166a79dcad22713b529f8d6ad84f25?trk=share_certificate" 
                target="_blank" rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-indigo-400">React State Management</h4>
                <p className="text-gray-400 text-sm">Redux, context, and efficient state handling</p>
              </a>

   

            <a href="https://www.linkedin.com/learning/certificates/4c850a49882bcc996fd3aafcfab3df98e7c9ac843fc49baf744fb8c5687193ad?trk=share_certificate" 
            target="_blank" rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-indigo-400">React Router</h4>
            <p className="text-gray-400 text-sm">Client-side routing and navigation in React apps</p>
          </a>
          </div>
          </div>
        </section>


      {/* ===== Footer ===== */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-3">
            <a
              href="https://github.com/Keerthik2700"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthikumarbasavaraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:keerthikumarbe@gmail.com"
              className="hover:text-gray-200 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm">© 2025 Keerthi Kumar Basavaraj</p>
        </div>
      </footer>
    </div>
  );
}
