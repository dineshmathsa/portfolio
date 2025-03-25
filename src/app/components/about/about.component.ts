import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <section class="about-header">
        <div class="profile-section">
          <div class="profile-image">
            <img 
              src="assets/profile/profile image2_imresizer.jpg" 
              alt="Mathsa Vign Dinesh"
              (error)="handleImageError($event)"
            >
          </div>
          <div class="profile-info">
            <h1>Mathsa Vign Dinesh</h1>
            <p class="role">MEAN Stack Developer</p>
            <div class="contact-details">
              <p><strong>Email:</strong> dineshmathsa&#64;gmail.com</p>
              <p><strong>Phone:</strong> +91 9490417476</p>
              <p><strong>Location:</strong> Hyderabad</p>
            </div>
            <div class="resume-btn">
              <a href="assets/resume/Mathsa_Vign_Dinesh_Resume.pdf" 
                 download 
                 class="download-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="content-grid">
        <section class="card experience-card">
          <div class="card-content">
            <h3>Full Stack Development</h3>
            <div class="highlight-point">
              Architected and developed scalable MEAN stack applications with microservices architecture
            </div>
            <div class="highlight-point">
              Implemented responsive UI designs using Angular, achieving 50% faster load times
            </div>
            <div class="highlight-point">
              Developed RESTful and GraphQL APIs with Node.js and Express, improving data retrieval by 50%
            </div>
            <div class="highlight-point">
              Designed and optimized MongoDB and MySQL databases for efficient data management
            </div>
            <h3>DevOps & Cloud</h3>
            <div class="highlight-point">
              Implemented CI/CD pipelines using Jenkins for automated testing and deployment
            </div>
            <div class="highlight-point">
              Managed Kubernetes clusters for container orchestration and scaling
            </div>
            <div class="highlight-point">
              Utilized AWS Lambda and S3 for serverless architecture and storage solutions
            </div>
            <div class="highlight-point">
              Set up Grafana monitoring dashboards for real-time performance tracking
            </div>
          </div>
        </section>

        <section class="card skills-card">
          <div class="skills-content">
            <div class="skill-category">
              <h3>Frontend Development</h3>
              <div class="skill-group">
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">Bootstrap</span>
              </div>
            </div>
            <div class="skill-category">
              <h3>Backend Development</h3>
              <div class="skill-group">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">NestJS</span>
                <span class="skill-tag">Python</span>
              </div>
            </div>
            <div class="skill-category">
              <h3>Database & API</h3>
              <div class="skill-group">
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">GraphQL</span>
                <span class="skill-tag">REST</span>
              </div>
            </div>
            <div class="skill-category">
              <h3>DevOps & Cloud</h3>
              <div class="skill-group">
                <span class="skill-tag">Jenkins</span>
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">AWS Lambda</span>
                <span class="skill-tag">S3</span>
              </div>
            </div>
          </div>
        </section>

        <section class="card education-card">
          <div class="education-content">
            <div class="edu-item">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p class="edu-institution">Raghu Engineering College</p>
              <p class="edu-details">2018 - 2022 | CGPA: 8.73</p>
            </div>
            <div class="edu-item">
              <h3>Intermediate Education</h3>
              <p class="edu-institution">Ascent Junior College</p>
              <p class="edu-details">2016 - 2018 | Percentage: 91%</p>
            </div>
            <div class="edu-item">
              <h3>Secondary Education (CBSE)</h3>
              <p class="edu-institution">Vishaka Valley School</p>
              <p class="edu-details">2016 | CGPA: 9.4</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: var(--bg-main);
    }

    .about-header {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-md);
    }

    .profile-section {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-info {
      flex: 1;
    }

    .profile-info h1 {
      color: #ffffff;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .role {
      color: #e0d5ff;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .contact-details {
      margin-top: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1.2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-details p {
      color: white;
      margin: 0.7rem 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    .contact-details strong {
      color: rgba(255, 255, 255, 0.9);
      margin-right: 1rem;
      min-width: 80px;
      font-weight: 500;
    }

    .resume-btn {
      margin-top: 1.5rem;
    }

    .download-btn {
      display: inline-block;
      background: #8a6fff;
      color: #ffffff;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .download-btn:hover {
      background: #9d87ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card {
      height: 100%;
      overflow-y: auto;
      max-height: 600px;
      background: var(--bg-card);
      border-radius: 15px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s;
      border: 1px solid var(--border-color);
    }

    .card::-webkit-scrollbar {
      width: 6px;
    }

    .card::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }

    .card::-webkit-scrollbar-thumb {
      background: var(--primary-light);
      border-radius: 3px;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
      border-bottom: 2px solid var(--primary-light);
      padding-bottom: 0.5rem;
    }

    .skill-category {
      margin-bottom: 2rem;
    }

    .skill-category h3 {
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .skill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.5rem;
    }

    .skill-tag {
      background: var(--primary-light);
      color: var(--text-primary);
      padding: 0.6rem 1.2rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s;
      border: 1px solid rgba(138, 111, 255, 0.2);
    }

    .skill-tag:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(138, 111, 255, 0.2);
    }

    .education-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .edu-item {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
    }

    .edu-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .edu-institution {
      color: var(--text-primary);
      font-size: 1.1rem;
      margin: 0.5rem 0;
    }

    .edu-details {
      color: var(--text-muted);
      font-size: 1rem;
    }

    .highlight-point {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      color: var(--text-primary);
      font-size: 1rem;
      line-height: 1.6;
    }

    .highlight-point:before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      background: var(--accent);
      border-radius: 50%;
    }

    @media (max-width: 1200px) {
      .content-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .profile-section {
        flex-direction: column;
        text-align: center;
      }

      .content-grid {
        grid-template-columns: 1fr;
      }

      .card {
        max-height: none;
      }

      .contact-details {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .contact-details p {
        justify-content: center;
      }

      .resume-btn {
        text-align: center;
      }

      .skill-group {
        justify-content: center;
      }
    }
  `]
})
export class AboutComponent {
  handleImageError(event: any) {
    event.target.src = 'assets/profile/default-avatar.png';
  }
}