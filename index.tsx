import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./src/app.component";
import { provideZonelessChangeDetection } from "@angular/core";
import { inject } from "@vercel/analytics";

inject();

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
