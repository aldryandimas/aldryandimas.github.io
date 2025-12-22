import { Component, ChangeDetectionStrategy, signal } from "@angular/core";

export interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  summary?: string;
  description: string[];
  achievements?: string[];
  tags: string[];
  products?: Product[];
}

export interface Product {
  name: string;
  description?: string;
  imageUrl?: string;
  link?: string;
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
      company: "CheckProof AB (via Granitor)",
      imageUrl: "src/assets/checkproof.png",
      roles: [
        {
          title: "QA Engineer",
          period: "April 2025 - Present",
          location: "Hybrid, Bandung, Indonesia",
          summary:
            "QA Engineer Consultant at CheckProof AB (Sweden), engaged through PT Granitor Systems APAC. Closely integrated with the product team on QA and test automation initiatives.",
          description: [
            "Collaborating closely with CheckProof's engineering team on quality assurance efforts.",
            "Building and maintaining Cypress automation ecosystem for the product suite.",
          ],
          achievements: ["Key-initiator of Cypress automation for app."],
          tags: ["Remote work", "Consultant", "QA", "Cypress", "Automation"],
          products: [
            {
              name: "Manual and Automation Tests",
              description:
                "End-to-end automation suite using Cypress for the mobile & web app.",
              imageUrl:
                "src/assets/admin-app-checkproof-functions-overview-2 (1).png",
            },
          ],
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
          location: "Remote-first, Bandung, Indonesia",
          summary:
            "R2 level engineer working for 99 Group Singapore Headquarters.",
          description: [
            "Focus on cypress.io: Lead initiatives, Maintain the ecosystem, Automate new features, Mentorship to newjoiners (QA + Web Frontend).",
            "Manual Software QA engineer: Building a better STLC for the team, Build, brainstorm, and execute test plans.",
          ],
          tags: ["Remote work", "SDET", "Cypress", "Mentorship", "STLC"],
          products: [
            {
              name: "Web Automation with Cypress",
              description:
                "Scalable Cypress framework for Singapore's leading property portal.",
              imageUrl: "src/assets/99web.png",
            },
            {
              name: "Manual Tests on All Platforms",
              description:
                "Manual testing on all platforms: Web, Android, and iOS.",
              imageUrl: "src/assets/99app.png",
            },
          ],
        },
        {
          title: "QA Engineer",
          period: "November 2020 - February 2024",
          location: "Remote-first, Bandung, Indonesia",
          summary:
            "R1 level engineer working for 99 Group Singapore Headquarters.",
          achievements: [
            "Created cypress.io framework into Web automation testing pipeline.",
            "Doubled up cypress.io test cases every quarters.",
          ],
          description: [
            "Middle QA Engineer for 99.co Singapore (99 Group HQ).",
            "Working as hybrid QA Engineer (manual & automation).",
            "Lead Cypress.io team to build and maintain automation environment: Regression, Functional, UI, API, SEO testing automation.",
          ],
          tags: ["Remote work", "QA", "Cypress", "Automation"],
        },
      ],
    },
    {
      company: "Solve Education!",
      imageUrl: "src/assets/SE_New_Updated_Logo-Color.png",
      roles: [
        {
          title: "Quality Assurance",
          period: "October 2018 - November 2020",
          location: "Bandung, West Java, Indonesia",
          description: [
            "Tester for Dawn Of Civilization game, Data analytics for Dawn of Civilization, Research in users behavior, Users experiences.",
            "Testing all Solve Education! products: Solve Education! Portal, Content+, Learnalytics.",
            "Coding analytic requirements on GameMaker Studio for DoC game.",
          ],
          tags: ["Game Testing", "Data Analytics", "GameMaker Studio"],
          products: [
            {
              name: "Game Testing",
              description: "Game tester for Dawn of Civilization game.",
              imageUrl: "src/assets/lApRPa.png",
            },
            {
              name: "Data Analytics",
              description:
                "Add event parameters in GMS2 for tracking user behavior.",
              imageUrl: "src/assets/gms.png",
            },
          ],
        },
      ],
    },
  ]);
}
