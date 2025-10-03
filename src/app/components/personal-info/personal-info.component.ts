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
  summary = `Senior software engineer with 10 years of experience building scalable, full-stack solutions. Delivered measurable enhancements, including a 60% reduction in page load times, through efficient integration of modern front-end frameworks, cloud platforms, and automation pipelines on Azure. Brings expertise in backend development, AI-assisted workflows, and cross-functional collaboration to drive innovative and reliable digital experiences.`;
  
  certifications = [
    { name: 'ITIL Foundation for IT Service Management Certification', issuer: 'Tandem Solution', year: '2014' },
    { name: 'Foundational C# with Microsoft', issuer: 'FreeCodeCamp', year: '2023' }
  ];
}