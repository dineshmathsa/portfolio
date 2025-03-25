import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ThemeToggleComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-theme-toggle></app-theme-toggle>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 60px);
      background: var(--bg-light);
      transition: background-color 0.3s ease;
    }
  `]
})
export class AppComponent {
  title = 'portfolio';
}
