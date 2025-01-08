import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, ToolbarComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "joy-website";
}
