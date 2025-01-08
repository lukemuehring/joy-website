import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { ArticleViewerComponent } from "./shared/components/article-viewer/article-viewer.component";

export const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "about", component: AboutUsComponent },
  { path: "view-article", component: ArticleViewerComponent },
  { path: "contact", component: ContactComponent },
  { path: "main", component: MainPageComponent },
];
