import { IContactMethod } from "./contact-method";

export interface IAuthor {
  contact: IContactMethod[];
  description: string;
  name: string;
  photoUrl: string;
}
