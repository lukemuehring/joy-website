import { IArticle } from "./types/article";
import { IAuthor } from "./types/author";

export const ALICE_AUTHOR: IAuthor = {
  contact: [{ method: "email", url: "alicec65@nycstudents.nets" }],
  description:
    "My name is Alice and I am from New York. I am passionate about pursuing a career in the STEM field. Outside of my academic career, I also do a variety of things. I play golf, I dance a lot in my free time, as well as sing. I mainly do ballet and traditional chinese dance but I also do jazz and hip hop. I was also once a soprano opera singer.",
  name: "Alice Chen",
  photoUrl: "/assets/images/pp_alice.jpg",
};

export const CINDY_AUTHOR: IAuthor = {
  contact: [
    { method: "email", url: "cindycheng687@gmail.com " },
    { method: "insta", url: "cindy_curiousity" },
  ],
  description:
    "My name is Cindy and I am currently settling in Vancouver BC Canada. The passion I have in the medical field of wanting to become a neurosurgeon in the future motivated me to study deeper with others here. On the other hand, I play multiple sports like skiing, badminton & basketball. Hosting clubs in my school to promote health wellness is also something I do to affect others positively.",
  name: "Cindy Cheng",
  photoUrl: "/assets/images/pp_cindy.jpg",
};

export const FRANCISCO_AUTHOR: IAuthor = {
  contact: [
    { method: "email", url: "ET6025.king@gmail.com" },
    { method: "whatsapp", url: "16725529366" },
  ],
  description:
    "I am a very energetic person. I hope to help more people understand medical knowledge. I am passionate about biomedical sciences and deeply interested in the field of anesthesiology, In my spare time I also like to play volleyball.",
  name: "Francisco",
  photoUrl: "/assets/images/pp_francisco.jpg",
};

export const HANNAH_AUTHOR: IAuthor = {
  contact: [
    { method: "email", url: "yuehanpei0310@gmail.com" },
    { method: "insta", url: "h.ello007" },
  ],
  description:
    "My name is Hannah Pei and I’m a person that’s very proactive in improving myself. In school, I’ve funded my own club and as well as joined a variety of clubs upon my interest. Participating in organizations that align with my values is also important to me therefore I have joined game building, volunteering, educational content and health related organizations during my high school years to enhance my logical thinking and team working skills, as well with hope to spread influence to help society or people in need.",
  name: "Hannah Pei",
  photoUrl: "/assets/images/pp_hannah.jpg",
};

export const JOY_AUTHOR: IAuthor = {
  contact: [
    { method: "email", url: "joyli7022@gmail.com" },
    { method: "insta", url: "joyli209" },
  ],
  description:
    "My name is Joy and I am a sophomore studying in Atlanta Georgia. My passion lies in the biology and healthcare field, which motivated me to start this group and contribute more to society. I also like playing the viola and going to the gym a lot.",
  name: "Joy Li",
  photoUrl: "/assets/images/pp_joy.jpg",
};

export const SALLY_AUITHOR: IAuthor = {
  contact: [{ method: "email", url: "sallyl26@nycstudents.net" }],
  description:
    "My name is Sally and I am from New York. Currently, I am a PharmD major and plan to head towards the medical field. I play the piano and dance. My main style is hip-hop but recently I am very interested in breakdancing.",
  name: "Sally",
  photoUrl: "/assets/images/pp_sally.jpg",
};

export const TIFFANY_AUTHOR: IAuthor = {
  contact: [{ method: "email", url: "tiffanyc343@nycstudents.net" }],
  description:
    "My name is Tiffany and I am from New York City. My ambitions are driven by satisfactions that are achieved by helping others and I hope to obtain that in the medical science community. I am particularly interested in becoming a radiologist. In my spare time, I indulge in works of literature and play competitive badminton.",
  name: "Tiffany",
  photoUrl: "/assets/images/pp_tiffany.jpg",
};

export const OMNIBUS_AUTHOR: IAuthor = {
  contact: [],
  description: "",
  name: "Omnibus",
  photoUrl: "/assets/images/favicon.png",
};

export const AUTHORS: IAuthor[] = [
  ALICE_AUTHOR,
  CINDY_AUTHOR,
  FRANCISCO_AUTHOR,
  HANNAH_AUTHOR,
  JOY_AUTHOR,
  SALLY_AUITHOR,
  TIFFANY_AUTHOR,
];

export const ARTICLES: IArticle[] = [
  {
    authors: [OMNIBUS_AUTHOR],
    description:
      "Nuclear energy is an energy source that is friendlier to the environment. However, nuclear power plants have a lot of negative impacts associated with them.",
    photoUrl: "/assets/images/power plant.png",
    photoAltText: "A nuclear power plant",
    title:
      "The Impact of Nuclear Power Plant Accidents on the Health of Individuals Over Generations",
    url: "assets/Alice Chen The Impact of Nuclear.pdf",
  },
  {
    authors: [OMNIBUS_AUTHOR],
    description:
      "Human Immunodeficiency Virus (HIV) is an infection that weakens the immune system, and if untreated, can lead to Acquired Immunodeficiency Syndrome (AIDS). Despite advancements in treatment, HIV remains a global public health issue, with millions affected worldwide.",
    photoUrl: "/assets/images/HIV.jpg",
    photoAltText:
      "Scanning electron micrograph of HIV-1 budding (in green) from cultured lymphocyte.",
    title: "Human Immunodeficiency Virus (HIV)",
    url: "assets/HIV.pdf",
  },
  {
    authors: [OMNIBUS_AUTHOR],
    description:
      "Tuberculosis (TB), a leading global health issue, is a contagious disease caused by Mycobacterium tuberculosis, primarily affecting the lungs. Here we will introduce the story of TB and discuss some facts like treatment and stages about it.",
    photoUrl: "/assets/images/tb.jpg",
    photoAltText: "An xray image of the lungs showing red spots.",
    title: "Tuberculosis",
    url: "assets/Tuberculosis.pdf",
  },
];
