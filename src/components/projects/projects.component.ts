import { Component, ChangeDetectionStrategy, signal } from "@angular/core";

export interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  imageUrl?: string;
  roles: ExperienceRole[];
}

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  experiences = signal<Experience[]>([
    {
      company: "CheckProof",
      imageUrl: "src/assets/checkproof.png",
      roles: [
        {
          title: "QA Engineer | via Granitor",
          period: "April 2025 - Present",
          location: "Täby, Stockholm County, Sweden",
          description: [
            "Working remotely with CheckProof AB on product QA and test automation.",
            "Accomplishment: Initiated Cypress automation for app.",
            "Continuation in building automation ecosystem for CheckProof.",
          ],
          tags: ["Remote work", "Consultant", "QA", "Cypress", "Automation"],
        },
      ],
    },
    {
      company: "PT Granitor Systems APAC",
      imageUrl: "src/assets/GRANITOR_LOGO_PRIMARY_RGB_PNG.png",
      roles: [
        {
          title: "QA Engineer",
          period: "April 2025 - Present",
          location: "Bandung, West Java, Indonesia",
          description: ["Assigned to CheckProof AB, Sweden."],
          tags: ["Remote work", "Consultant", "QA"],
        },
      ],
    },
    {
      company: "99 Group (99.co | Rumah123 | SRX)",
      imageUrl: "src/assets/pp.png",
      roles: [
        {
          title: "SDET / QA Engineer",
          period: "February 2024 - March 2025",
          location: "Singapore, Singapore",
          description: [
            "R2 level engineer working for 99 Group Singapore subsidiary.",
            "Focus on cypress.io: Lead initiatives, Maintain the ecosystem, Automate new features, Mentorship to newjoiners (QA + Web Frontend).",
            "Manual Software QA engineer: Building a better STLC for the team, Build, brainstorm, and execute test plans.",
          ],
          tags: ["Remote work", "SDET", "Cypress", "Mentorship", "STLC"],
        },
        {
          title: "QA Engineer",
          period: "November 2020 - February 2024",
          location: "Singapore, Singapore",
          description: [
            "R1 level engineer working for 99 Group Singapore subsidiary.",
            "Achievements: Created cypress.io framework into Web automation testing pipeline.",
            "Doubles up cypress.io test cases every quarters.",
            "Responsible: Middle QA Engineer for 99.co Singapore (99 Group HQ).",
            "Working as hybrid QA Engineer (manual & automation).",
            "Lead Cypress.io team to build and maintain automation environment: Regression, Functional, UI, API, SEO testing automation.",
          ],
          tags: ["Remote work", "QA", "Cypress", "Automation"],
        },
      ],
    },
    {
      company: "Solve Education!",
      roles: [
        {
          title: "Quality Assurance",
          period: "October 2018 - November 2020",
          location: "Bandung Area, West Java, Indonesia",
          description: [
            "Responsibility: Tester for Dawn Of Civilization game, Data analytics for Dawn of Civilization, Research in users behavior, Users experiences.",
            "Testing all Solve Education! products: Solve Education! Portal, Content+, Learnalytics.",
            "Coding analytic requirements on GameMaker Studio for DoC game.",
          ],
          tags: ["Game Testing", "Data Analytics", "GameMaker Studio"],
        },
      ],
    },
  ]);
}
