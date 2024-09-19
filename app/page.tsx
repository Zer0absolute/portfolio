import {Header} from "@/app/_component/Header";
import {Hero} from "@/app/_component/Hero";
import {Spacing} from "@/app/_component/Spacing";
import {Status} from "@/app/_component/status/Status";
import {Skills} from "@/app/_component/Skills";
import {ContactMe} from "@/app/_component/ContactMe";
import {Footer} from "@/app/_component/Footer";


export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size={"medium"}/>
      <Hero/>
      <Spacing size={"medium"}/>
      <Status/>
      <Spacing size={"medium"}/>
      <Skills/>
      <Spacing size={"medium"}/>
      <ContactMe/>
      <Spacing size={"medium"}/>
      <Footer/>
    </main>
  );
}
