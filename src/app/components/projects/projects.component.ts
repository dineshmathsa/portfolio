import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <h1>Featured Projects</h1>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/hrms-dashboard.jpg" alt="HRMS Application">
          </div>
          <div class="project-content">
            <h2>HRMS Application</h2>
            <p>A full-stack e-commerce solution built with Angular and Node.js</p>
            <div class="tech-stack">
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/monitoring-dashboard.jpg" alt="Task Management App">
          </div>
          <div class="project-content">
            <h2>Task Management App</h2>
            <p>A collaborative task management application with real-time updates</p>
            <div class="tech-stack">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Material UI</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/portfolio.webp" alt="Portfolio Website">
          </div>
          <div class="project-content">
            <h2>Portfolio Website</h2>
            <p>A modern portfolio website built with Angular and SCSS</p>
            <div class="tech-stack">
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">SCSS</span>
              <span class="tech-tag">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: var(--background-color);
      color: var(--text-color);
      min-height: 100vh;
      padding: 2rem;
    }

    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      margin: 2rem 0 4rem 0;
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--primary-color);
      position: relative;
      width: 100%;
      padding-bottom: 1rem;
    }

    h1::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 3px;
      background: var(--primary-color);
      border-radius: 2px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding-top: 2rem;
    }

    .project-card {
      background: var(--card-background, #2d2d2d);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-content h2 {
      color: var(--text-color);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .project-content p {
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: var(--tag-background, rgba(92, 45, 145, 0.1));
      color: var(--primary-color, #5c2d91);
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      :host {
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {}
