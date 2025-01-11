import { Clipboard } from "@angular/cdk/clipboard";
import { Component, inject, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { IAuthor } from "../../types/author";

@Component({
  selector: "app-author-card",
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: "./author-card.component.html",
  styleUrl: "./author-card.component.scss",
})
export class AuthorCardComponent {
  @Input() author!: IAuthor;

  constructor(private clipboard: Clipboard) {}
  private _snackBar = inject(MatSnackBar);

  copyToClipboard(email: string): void {
    if (this.clipboard.copy(email)) {
      this.openSnackBar();
    }
  }

  sendEmail(email: string): void {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }

  openIg(url: string) {
    console.log(url);
    window.open("https://instagram.com/" + url, "_blank");
  }

  openSnackBar() {
    this._snackBar.open("Link copied to clipboard", "Close", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 3000,
    });
  }
}
