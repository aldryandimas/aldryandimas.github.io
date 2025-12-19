import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class HeroComponent {
  githubUrl = "https://github.com/aldryandimas";
  linkedinUrl = "https://linkedin.com/in/aldryandeschara";
}
