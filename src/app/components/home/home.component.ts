import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="profile-image">
            <img 
              src="assets/profile/profile image2_imresizer.jpg" 
              alt="Mathsa Vign Dinesh"
              (error)="handleImageError($event)"
              loading="eager"
            >
          </div>
          <h1>Mathsa Vign Dinesh</h1>
          <p class="hero-subtitle">MEAN Stack Developer with 3 years of experience, specializing in building scalable web applications using MongoDB, Express.js, Angular, and Node.js</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/dinesh-mathsa-305759199" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/dineshmathsa" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="hero-buttons">
            <a routerLink="/projects" class="btn btn-primary">View My Work</a>
            <a routerLink="/contact" class="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Expertise</h2>
          <div class="title-underline"></div>
        </div>
        <div class="skills-grid">
          <div class="skill-card">
            <i class="fas fa-code"></i>
            <h3>Front End</h3>
            <p>HTML, CSS, Bootstrap, Angular with expertise in creating responsive and modern web applications</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-server"></i>
            <h3>Back End</h3>
            <p>Node.js, Express.js, NestJS, Python with focus on building scalable server architectures</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-database"></i>
            <h3>Database & API</h3>
            <p>MongoDB, MySQL, REST, GraphQL with experience in database architecture and optimization</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-cloud"></i>
            <h3>DevOps & Cloud</h3>
            <p>Jenkins, Kubernetes, AWS Lambda, S3, and expertise in CI/CD pipelines</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <div class="title-underline"></div>
        </div>
        <div class="project-grid">
          <div class="project-card">
            <img src="assets/projects/hrms-dashboard.jpg" alt="HRMS Application">
            <div class="project-content">
              <h3>HRMS Application</h3>
              <p>Developed a comprehensive HRMS application using microservices architecture, improving mobile app performance by 50% through GraphQL APIs</p>
              <div class="tech-stack">
                <span>Angular</span>
                <span>Node.js</span>
                <span>GraphQL</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div class="project-card">
            <img src="assets/projects/monitoring-dashboard.jpg" alt="System Monitoring Dashboard">
            <div class="project-content">
              <h3>Monitoring System</h3>
              <p>Implemented monitoring solutions using Grafana and Kubernetes logs for performance tracking and debugging</p>
              <div class="tech-stack">
                <span>Grafana</span>
                <span>Kubernetes</span>
                <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Let's Build Something Amazing</h2>
        <p>With expertise in full-stack development and a track record of delivering high-quality solutions, I'm ready to help bring your ideas to life</p>
        <a routerLink="/contact" class="btn btn-primary">Get in Touch</a>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      background: #2D1B69;
      background: linear-gradient(135deg, #2D1B69, #1A103F);
    }

    .hero-section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      position: relative;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin-bottom: 1.5rem;
      color: #FFFFFF !important;
      font-weight: 600;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2vw, 1.25rem);
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.9) !important;
      line-height: 1.6;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-button {
      background: #8A4BAF;
      color: white;
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: inline-block;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      box-shadow: 0 4px 15px rgba(138, 75, 175, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(138, 75, 175, 0.4);
      background: #9B5BC0;
    }

    /* Fix for the Windows activation text */
    :host ::ng-deep .windows-activation {
      color: rgba(255, 255, 255, 0.7) !important;
    }

    :host ::ng-deep .windows-activation-text {
      color: rgba(255, 255, 255, 0.7) !important;
    }

    /* Technical expertise section can use theme variables */
    .technical-expertise {
      background: var(--background-color);
      padding: 4rem 2rem;
      color: var(--text-color);
    }

    .section-title {
      color: var(--text-color);
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    /* Rest of your existing styles for technical expertise section */
    .featured-skills, .projects {
      background: var(--bg-main);
    }

    .skill-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
    }

    .skill-card h3 {
      color: var(--text-primary);
    }

    .skill-card p {
      color: var(--text-muted);
    }

    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
    }

    .project-content h3 {
      color: var(--text-primary);
    }

    .project-content p {
      color: var(--text-muted);
    }

    .tech-stack span {
      background: var(--primary-light);
      color: var(--text-primary);
    }

    .section-title {
      color: var(--text-primary);
    }

    /* Variables */
    :host {
      --primary-darkest: #1a1025;
      --primary-dark: #2d1b4f;
      --primary: #3d2a75;
      --primary-light: #5b3e99;
      --accent: #8a6fff;
      --accent-light: #b19fff;
      --text-light: #ffffff;
      --text-dark: #2c3e50;
      --bg-light: #f4f5f9;
      --gradient-primary: linear-gradient(135deg, var(--primary-darkest) 0%, var(--primary) 100%);
      --gradient-accent: linear-gradient(45deg, var(--accent) 0%, var(--accent-light) 100%);
      --shadow-sm: 0 4px 6px rgba(26, 16, 37, 0.1);
      --shadow-md: 0 8px 15px rgba(26, 16, 37, 0.15);
      --shadow-lg: 0 15px 30px rgba(26, 16, 37, 0.2);
      --shadow-inner: inset 0 2px 4px rgba(26, 16, 37, 0.1);
    }

    /* Hero Section */
    .hero {
      padding: clamp(4rem, 10vw, 8rem) 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(138, 111, 255, 0.1) 0%, transparent 100%);
      pointer-events: none;
    }

    .hero-content {
      max-width: min(90%, 800px);
      margin: 0 auto;
      position: relative;
      z-index: 1;
      padding: 0 1rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin-bottom: clamp(1rem, 3vw, 1.5rem);
      color: var(--text-light);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      font-weight: 700;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2.5vw, 1.35rem);
      margin-bottom: clamp(2rem, 4vw, 2.5rem);
      opacity: 0.95;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      display: flex;
      gap: clamp(1rem, 2vw, 1.5rem);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
      font-size: clamp(0.9rem, 1.5vw, 1.1rem);
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      box-shadow: var(--shadow-md);
      min-width: 160px;
    }

    .btn-primary {
      background: var(--gradient-accent);
      color: var(--text-light);
      border: none;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      filter: brightness(110%);
    }

    .btn-outline {
      border: 2px solid var(--text-light);
      color: var(--text-light);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }

    .btn-outline:hover {
      background: var(--text-light);
      color: var(--primary);
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    /* Featured Skills Section */
    .featured-skills {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
      border-top: 1px solid rgba(138, 111, 255, 0.1);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
    }

    .section-header::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 2px;
      background: var(--gradient-accent);
      border-radius: 2px;
    }

    .section-title {
      text-align: center;
      margin-bottom: clamp(2rem, 5vw, 3rem);
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 700;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
      position: relative;
      display: inline-block;
    }

    .section-title::before {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: -1rem;
      right: -1rem;
      bottom: -0.5rem;
      background: linear-gradient(45deg, rgba(138, 111, 255, 0.1), transparent);
      border-radius: 8px;
      z-index: -1;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
      gap: clamp(1.5rem, 3vw, 2.5rem);
      margin-top: 3rem;
      padding: 0 clamp(1rem, 3vw, 2rem);
      width: min(95%, 1200px);
      margin-inline: auto;
      position: relative;
    }

    .skills-grid::before {
      content: '';
      position: absolute;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--accent-light), transparent);
    }

    .skill-card {
      padding: clamp(2rem, 4vw, 2.5rem);
      text-align: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 280px;
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-accent);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .skill-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    .skill-card:hover::before {
      transform: scaleX(1);
    }

    .skill-card i {
      font-size: clamp(2.5rem, 4vw, 3rem);
      color: var(--primary);
      margin-bottom: clamp(1rem, 2vw, 1.5rem);
      transition: all 0.4s ease;
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .skill-card:hover i {
      transform: scale(1.1);
      filter: brightness(110%);
    }

    .skill-card h3 {
      margin-bottom: clamp(0.8rem, 1.5vw, 1rem);
      color: var(--primary);
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      font-weight: 600;
    }

    .skill-card p {
      color: var(--text-dark);
      font-size: clamp(0.9rem, 1.5vw, 1rem);
      line-height: 1.6;
      max-width: 280px;
      margin: 0 auto;
    }

    /* Projects Section */
    .projects {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
      border-top: 1px solid rgba(138, 111, 255, 0.1);
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
      gap: clamp(2rem, 4vw, 3rem);
      margin-top: 3rem;
      padding: 0 clamp(1rem, 3vw, 2rem);
      position: relative;
    }

    .project-grid::before {
      content: '';
      position: absolute;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
    }

    .project-card {
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    .project-card img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .project-content {
      padding: 2rem;
    }

    .project-content h3 {
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
    }

    .project-content h3::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--gradient-accent);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-content h3::after {
      transform: scaleX(1);
    }

    .project-content p {
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-stack span {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    /* CTA Section */
    .cta {
      padding: clamp(4rem, 8vw, 6rem) 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      background: var(--gradient-primary);
      border-top: 1px solid rgba(138, 111, 255, 0.1);
    }

    .cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(138, 111, 255, 0.1) 0%, transparent 100%);
      pointer-events: none;
    }

    .cta h2 {
      margin-bottom: clamp(1rem, 2vw, 1.5rem);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      color: #FFFFFF !important;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      padding: 0 1rem;
    }

    .cta p {
      margin-bottom: clamp(2rem, 3vw, 2.5rem);
      opacity: 0.95;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      color: rgba(255, 255, 255, 0.9) !important;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 1rem;
    }

    /* Additional Styles */
    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 0 auto 2rem;
      overflow: hidden;
      border: 4px solid var(--accent-light);
      box-shadow: var(--shadow-lg);
      background-color: var(--primary-light);
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 768px) {
      .profile-image {
        width: 150px;
        height: 150px;
      }

      .project-card img {
        height: 200px;
      }
    }

    /* Social Links */
    .social-links {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .social-link {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-light);
      font-size: 1.5rem;
      transition: all 0.3s ease;
      border: 2px solid var(--accent-light);
    }

    .social-link:hover {
      background: var(--accent);
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    /* Section Styling */
    .title-underline {
      width: 80px;
      height: 4px;
      background: var(--gradient-accent);
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    .section-divider {
      display: none;
    }

    /* Section Positioning */
    .featured-skills,
    .projects,
    .cta {
      position: relative;
      margin-top: 0;
    }

    .featured-skills {
      padding-bottom: 4rem;
    }

    .projects {
      padding-bottom: 4rem;
    }

    .cta {
      background: var(--gradient-primary);
      border-top: 1px solid rgba(138, 111, 255, 0.1);
    }

    /* Enhance existing styles */
    .skill-card {
      border: 1px solid rgba(138, 111, 255, 0.1);
      background: linear-gradient(145deg, #ffffff, #f4f5f9);
    }

    .project-card {
      border: 1px solid rgba(138, 111, 255, 0.1);
    }

    .project-content {
      position: relative;
    }

    .project-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: var(--gradient-accent);
    }

    @media (max-width: 768px) {
      .social-link {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.2rem;
      }
    }
  `]
})
export class HomeComponent {
  handleImageError(event: any) {
    console.error('Image failed to load:', event);
    event.target.src = 'assets/profile/default-avatar.jpg';
  }
}
