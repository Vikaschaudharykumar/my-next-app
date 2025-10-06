'use client';
import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaInfoCircle, FaUser, FaExternalLinkAlt, FaShareAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Vikash Kumar - Full Stack Developer Resume</title>
        <meta name="description" content="Professional resume of Vikash Kumar - Full Stack Developer with React.js, Node.js, PHP Laravel expertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="resume-page">
        {/* Header Section */}
        <header className="resume-header">
          <div className="container">
            <div className="header-content">
              <div className="name-title">
                <h1>VIKASH KUMAR</h1>
                <h2>Full Stack Developer</h2>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Ghaziabad (Raghunathpuri)</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>vk643478@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+91 7668160587</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="resume-content container">
          <div className="resume-grid">
            {/* Left Column */}
            <div className="left-column">
              {/* Summary Section */}
              <section className="resume-section">
                <div className="section-header">
                  <div className="section-title">
                    <FaUser className="title-icon" />
                    <h3>Professional Summary</h3>
                  </div>
                  <div className="portfolio-link">
                    <a
                      href="https://vikash-portfolio-sage.vercel.app/"
                      className="portfolio-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      View Portfolio
                    </a>
                  </div>
                </div>
                <p className="summary-text">
                  Motivated and skilled Full-Stack Developer with over 1 year of hands-on
                  experience in designing, developing, and deploying dynamic web
                  applications using React.js, Next.js, Node.js, PHP (Laravel) and other
                  modern technologies. Strong problem-solving abilities and passion for
                  creating efficient, scalable solutions.
                </p>
              </section>

              {/* Work Experience Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaBriefcase className="title-icon" />
                  <h3>Work Experience</h3>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>iNextErp Solutions Pvt Ltd</h4>
                      <p className="company-location">Noida (Sector 63)</p>
                    </div>
                    <span className="experience-date">2024 - Present </span>
                  </div>
                  <ul className="experience-list">
                    <li>Working on full-stack development using React.js (Next.js) for frontend and Node.js + MySQL & MsSql for backend</li>
                    <li>Building scalable and dynamic web applications with modern UI/UX principles</li>
                    <li>Implementing API integration, form validations, and backend services</li>
                    <li>Writing clean, maintainable, and reusable code for complex features</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>Maxtra Technologies</h4>
                      <p className="company-location">Noida (Sector 67)</p>
                    </div>
                    <span className="experience-date">2023 – 2024</span>
                  </div>
                  <ul className="experience-list">
                    <li>Developed web applications using PHP, Laravel, and MySql for database management</li>
                    <li>Built backend APIs and managed MySQL database operations efficiently</li>
                    <li>Created responsive user interfaces and handled AJAX requests</li>
                    <li>Participated in bug fixing, testing, and optimization of existing systems</li>
                  </ul>
                </div>
              </section>

              {/* Education Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaGraduationCap className="title-icon" />
                  <h3>Education</h3>
                </div>

                <div className="education-item">
                  <h4>Bachelor of Technology (B.Tech) – Computer Science Engineering</h4>
                  <p className="institution">Subharti University (Meerut) - Lateral Entry</p>
                  <div className="education-details">
                    <span className="education-year"><strong>2nd Year:</strong> 70%</span>
                    <span className="education-year"><strong>3rd Year:</strong> Ongoing</span>
                  </div>
                </div>

                <div className="education-item">
                  <h4>Diploma – Polytechnic in Computer Science</h4>
                  <p className="institution">PK University (Mathura)</p>
                  <div className="education-details">
                    <span className="education-year"><strong>1st Year:</strong> Lateral Entry</span>
                    <span className="education-year"><strong>2nd Year:</strong> 70%</span>
                  </div>
                  <p className="passing-year"><strong>Year of Passing:</strong> 2024 (72%)</p>
                </div>

                <div className="education-item">
                  <div className="education-school">
                    <p><strong>Higher Secondary (12th), Science Stream:</strong> 70% (2020-2021)</p>
                    <p><strong>Secondary (10th):</strong> 72% (2019-2020)</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Technical Skills Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaCode className="title-icon" />
                  <h3>Technical Skills</h3>
                </div>

                <div className="skills-category">
                  <h4>Frontend Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">jQuery</span>
                    <span className="skill-tag">AJAX</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Backend Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Laravel</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Database Management</h4>
                  <div className="skills-list">
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">MsSQL</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Tools & Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">GitLab</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Postman</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">JSON</span>
                    <span className="skill-tag">MVC Architecture</span>
                    <span className="skill-tag">Responsive Design</span>
                    <span className="skill-tag">Admin Panel</span>
                  </div>
                </div>
              </section>

              {/* Additional Information Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaInfoCircle className="title-icon" />
                  <h3>Additional Information</h3>
                </div>

                <div className="additional-info">
                  <div className="info-item">
                    <h4>Languages</h4>
                    <p>English (Professional), Hindi (Native)</p>
                  </div>

                  <div className="info-item">
                    <h4>Certification</h4>
                    <p><strong>Full Stack Developer</strong></p>
                    <p>Ducat IT Training School, Noida (Sector-63)</p>
                    <p><strong>ID:</strong> Nl63J5819</p>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section className="resume-section">
                <div className="section-title">
                  <FaShareAlt className="title-icon" />
                  <h3>Connect With Me</h3>
                </div>
                <div className="social-links-mini">
                  <a href="https://gitlab.com/vk643478" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub className="social-icon-mini" />
                    <span>GitLab</span>
                  </a>
                  <a href="https://linkedin.com/in/vikash-chaudhary-3b3926285" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin className="social-icon-mini" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:vk643478@gmail.com" className="social-link">
                    <FaEnvelope className="social-icon-mini" />
                    <span>Email</span>
                  </a>
                </div>
              </section>

              {/* Download Button */}
              {/* <section className="resume-section download-section">
                <a href="/resume.pdf" download className="download-btn">
                  <FaDownload className="btn-icon" />
                  Download Resume PDF
                </a>
              </section> */}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="resume-footer">
          <div className="container">
            <p className="footer-text">Thank you for reviewing my resume!</p>
            <div className="social-links">
              <a href="https://gitlab.com/vk643478" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/vikash-chaudhary-3b3926285" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <FaLinkedin />
              </a>
              <a href="mailto:vk643478@gmail.com" className="social-icon-footer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .resume-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #1e293b;
          line-height: 1.6;
          font-size: 14px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .resume-header {
          background: linear-gradient(135deg, #849ae3 0%, #3b82f6 100%);
          color: white;
          padding: 40px 0;
          text-align: center;
          box-shadow: 0 4px 20px rgba(30, 64, 175, 0.2);
        }

        .name-title h1 {
          font-size: 2.5rem;
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }

        .name-title h2 {
          font-size: 1.3rem;
          margin-bottom: 25px;
          font-weight: 400;
          opacity: 0.95;
          letter-spacing: 0.5px;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .contact-icon {
          font-size: 1rem;
          color: #bfdbfe;
        }

        /* Main Content */
        .resume-content {
          padding: 40px 0;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          align-items: start;
        }

        /* Section Styles */
        .resume-section {
          background: white;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .resume-section:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
1e293b
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .section-title h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .title-icon {
          color: #3b82f6;
          font-size: 1.1rem;
        }

        /* Summary Section */
        .portfolio-link {
          flex-shrink: 0;
        }

        .portfolio-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
        }

        .portfolio-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .btn-icon {
          font-size: 0.8rem;
        }

        .summary-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #475569;
          text-align: justify;
        }

        /* Experience Section */
        .experience-item {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .experience-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .company-info h4 {
          font-size: 1.1rem;
          color: #1e293b;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .company-location {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }

        .experience-date {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .experience-list {
          padding-left: 18px;
          margin: 0;
        }

        .experience-list li {
          margin-bottom: 8px;
          line-height: 1.6;
          color: #475569;
          font-size: 0.9rem;
          position: relative;
        }

        .experience-list li::before {
          content: '▹';
          color: #3b82f6;
          font-weight: bold;
          position: absolute;
          left: -15px;
        }

        /* Education Section */
        .education-item {
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }

        .education-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .education-item h4 {
          font-size: 1rem;
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .institution {
          color: #64748b;
          font-style: italic;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .education-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .education-year {
          font-size: 0.9rem;
          color: #475569;
        }

        .passing-year {
          font-size: 0.9rem;
          color: #475569;
          margin-top: 4px;
        }

        .education-school p {
          margin: 6px 0;
          color: #475569;
          font-size: 0.9rem;
        }

        /* Skills Section */
        .skills-category {
          margin-bottom: 20px;
        }

        .skills-category:last-child {
          margin-bottom: 0;
        }

        .skills-category h4 {
          font-size: 1rem;
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 10px;
          padding-left: 6px;
          border-left: 3px solid #3b82f6;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #1e293b;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 3px 8px rgba(59, 130, 246, 0.3);
        }

        /* Additional Information */
        .info-item {
          margin-bottom: 18px;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-item h4 {
          font-size: 1rem;
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .info-item p {
          margin: 4px 0;
          color: #475569;
          font-size: 0.9rem;
        }

        /* Social Links Mini */
        .social-links-mini {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #f8fafc;
          border-radius: 8px;
          text-decoration: none;
          color: #475569;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
          font-size: 0.9rem;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateX(4px);
        }

        .social-icon-mini {
          font-size: 1rem;
          width: 16px;
        }

        /* Download Section */
        .download-section {
          text-align: center;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 1px solid #bae6fd;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 3px 12px rgba(5, 150, 105, 0.3);
        }

        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 18px rgba(5, 150, 105, 0.4);
        }

        /* Footer */
        .resume-footer {
          background: linear-gradient(135deg, #9aa9c1 0%, #334155 100%);
          color: white;
          text-align: center;
          padding: 30px 0;
          margin-top: 40px;
        }

        .footer-text {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #f1f5f9;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-icon-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
        }

        .social-icon-footer:hover {
          background: #3b82f6;
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .resume-grid {
            gap: 25px;
          }
          
          .name-title h1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .resume-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .resume-header {
            padding: 30px 0;
          }
          
          .name-title h1 {
            font-size: 2rem;
          }
          
          .name-title h2 {
            font-size: 1.2rem;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          
          .contact-item {
            width: fit-content;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          
          .education-details {
            flex-direction: column;
            gap: 4px;
          }
          
          .resume-content {
            padding: 25px 0;
          }
          
          .resume-section {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          
          .resume-section {
            padding: 18px;
          }
          
          .name-title h1 {
            font-size: 1.8rem;
          }
          
          .name-title h2 {
            font-size: 1.1rem;
          }
          
          .section-title h3 {
            font-size: 1.1rem;
          }
          
          .portfolio-btn, .download-btn {
            width: 100%;
            justify-content: center;
          }
          
          .contact-item {
            font-size: 0.9rem;
            padding: 6px 14px;
          }
        }

        @media (max-width: 360px) {
          .name-title h1 {
            font-size: 1.6rem;
          }
          
          .contact-info {
            gap: 8px;
          }
          
          .skills-list {
            gap: 6px;
          }
          
          .skill-tag {
            padding: 5px 10px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;