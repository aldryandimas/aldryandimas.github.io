import {
  Component,
  ChangeDetectionStrategy,
  signal,
  effect,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "(window:scroll)": "onWindowScroll()",
  },
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#experience", label: "Work Experience" },
    { path: "#contact", label: "Contact" },
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
}
