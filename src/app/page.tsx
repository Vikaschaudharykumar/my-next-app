'use client';
import React from 'react';
import Head from 'next/head';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Vikash Kumar - Resume</title>
        <meta name="description" content="Vikash Kumar - Full Stack Developer Resume" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="resume-page">
        {/* Header Section */}
        <header className="resume-header">
          <div className="container">
            <h1>VIKASH KUMAR</h1>
            <h2>Full Stack Developer</h2>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Ghaziabad (Raghunathpuri)</p>
              <p><i className="fas fa-envelope"></i> vk643478@gmail.com</p>
              <p><i className="fas fa-phone"></i> +91 7668160587</p>
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
                <h3 className="section-title">
                  <i className="fas fa-user"></i> Professional Summary
                </h3>
                <p>
                  Motivated and skilled Full-Stack Developer with over 1 year of hands-on experience in designing, developing, and deploying dynamic web applications using React.js, Next.js, Node.js, PHP (Laravel) and other modern technologies. Strong background in computer science, with a diploma and ongoing B.Tech through lateral entry. Proficient in both frontend and backend development with a passion for learning and delivering scalable software solutions.
                </p>
              </section>

              {/* Work Experience Section */}
              <section className="resume-section">
                <h3 className="section-title">
                  <i className="fas fa-briefcase"></i> Work Experience
                </h3>
                
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>iNextErp Solutions Pvt Ltd, Noida</h4>
                    <span className="experience-date">2024 - Present</span>
                  </div>
                  <ul>
                    <li>Working on full-stack development using React.js for frontend and Node.js + MySQL for backend.</li>
                    <li>Building scalable and dynamic web applications.</li>
                    <li>Implementing API integration, form validations, and backend services.</li>
                    <li>Writing clean, maintainable, and reusable code for complex features.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Maxtra Technologies, Noida</h4>
                    <span className="experience-date">2023 – 2024</span>
                  </div>
                  <ul>
                    <li>Developed web applications using PHP, Laravel, and phpMyAdmin for database management.</li>
                    <li>Built backend APIs and managed MySQL database operations.</li>
                    <li>Created responsive user interfaces and handled AJAX requests.</li>
                    <li>Participated in bug fixing, testing, and optimization of existing systems.</li>
                  </ul>
                </div>
              </section>

              {/* Education Section */}
              <section className="resume-section">
                <h3 className="section-title">
                  <i className="fas fa-graduation-cap"></i> Education
                </h3>
                
                <div className="education-item">
                  <h4>Bachelor of Technology (B.Tech) – Computer Science Engineering</h4>
                  <p className="institution">Subharti University (Meerut) - Lateral Entry</p>
                  <div className="education-details">
                    <span><strong>2nd Year:</strong> 70%</span>
                    <span><strong>3rd Year:</strong> 73% (Ongoing)</span>
                  </div>
                  <p className="passing-year"><strong>Year of Passing:</strong> 2021</p>
                </div>

                <div className="education-item">
                  <h4>Diploma – Polytechnic in Computer Science</h4>
                  <p className="institution">PK University (Mathura)</p>
                  <div className="education-details">
                    <span><strong>1st Year:</strong> Lateral Entry</span>
                    <span><strong>2nd Year:</strong> 70%</span>
                  </div>
                  <p className="passing-year"><strong>Year of Passing:</strong> 2019</p>
                </div>

                <div className="education-item">
                  <p><strong>Higher Secondary (12th), Science Stream:</strong> 70%</p>
                  <p><strong>Secondary (10th):</strong> 72%</p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Technical Skills Section */}
              <section className="resume-section">
                <h3 className="section-title">
                  <i className="fas fa-code"></i> Technical Skills
                </h3>
                
                <div className="skills-category">
                  <h4>Frontend</h4>
                  <div className="skills-list">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>AJAX</span>
                    <span>React.js</span>
                    <span>Next.js</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Backend</h4>
                  <div className="skills-list">
                    <span>Node.js</span>
                    <span>PHP</span>
                    <span>Laravel</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Database</h4>
                  <div className="skills-list">
                    <span>MySQL</span>
                    <span>MsSQL</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Tools & Technologies</h4>
                  <div className="skills-list">
                    <span>GitLab</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Postman</span>
                    <span>REST APIs</span>
                    <span>JSON</span>
                    <span>MVC Architecture</span>
                    <span>Responsive Design</span>
                    <span>Admin Panel</span>
                    
                  </div>
                </div>
              </section>

              {/* Additional Information Section */}
              <section className="resume-section">
                <h3 className="section-title">
                  <i className="fas fa-info-circle"></i> Additional Information
                </h3>
                
                <div className="additional-info">
                  <div className="info-item">
                    <h4>Languages</h4>
                    <p>English, Hindi</p>
                  </div>
                  
                  <div className="info-item">
                    <h4>Certification</h4>
                    <p>Full Stack Developer</p>
                    <p>Ducat IT Training School, Noida (Sector-63)</p>
                    <p><strong>ID:</strong> Nl63J5819</p>
                  </div>
                </div>
              </section>

              {/* Download Button */}
              <div className="download-section">
                <a href="https://vikaschaudharykumar.github.io/portfolio/" className="download-btn" >
                  <i className="fas fa-download"></i> View More
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="resume-footer">
          <div className="container">
            <p>Thank you for reviewing my resume!</p>
            <div className="social-links">
              <a href="https://github.com/vikaschaudharykumar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="linkedin.com/in/vikash-chaudhary-3b3926285" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:vk643478@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .resume-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .resume-header {
          background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
          color: white;
          padding: 40px 0;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .resume-header h1 {
          font-size: 2.8rem;
          margin-bottom: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .resume-header h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 300;
          opacity: 0.9;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 15px;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1rem;
        }

        /* Main Content */
        .resume-content {
          padding: 40px 0;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        /* Section Styles */
        .resume-section {
          background: white;
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resume-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.4rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #3498db;
          color: #2c3e50;
        }

        .section-title i {
          color: #3498db;
        }

        /* Experience Section */
        .experience-item {
          margin-bottom: 25px;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .experience-header h4 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin: 0;
        }

        .experience-date {
          background: #3498db;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .experience-item ul {
          padding-left: 20px;
        }

        .experience-item li {
          margin-bottom: 8px;
        }

        /* Education Section */
        .education-item {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }

        .education-item:last-child {
          border-bottom: none;
        }

        .education-item h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .institution {
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 8px;
        }

        .education-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .passing-year {
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        /* Skills Section */
        .skills-category {
          margin-bottom: 20px;
        }

        .skills-category h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 10px;
          padding-left: 5px;
          border-left: 3px solid #3498db;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skills-list span {
          background: #ecf0f1;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          color: #2c3e50;
          transition: all 0.3s ease;
        }

        .skills-list span:hover {
          background: #3498db;
          color: white;
          transform: translateY(-2px);
        }

        /* Additional Information */
        .info-item {
          margin-bottom: 15px;
        }

        .info-item h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .info-item p {
          margin: 3px 0;
        }

        /* Download Button */
        .download-section {
          text-align: center;
          margin-top: 20px;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          color: white;
          padding: 12px 25px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
        }

        /* Footer */
        .resume-footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 30px 0;
          margin-top: 40px;
        }

        .resume-footer p {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #3498db;
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .resume-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .resume-header h1 {
            font-size: 2.2rem;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 768px) {
          .resume-header {
            padding: 30px 0;
          }
          
          .resume-content {
            padding: 20px 0;
          }
          
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }
          
          .education-details {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;