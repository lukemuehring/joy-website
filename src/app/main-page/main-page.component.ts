import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ARTICLES } from "../shared/constants";
import { ArticleCardComponent } from "./article-card/article-card.component";
import { HeroBannerComponent } from "../shared/components/hero-banner/hero-banner.component";

@Component({
  selector: "app-main-page",
  standalone: true,
  imports: [ArticleCardComponent, HeroBannerComponent],
  templateUrl: "./main-page.component.html",
  styleUrl: "./main-page.component.scss",
})
export class MainPageComponent {
  public ARTICLES = ARTICLES;

  constructor(private router: Router) {}
}
