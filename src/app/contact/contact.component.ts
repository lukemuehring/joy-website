import { Component, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { merge } from "rxjs";
import { HeroBannerComponent } from "../shared/components/hero-banner/hero-banner.component";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    HeroBannerComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  readonly contactForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
  });

  onSubmit(form: NgForm): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    } else {
      alert("email sent");
      // TODO implement node js backend server to send email
    }
  }
}
