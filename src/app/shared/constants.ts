import { IArticle } from "./types/article";
import { IAuthor } from "./types/author";

export const ALICE_AUTHOR: IAuthor = {
  contact: [{ method: "email", url: "alicec65@nycstudents.nets" }],
  description:
    "My name is Alice and I am from New York. I am passionate about pursuing a career in the STEM field. Outside of my academic career, I also do a variety of things. I play golf, I dance a lot in my free time, as well as sing. I mainly do ballet and traditional chinese dance but I also do jazz and hip hop. I was also once a soprano opera singer.",
  name: "Alice Chen",
  photoUrl: "/assets/images/pp_alice.jpg",
};

export const AUTHORS: IAuthor[] = [ALICE_AUTHOR];

export const ARTICLES: IArticle[] = [
  {
    author: ALICE_AUTHOR,
    description:
      "Nuclear energy is an energy source that is friendlier to the environment. However, nuclear power plants have a lot of negative impacts associated with them.",
    photoUrl: "/assets/images/power plant.png",
    photoAltText: "A nuclear power plant",
    title:
      "The Impact of Nuclear Power Plant Accidents on the Health of Individuals Over Generations",
    url: "assets/Alice Chen The Impact of Nuclear.pdf",
  },
];
