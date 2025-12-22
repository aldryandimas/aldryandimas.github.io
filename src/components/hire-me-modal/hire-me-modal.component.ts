import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalService } from "../../services/modal.service";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: "app-hire-me-modal",
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: "./hire-me-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HireMeModalComponent {
  private modalService = inject(ModalService);
  isOpen = this.modalService.isModalOpen;

  close() {
    this.modalService.close();
  }
}
