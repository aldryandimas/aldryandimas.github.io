
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  linkedinUrl = "https://linkedin.com/in/aldryandeschara";
  githubUrl = "https://github.com/aldryandimas";
}
