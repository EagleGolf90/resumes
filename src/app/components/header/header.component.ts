import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="resume-header">
      <div class="header-content">
        <div class="name-title">
          <h1>{{ personalData.name }}</h1>
          <h2>{{ personalData.title }}</h2>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>{{ personalData.email }}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>{{ personalData.phone }}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ personalData.location }}</span>
          </div>
          <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <span>{{ personalData.linkedin }}</span>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  personalData = {
    name: 'Brian Timberlake',
    title: 'Senior Software Engineer',
    email: 'eaglegolf90@gmail.com',
    phone: '(812) 952-9820',
    location: 'Lanesville, IN',
    linkedin: 'linkedin.com/in/brianstimberlake'
  };
}