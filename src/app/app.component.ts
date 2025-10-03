import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  template: `
    <div class="resume-container">
      <div class="resume-content">
        <app-header></app-header>
        <div class="resume-body">
          <div class="left-column">
            <app-personal-info></app-personal-info>
            <app-skills></app-skills>
            <app-education></app-education>
          </div>
          <div class="right-column">
            <app-experience></app-experience>
          </div>
        </div>
      </div>
      <div class="print-controls no-print">
        <button (click)="printResume()" class="print-btn">
          <i class="fas fa-print"></i>
          Print Resume
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-template';

  printResume() {
    window.print();
  }
}