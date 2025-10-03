import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills">
      <h3 class="section-title">
        <i class="fas fa-code"></i>
        Technical Skills
      </h3>
      <div class="section-content">
        <div class="skill-category" *ngFor="let category of skillCategories">
          <h4>{{ category.name }}</h4>
          <div class="skill-tags">
            <span 
              *ngFor="let skill of category.skills" 
              class="skill-tag"
              [class.expert]="skill.level === 'expert'"
              [class.advanced]="skill.level === 'advanced'"
              [class.intermediate]="skill.level === 'intermediate'"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 'intermediate' },
        { name: 'React', level: 'intermediate' },
        { name: 'TypeScript', level: 'intermediate' },
        { name: 'JavaScript', level: 'expert' },
        { name: 'HTML/CSS', level: 'expert' },
        { name: 'SCSS/Sass', level: 'advanced' },
        { name: 'Bootstrap', level: 'advanced' },
        { name: 'Blazor', level: 'intermediate' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'C# and .NET', level: 'advanced' },
        { name: 'REST APIs', level: 'expert' },
        { name: 'PHP', level: 'expert' },
        { name: 'Stored Procedures', level: 'advanced' },
        { name: 'PL/SQL', level: 'advanced' },
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'SQL Server', level: 'advanced' },
        { name: 'MySQL', level: 'advanced' },
        { name: 'MongoDB', level: 'intermediate' }
      ]
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 'expert' },
        { name: 'GitHub', level: 'expert' },
        { name: 'AWS', level: 'intermediate' },
        { name: 'Azure', level: 'intermediate' }
      ]
    }
  ];
}