import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="personal-info">
      <h3 class="section-title">
        <i class="fas fa-user"></i>
        About Me
      </h3>
      <div class="section-content">
        <p class="summary">{{ summary }}</p>
        
        <div class="certifications">
          <h4>Certifications</h4>
          <ul class="cert-list">
            <li *ngFor="let cert of certifications">
              <strong>{{ cert.name }}</strong>
              <span class="cert-issuer">{{ cert.issuer }}</span>
              <span class="cert-year">{{ cert.year }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  summary = `Senior Full Stack Software Engineer with 10 years of experience delivering scalable web applications and innovative digital imaging solutions. Achieved measurable performance gains, including a 60% reduction in page load times, by integrating modern front-end frameworks with robust back-end systems. Expert in full lifecycle development with cloud platforms and agile methodologies, ensuring clean, responsive UI/UX while mentoring teams on best practices.`;
  
  certifications = [
    { name: 'ITIL Foundation for IT Service Management Certification', issuer: 'Tandem Solution', year: '2014' },
    { name: 'Foundational C# with Microsoft', issuer: 'FreeCodeCamp', year: '2023' }
  ];
}