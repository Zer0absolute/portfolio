import {GraduationCap, Notebook, ScrollText, UtensilsCrossed} from "lucide-react";
import {SideProjectType} from "@/app/_component/status/sideProject/SideProject";

export const SIDE_PROJECTS: SideProjectType[] = [
  {
    Logo: UtensilsCrossed,
    title: "Crazee-Burger",
    description: "Projet de plateforme type Burger-King. techno (react, firebase, styled-components, react-router)",
    url: "https://crazeeburger-zer0absolute-zer0s-projects-da2820b3.vercel.app/?_vercel_share=WjpJDbyeeNwZEyjK00J8Umm7pM3j4jQJ",
  },
  {
    Logo: GraduationCap,
    title: "Mon Poulpe",
    description: "Projet de mise en place d’une plateforme pour apprendre les bases de différentes technos.",
    url: "/https://monpoulpe.fr",
  },
  {
    Logo: ScrollText,
    title: "In-comming",
    description: "Site web de cuisine où vous pourrez retrouver des recettes (macros) pour tous types de régimes.",
    url: "/",
  },
  {
    Logo: Notebook,
    title: "In-comming",
    description: "Création d’une application web de prise de notes via la voix, avec une intégration d’IA pour apporter du style à la note.",
    url: "/",
  },
]