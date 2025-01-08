import { IAuthor } from "./author";

export interface IArticle {
  author: IAuthor;
  description: string;
  title: string;
  url: string;
  photoUrl: string;
  photoAltText: string;
}
