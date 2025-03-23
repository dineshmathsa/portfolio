import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>email&#64;example.com</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>+1 234 567 890</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Your Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 5rem 0;
      background-color: #ffffff;
    }

    .contact-content {
      max-width: 600px;
      margin: 3rem auto 0;
    }

    .contact-info h3 {
      color: #2D1B69;
      margin-bottom: 1rem;
    }

    .contact-info p {
      margin-bottom: 2rem;
      color: #4A4A4A;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .contact-item i {
      color: #2D1B69;
      font-size: 1.2rem;
    }
  `]
})
export class ContactComponent {}
