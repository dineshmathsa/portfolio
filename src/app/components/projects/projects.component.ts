import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="assets/project1.jpg" alt="Project 1">
            </div>
            <div class="project-content">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution built with Angular and Node.js</p>
              <div class="project-tags">
                <span>Angular</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="assets/project2.jpg" alt="Project 2">
            </div>
            <div class="project-content">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with real-time updates</p>
              <div class="project-tags">
                <span>React</span>
                <span>Firebase</span>
                <span>Material UI</span>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="assets/project3.jpg" alt="Project 3">
            </div>
            <div class="project-content">
              <h3>Portfolio Website</h3>
              <p>A modern portfolio website built with Angular and SCSS</p>
              <div class="project-tags">
                <span>Angular</span>
                <span>SCSS</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 5rem 0;
      background-color: #ffffff;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .project-card {
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(45, 27, 105, 0.1);
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

    .project-content h3 {
      color: #2D1B69;
      margin-bottom: 0.5rem;
    }

    .project-content p {
      color: #4A4A4A;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .project-tags span {
      background-color: rgba(45, 27, 105, 0.1);
      color: #2D1B69;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {}
