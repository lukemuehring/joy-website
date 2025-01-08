import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hero-banner",
  standalone: true,
  imports: [],
  templateUrl: "./hero-banner.component.html",
  styleUrl: "./hero-banner.component.scss",
})
export class HeroBannerComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
}
