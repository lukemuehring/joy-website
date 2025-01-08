import { Component, Input, OnInit } from "@angular/core";
import { IArticle } from "../../types/article";
import { JsonPipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-article-viewer",
  standalone: true,
  imports: [JsonPipe],
  templateUrl: "./article-viewer.component.html",
  styleUrl: "./article-viewer.component.scss",
})
export class ArticleViewerComponent implements OnInit {
  public articleUrl: SafeResourceUrl | null = null;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      let url = params.get("articleUrl");
      if (url) {
        this.articleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    });
  }
}
