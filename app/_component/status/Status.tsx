import {Section} from "@/app/_component/Section";
import {Card} from "@/components/ui/card";
import {SideProject} from "@/app/_component/status/sideProject/SideProject";
import {SIDE_PROJECTS} from "@/app/_component/status/sideProject/SIDE_PROJECT";
import {Work} from "@/app/_component/status/work/Work";
import {WORKS} from "@/app/_component/status/work/WORKS";
import {Contact} from "@/app/_component/status/contatCard/Contact";

export const Status = () => {
  return (
    <Section className={"flex max-md:flex-col items-start gap-4"}>
      <div className={"flex-[3] w-full"}>
        <Card className={"w-full p-4 flex flex-col gap-2"}>
          <p className="text-lg text-primary">Side, fun project</p>
          <div className={"flex flex-col gap-4"}>
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project}/>
            ))}
          </div>
        </Card>
      </div>
      <div className={"w-full flex-[2] flex flex-col gap-4"}>
        <Card className={"p-4 flex-1"}>
          <p className="text-lg text-primary">Work</p>
          <div className={"flex flex-col gap-2.5"}>
            {WORKS.map((work, index) => (
              <Work key={index} {...work}/>
            ))}
          </div>
        </Card>
        <Card className={"p-4 flex-1"}>
          <p className="text-lg text-primary">Contact Me</p>
          <Contact/>
        </Card>
      </div>
    </Section>
  );
};