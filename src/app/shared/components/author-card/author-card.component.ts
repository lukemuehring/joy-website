import { Component, Input } from "@angular/core";
import { IAuthor } from "../../types/author";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-author-card",
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: "./author-card.component.html",
  styleUrl: "./author-card.component.scss",
})
export class AuthorCardComponent {
  @Input() author!: IAuthor;

  sendEmail(email: string): void {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }

  openIg(url: string) {
    console.log(url);
    window.open("https://instagram.com/" + url, "_blank");
  }
}
