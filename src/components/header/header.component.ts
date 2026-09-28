import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from "@angular/core";
import { HlmButton } from "@spartan-ng/helm/button";
import { HlmDialogService } from "@spartan-ng/helm/dialog";
import { HireMeModalComponent } from "../hire-me-modal/hire-me-modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  imports: [HlmButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "(window:scroll)": "onWindowScroll()",
  },
})
export class HeaderComponent {
  private dialogService = inject(HlmDialogService);
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#experience", label: "Work Experience" },
  ];

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  onHireMeClick(event: Event) {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (!isInView) {
        event.preventDefault();
        this.dialogService.open(HireMeModalComponent, {
          contentClass: "sm:max-w-lg",
        });
      }
      this.closeMenu();
    }
  }
}
