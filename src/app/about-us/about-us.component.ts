import { Component } from "@angular/core";
import { HeroBannerComponent } from "../shared/components/hero-banner/hero-banner.component";
import { AUTHORS } from "../shared/constants";
import { IAuthor } from "../shared/types/author";
import { AuthorCardComponent } from "../shared/components/author-card/author-card.component";

@Component({
  selector: "app-about-us",
  standalone: true,
  imports: [HeroBannerComponent, AuthorCardComponent],
  templateUrl: "./about-us.component.html",
  styleUrl: "./about-us.component.scss",
})
export class AboutUsComponent {
  public AUTHORS: IAuthor[] = AUTHORS;
}
