import { IAuthor } from "./author";

export interface IArticle {
  authors: IAuthor[];
  description: string;
  title: string;
  url: string;
  photoUrl: string;
  photoAltText: string;
}
