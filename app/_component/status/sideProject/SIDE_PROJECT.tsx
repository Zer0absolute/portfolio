import {GraduationCap, Notebook, ScrollText, UtensilsCrossed} from "lucide-react";
import {SideProjectType} from "@/app/_component/status/sideProject/SideProject";

export const SIDE_PROJECTS: SideProjectType[] = [
  {
    Logo: UtensilsCrossed,
    title: "Crazee-Burger",
    description: "Project: Burger King-like platform Tech stack: React, Firebase, Styled-components, React Router",
    url: "https://crazeeburger-zer0absolute-zer0s-projects-da2820b3.vercel.app/?_vercel_share=WjpJDbyeeNwZEyjK00J8Umm7pM3j4jQJ",
  },
  {
    Logo: GraduationCap,
    title: "In-comming",
    description: "Project: Setting up a platform to learn the basics of different technologies.",
    url: "/https://monpoulpe.fr",
  },
  {
    Logo: ScrollText,
    title: "In-comming",
    description: "Cooking website where you can find recipes (macros) for all types of diets.",
    url: "/",
  },
  {
    Logo: Notebook,
    title: "In-comming",
    description: "Creation of a web application for voice note-taking, with AI integration to enhance the style of the notes.",
    url: "/",
  },
]