import { Component, ChangeDetectionStrategy } from "@angular/core";
import {
  HlmDialogHeader,
  HlmDialogTitle,
  HlmDialogDescription,
} from "@spartan-ng/helm/dialog";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: "app-hire-me-modal",
  standalone: true,
  imports: [
    HlmDialogHeader,
    HlmDialogTitle,
    HlmDialogDescription,
    ContactFormComponent,
  ],
  templateUrl: "./hire-me-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HireMeModalComponent {}
