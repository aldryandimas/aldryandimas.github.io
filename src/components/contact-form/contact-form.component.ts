import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-contact-form",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./contact-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  formState = signal({ name: "", email: "", message: "" });
  isSubmitting = signal(false);

  async onSubmit() {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    const { name, email, message } = this.formState();

    try {
      const response = await fetch(
        `https://formspree.io/f/${environment.formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New submission from ${name}`,
          }),
        }
      );

      if (response.ok) {
        alert("Thanks! Your message has been sent.");
        this.formState.set({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          alert(
            data["errors"].map((error: any) => error["message"]).join(", ")
          );
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
