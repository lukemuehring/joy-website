import { Component, ViewEncapsulation } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  public goHome(): void {
    this.router.navigate(["main"]);
  }

  public goToAbout(): void {
    this.router.navigate(["about"]);
  }

  public goToContact(): void {
    this.router.navigate(["contact"]);
  }
}
