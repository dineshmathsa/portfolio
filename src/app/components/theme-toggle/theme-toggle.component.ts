import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button 
      class="theme-toggle" 
      (click)="toggleTheme()" 
      [attr.aria-label]="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <i class="fas" [class.fa-moon]="!isDark" [class.fa-sun]="isDark"></i>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      z-index: 1000;
    }

    .theme-toggle:hover {
      transform: translateY(-2px);
      background: var(--primary-light);
    }

    @media (max-width: 768px) {
      .theme-toggle {
        bottom: 1rem;
        right: 1rem;
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
} 