import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="blog-container">
      <h1>Blog</h1>
      <div class="blog-grid">
        <article class="blog-card">
          <div class="blog-image">
            <img src="assets/blog/blog1.png" alt="HRMS Workflows">
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">March 20, 2024</span>
              <span class="category">Enterprise Software</span>
            </div>
            <h2>Custom Workflow Implementation in HRMS Systems</h2>
            <p>Discover how our custom workflow module revolutionizes HR processes by enabling organizations to create and manage their unique approval flows...</p>
            <a [routerLink]="['/blog', 'hrms-workflows']" class="read-more">Read More</a>
          </div>
        </article>

        <article class="blog-card">
          <div class="blog-image">
            <img src="assets/blog/blog2.png" alt="SendGrid CC Limitations">
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">March 15, 2024</span>
              <span class="category">Backend Development</span>
            </div>
            <h2>Understanding SendGrid CC Email Limitations</h2>
            <p>Discover the important limitations of SendGrid's CC functionality and learn how to handle them properly in your applications...</p>
            <a [routerLink]="['/blog', 'tech-trends']" class="read-more">Read More</a>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .blog-container {
      padding: 6rem 2rem 2rem 2rem;
      min-height: 100vh;
      background: var(--background-color);
      color: var(--text-color);
    }

    h1 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      color: var(--primary-color);
      position: relative;
      padding-top: 1rem;
    }

    h1::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: var(--primary-color);
      border-radius: 2px;
    }

    .blog-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 1rem;
    }

    .blog-card {
      background: var(--card-background);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .blog-card:hover {
      transform: translateY(-5px);
    }

    .blog-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .blog-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .blog-card:hover .blog-image img {
      transform: scale(1.05);
    }

    .blog-content {
      padding: 1.5rem;
    }

    .blog-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--text-color-secondary);
    }

    .blog-content h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-color);
      line-height: 1.3;
    }

    .blog-content p {
      color: var(--text-color-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .read-more {
      display: inline-block;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .read-more:hover {
      color: var(--accent-color);
    }

    @media (max-width: 768px) {
      .blog-container {
        padding: 5rem 1rem 1rem;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BlogComponent {}
