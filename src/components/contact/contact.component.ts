import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class ContactComponent {
  formState = signal({ name: "", email: "", message: "" });

  onSubmit() {
    const { name, email, message } = this.formState();
    // Construct WhatsApp message
    const waNumber = "+6285156573478"; // TODO: Replace with your actual WhatsApp number (e.g., 62812...)
    const text = `Hi, I'm ${name} (${email}).\n\n${message}`;
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      text
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    console.log("Form submitted:", this.formState());
    alert("Thank you! Redirecting to WhatsApp...");
    this.formState.set({ name: "", email: "", message: "" });
  }
}
