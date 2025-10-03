import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="education">
      <h3 class="section-title">
        <i class="fas fa-graduation-cap"></i>
        Education
      </h3>
      <div class="section-content">
        <div class="education-item" *ngFor="let education of educationList">
          <div class="education-header">
            <h4>{{ education.degree }}</h4>
            <span class="year">{{ education.year }}</span>
          </div>
          <div class="school">{{ education.school }}</div>
          <div class="location">{{ education.location }}</div>
          <div class="achievements" *ngIf="education.achievements">
            <ul>
              <li *ngFor="let achievement of education.achievements">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Arts in Computer Science',
      school: 'Gallaudet University',
      location: 'Washington, D.C.',
      year: '1991',
      achievements: [
        'Greek Council President',
        'Alpha Sigma Phi Fraternity',
        'Three-year Baseball Letterman',
        'Two-year Basketball Letterman',
        'Two-year Tennis Letterman',
        'Tennis Assistant Coach one year',
        'Won two Most Improved Player Awards in Tennis',
        'Interviewed by Indianapolis Star newspaper'
      ]
    }
  ];
}