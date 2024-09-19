import {Section} from "@/app/_component/Section";
import {Badge} from "@/components/ui/badge";
import {ReactIcon} from "@/app/_component/icons/ReactIcon";
import {NextIcon} from "@/app/_component/icons/NextIcon";
import {TailwindIcon} from "@/app/_component/icons/TailwindIcon";
import {Code} from "@/app/_component/Code";

export const Skills = () => {
  return (
    <Section className={"flex flex-col items-start gap-4"}>
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className={"flex max-md:flex-col gap-4 flex-1"}>
        <div>
          <div
            className="inline-flex gap-4">
            <ReactIcon size={46} className={"animate-pulse"}/>
            <span className={"border-r"}/>
            <NextIcon size={46} className={"animate-pulse"}/>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">React | Next.js</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        <div>
          <div
            className="flex flex-col gap-4 flex-1">
            <TailwindIcon size={46} className={"animate-pulse"}/>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">I can create <u>beautiful</u> application <i>in
            seconds</i> using <Code>TailwindCSS</Code></p>
        </div>
      </div>
    </Section>
  );
};