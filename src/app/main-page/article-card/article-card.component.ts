import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { IArticle } from "../../shared/types/article";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-article-card",
  standalone: true,
  imports: [MatCardModule, RouterLink, RouterLinkActive],
  templateUrl: "./article-card.component.html",
  styleUrl: "./article-card.component.scss",
})
export class ArticleCardComponent {
  @Input() public article!: IArticle;

  public openArticle(articleUrl: string): void {
    window.open(articleUrl, "_blank");
  }
}
