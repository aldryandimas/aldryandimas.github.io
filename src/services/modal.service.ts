import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private isOpen = signal(false);

  readonly isModalOpen = this.isOpen.asReadonly();

  open() {
    this.isOpen.set(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  }

  close() {
    this.isOpen.set(false);
    // Restore scrolling when modal is closed
    document.body.style.overflow = "auto";
  }
}
