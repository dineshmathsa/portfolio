import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="contact-container">
      <h1>Let's Connect</h1>
      <div class="contact-content">
        <!-- Contact Form Section -->
        <div class="contact-form-section">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
            <div class="form-group">
              <input 
                type="text" 
                [(ngModel)]="contactData.name" 
                name="name" 
                placeholder="Your Name"
                required
                #name="ngModel"
              >
              <div *ngIf="name.invalid && (name.dirty || name.touched)" class="error-message">
                Please enter your name
              </div>
            </div>

            <div class="form-group">
              <input 
                type="email" 
                [(ngModel)]="contactData.email" 
                name="email" 
                placeholder="Your Email"
                required
                email
                #email="ngModel"
              >
              <div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-message">
                Please enter a valid email
              </div>
            </div>

            <div class="form-group">
              <input 
                type="text" 
                [(ngModel)]="contactData.subject" 
                name="subject" 
                placeholder="Subject"
                required
                #subject="ngModel"
              >
              <div *ngIf="subject.invalid && (subject.dirty || subject.touched)" class="error-message">
                Please enter a subject
              </div>
            </div>

            <div class="form-group">
              <textarea 
                [(ngModel)]="contactData.message" 
                name="message" 
                placeholder="Your Message"
                required
                rows="5"
                #message="ngModel"
              ></textarea>
              <div *ngIf="message.invalid && (message.dirty || message.touched)" class="error-message">
                Please enter your message
              </div>
            </div>

            <button type="submit" [disabled]="!contactForm.form.valid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>

            <div *ngIf="submitMessage" 
                 [class]="submitStatus ? 'success-message' : 'error-message submit-error'">
              {{ submitMessage }}
            </div>
          </form>
        </div>

        <!-- Contact Details Section -->
        <div class="contact-details-section">
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to me through any of these channels:</p>
            
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div class="contact-text">
                <h3>Email</h3>
                <a href="mailto:dineshmathsa&#64;gmail.com">dineshmathsa&#64;gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div class="contact-text">
                <h3>Phone</h3>
                <a href="tel:+919490417476">+91 9490417476</a>
              </div>
            </div>

            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div class="contact-text">
                <h3>Location</h3>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
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

    .contact-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: stretch;
    }

    .contact-form-section,
    .contact-details-section {
      padding: 2rem;
      background: var(--card-background);
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    }

    .contact-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--background-color);
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .contact-item:last-child {
      margin-bottom: 0;
    }

    .form-group {
      margin-bottom: 1.5rem;
      position: relative;
    }

    input, textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--background-color);
      color: var(--text-color);
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .error-message {
      color: #dc3545;
      font-size: 0.85rem;
      margin-top: 0.25rem;
      text-align: left;
      position: absolute;
      left: 0;
    }

    .success-message,
    .error-message.submit-error {
      text-align: center;
      margin-top: 1rem;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.9rem;
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      box-sizing: border-box;
      margin-bottom: 1rem;
    }

    .success-message {
      color: #28a745;
      background: rgba(40, 167, 69, 0.1);
      border: 1px solid rgba(40, 167, 69, 0.2);
    }

    .error-message.submit-error {
      color: #dc3545;
      background: rgba(220, 53, 69, 0.1);
      border: 1px solid rgba(220, 53, 69, 0.2);
    }

    button {
      width: 100%;
      padding: 1rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-bottom: 1rem;
    }

    button:hover:not(:disabled) {
      background: var(--accent-color);
    }

    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .contact-info h2 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    .contact-info p {
      margin-bottom: 2rem;
      color: var(--text-color);
      opacity: 0.9;
    }

    .contact-item i {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin-top: 0.25rem;
    }

    .contact-text h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      color: var(--text-color);
    }

    .contact-text a, .contact-text span {
      color: var(--text-color);
      opacity: 0.8;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-text a:hover {
      color: var(--primary-color);
      opacity: 1;
    }

    @media (max-width: 768px) {
      .contact-container {
        padding-top: 5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }

      .contact-container {
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .contact-form-section,
      .contact-details-section {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitStatus = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.post(environment.apiUrl, this.contactData)
      .subscribe({
        next: (response: any) => {
          this.submitMessage = 'Message sent successfully!';
          this.submitStatus = true;
          this.resetForm();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.submitMessage = 'Failed to send message. Please try again.';
          this.submitStatus = false;
          this.isSubmitting = false;
        }
      });
  }

  private resetForm() {
    if (this.contactForm) {
      this.contactForm.resetForm();
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.controls[key];
        control.markAsPristine();
        control.markAsUntouched();
      });
    }

    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
