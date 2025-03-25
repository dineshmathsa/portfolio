import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="blog-post-container" *ngIf="post">
      <div class="blog-post-header">
        <h1>{{ post.title }}</h1>
        <div class="blog-post-meta">
          <span class="date">{{ post.date }}</span>
          <span class="category">{{ post.category }}</span>
        </div>
      </div>
      
      <div class="blog-post-content">
        <img [src]="post.image" [alt]="post.title" class="featured-image">
        <div class="content" [innerHTML]="post.content"></div>
      </div>
      
      <div class="blog-post-footer">
        <a routerLink="/blog" class="back-to-blog">← Back to Blog</a>
      </div>
    </div>
  `,
  styles: [`
    .blog-post-container {
      padding: 6rem 2rem 2rem;
      min-height: 100vh;
      background: var(--background-color);
      color: var(--text-color);
      max-width: 800px;
      margin: 0 auto;
    }

    .blog-post-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .blog-post-meta {
      display: flex;
      justify-content: center;
      gap: 1rem;
      color: var(--text-color-secondary);
      font-size: 0.9rem;
    }

    .featured-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 2rem;
    }

    .content {
      line-height: 1.8;
    }

    :host ::ng-deep .content h2 {
      color: var(--primary-color);
      margin: 2rem 0 1rem;
      font-size: 1.8rem;
    }

    :host ::ng-deep .content h3 {
      color: var(--primary-color);
      margin: 1.5rem 0 1rem;
      font-size: 1.4rem;
    }

    :host ::ng-deep .content p {
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }

    :host ::ng-deep .code-block {
      background: var(--card-background);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
      font-family: monospace;
      color: var(--text-color);
    }

    :host ::ng-deep .content ul {
      margin: 1rem 0;
      padding-left: 2rem;
    }

    :host ::ng-deep .content li {
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }

    .blog-post-footer {
      margin-top: 3rem;
      text-align: center;
    }

    .back-to-blog {
      display: inline-block;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .back-to-blog:hover {
      color: var(--accent-color);
    }

    @media (max-width: 768px) {
      .blog-post-container {
        padding: 5rem 1rem 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .featured-image {
        height: 300px;
      }
    }
  `]
})
export class BlogPostComponent {
  post: BlogPost | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.post = this.blogService.getBlogPost(postId);
    }
  }
} 