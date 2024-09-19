import {Section} from "@/app/_component/Section";
import {Code} from "@/app/_component/Code";
import {FrenchIcon} from "@/app/_component/icons/FrenchIcon";
import {ReactIcon} from "@/app/_component/icons/ReactIcon";
import {NextIcon} from "@/app/_component/icons/NextIcon";
import {ThreeIcon} from "@/app/_component/icons/ThreeIcon";

export const Hero = () => {
  return (
    <Section className={"flex max-md:flex-col items-start gap-4"}>
      <div className={"flex-[3] w-full flex flex-col gap-2"}>
        <h2 className={"font-caption font-bold text-5xl text-primary"}>Maël Colomé</h2>
        <h3 className={"text-3xl font-caption"}>Software Developer</h3>
        <p>I am a <Code className={"inline-flex items-center gap-1"}>
          <FrenchIcon className={"inline-flex animate-pulse"} size={16}/> French
        </Code> FullStack developer.&nbsp; My main framework is <Code className={"inline-flex items-center gap-1"}><ReactIcon
            size={16} className={"inline-flex animate-pulse"}/>React</Code> and i also use <Code
            className={"inline-flex items-center gap-1"}><NextIcon size={16} className={"inline-flex animate-pulse"}/>Next.js</Code> as
          both a backend and frontend framework. I am learning <Code
            className={"inline-flex items-center gap-1"}><ThreeIcon size={16} className={"inline-flex animate-pulse"}/>Three.js</Code> to
          create websites with 3D animations. I live in <Code
            className={"inline-flex items-center gap-1"}>Montpellier</Code>, and my hobbies are <Code
            className={"inline-flex items-center gap-1"}>Photography</Code> and <Code
            className={"inline-flex items-center gap-1"}>Traveling</Code>
        </p>
      </div>
      <div className={"flex-[2] max-md:m-auto ml-auto"}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"
          alt="Maël's picture"
          className={"w-full h-auto rounded-full max-w-sm max-md:w-56"}
        />
      </div>
    </Section>
  );
};