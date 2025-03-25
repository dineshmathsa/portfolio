import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/">Portfolio</a>
        </div>
        
        <div class="nav-items">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
          <div class="theme-toggle-wrapper">
            <app-theme-toggle></app-theme-toggle>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: var(--bg-header);
      padding: 1rem 2rem;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo a {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-items a {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-items a:hover {
      color: var(--primary);
    }

    .nav-items a.active {
      color: var(--primary);
    }

    .theme-toggle-wrapper {
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      .nav-items {
        gap: 1rem;
      }
      
      .theme-toggle-wrapper {
        margin-left: 0.5rem;
      }
    }
  `]
})
export class HeaderComponent {} 