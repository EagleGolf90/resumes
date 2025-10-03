import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience">
      <h3 class="section-title">
        <i class="fas fa-briefcase"></i>
        Professional Experience
      </h3>
      <div class="section-content">
        <div class="experience-item" *ngFor="let job of experienceList">
          <div class="job-header">
            <div class="job-title-company">
              <h4>{{ job.title }}</h4>
              <div class="company">{{ job.company }}</div>
              <div class="location">{{ job.location }}</div>
            </div>
            <div class="job-period">{{ job.period }}</div>
          </div>
          <ul class="achievements">
            <li *ngFor="let achievement of job.achievements">
              {{ achievement }}
            </li>
          </ul>
          <div class="technologies" *ngIf="job.technologies">
            <strong>Technologies:</strong>
            <span class="tech-list">{{ job.technologies.join(', ') }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList = [
    {
      title: 'Full Stack Developer',
      company: 'KDGA',
      location: 'Louisville, KY',
      period: '2000 - Present',
      achievements: [
        'Developed secure, scalable web applications using C# and .NET frameworks, emphasizing robust coding practices to deliver reliable, business-critical functions while minimizing security vulnerabilities.',
        'Designed and maintained a mobile-responsive UI/UX using WordPress and custom PHP solutions, ensuring performance, accessibility, and cross-device compatibility.',
        'Integrated Angular front-end components with ASP.NET Core Web API to enhance responsiveness and adhere to modern API integration standards, supporting modular and reusable design principles.',
        'Implemented accessibility-first design to ensure mobile responsiveness and cross-device compatibility, thereby boosting user engagement and satisfaction.',
        'Directed QA and troubleshooting initiatives across the software development lifecycle in collaboration with QA teams to resolve performance and security challenges.',
        'Evaluated emerging technologies to enhance platform reliability, streamline system performance, and reduce downtime, supporting continuous improvement in engineering practices.',
        'Provided technical expertise for backend optimizations and platform enhancements that improved system maintainability and supported scalable business growth.',
        'Designed and maintained mobile-responsive UI/UX solutions using WordPress and custom PHP, enhancing overall performance and accessibility across devices.'
      ],
      technologies: ['C#', 'Angular', 'API', 'PHP', 'SQL Server', 'MySQL', 'WordPress', 'HTML/CSS', 'JavaScript', 'jQuery', 'Github', 'Bootstrap']
    },
    {
      title: 'Software Engineer',
      company: 'Sorenson Communications',
      location: 'Salt Lake City, UT',
      period: '2022 - 2025',
      achievements: [
        'Developed cloud-ready .NET Core APIs within an Agile Scrum framework using C#, SQL Server, and Azure App Services, streamlining the software development lifecycle and supporting scalable backend architecture.',
        'Utilized Splunk for real-time observability and performance tuning in distributed environments, ensuring system reliability and facilitating effective incident response.',
        'Constructed scalable RESTful APIs in C# on Azure, leveraging SQL Server with Entity Framework and Dapper to optimize backend performance and data integration.',
        'Engineered robust API integrations with SQL Server and Azure Functions to streamline backend logic and support high-performance application requirements, adhering to security best practices.',
        'Executed comprehensive debugging efforts throughout the development lifecycle using Azure DevOps to optimize performance and maintain system stability.',
        'Implemented unit tests to ensure system integrity and preserve functionality, aligning with Azure Pipelines for continuous integration and QA standards.',
        'Fostered cross-functional collaboration to ensure API implementations and system designs met enterprise standards and business requirements, partnering with internal teams effectively across Azure-hosted environments.',
        'Authored advanced SQL queries and optimized stored procedures to drive efficient, data-driven performance with a focus on improving application responsiveness in Azure SQL Database.',
        'Refactored legacy code using SOLID principles, reducing bug rates by 30% and enhancing overall application performance while supporting technical excellence in cloud-native deployments.',
        'Managed GitHub repositories and integrated CI workflows with Azure DevOps, streamlining development and deployment processes in line with modern DevOps practices.',
        'Collaborated with QA teams to troubleshoot issues and refine testing strategies, ensuring successful production releases and robust support for enterprise operations.'
      ],
      technologies: ['C#', 'API', 'Azure', 'AWS', 'GitHub', 'JIRA', 'SQL Server', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Enterprise Programmer Analyst IV',
      company: 'University of Louisville',
      location: 'Louisville, KY',
      period: '2001 - 2022',
      achievements: [
        'Identified and resolved a critical payroll check processing bug in a matter of hours, ensuring timely check transmission to the bank.',
        'Gathered user requirements to design and develop custom PeopleSoft interfaces and enhancements, leading to improved user satisfaction and system efficiency.',
        'Provided end-to-end application support and troubleshooting to reinforce data integrity and sustain resilient database architecture.',
        'Designed BI Publisher templates for PO dispatch and supplier acknowledgments to improve document clarity.',
        'Elevated quality assurance by developing checklists and conducting cross-level training.',
        'Developed a C# program to merge applications and resume attachments, significantly saving time and labor.',
        'Updated SQR programs to align with a new environment, improving system compatibility and performance.',
        'Coordinated PeopleSoft system updates via Change Assistant to ensure compliance and minimize downtime.',
        'Assessed Production Support team needs to design and maintain an Access database for tracking customizations and signoffs.',
        'Engineered ETL workflows for PeopleSoft HR and Financials, enabling precise reporting and compliance.',
        'Led the Split HCM/CS Upgrade 9.0 for Talent Acquisitions and Admissions as Team Lead.',
        'Served as the sole IT resource and knowledge repository for all Blackboard PeopleSoft development.',
        'Automated regression testing for PeopleSoft HCM 9.2 using Selenium WebDriver to improve test coverage and reduce manual QA effort.'
      ],
      technologies: ['PeopleSoft', 'SQR', 'PeopleCode', 'PeopleSoft HCM', 'PeopleSoft FI', 'Blackboard', 'Java', 'Oracle', 'HTML/CSS', 'C#']
    },
    {
      title: 'EDI Coordinator',
      company: 'Robinson Nugent, Inc.',
      location: 'New Albany, IN',
      period: '1999 - 2001',
      achievements: [
        'Engineered and supported in-house EDI systems, including custom MS Access reporting applications, which improved data accuracy and reporting efficiency.',
        'Developed and maintained multiple SQR programs for financial and operational reporting, enhancing the speed and reliability of data processing.',
        'Created Visual Basic analysis tools to assist cross-functional decision-making, leading to more informed and timely business decisions.',
        'Implemented efficient coding techniques and integrated new technologies, resulting in improved software performance and maintain- ability.'
      ],
      technologies: ['PeopleSoft', 'SQR', 'Microsoft Access', 'Visual Basic', 'HTML/CSS', 'JavaScript' ]
    },
    {
      title: 'EDI Coordinator',
      company: 'Beach Mold & Tool',
      location: 'New Albany, IN',
      period: '1994 - 1999',
      achievements: [
        'Developed software solutions to enhance production accuracy, streamline inventory control, and improve Kronos reporting, resulting in more efficient operations.',
        'Designed and maintained EDI transactions on AS/400 to facilitate supplier communications, improving data exchange efficiency.',
        'Created merge forms using OptioDCS for spool and data file automation, leading to faster document processing and reduced manual errors.',
        'Built MS Access tools for Quality Control graphs, CIM tracking, and job packet generation, enhancing data visualization and operational tracking.',
        'Designed and printed bar code labels, efficiently expanding capacity from 30 to 43 characters.',
        'Performed critical AS/400 system operations, including backups, upgrades, and application support, which ensured system reliability and minimized downtime.'
      ],
      technologies: ['EDI', 'Microsoft Access', 'Visual Basic', 'AS/400', 'OptioDCS', 'Kronos']
    }
  ];
}