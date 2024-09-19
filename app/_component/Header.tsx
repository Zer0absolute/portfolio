import {Section} from "@/app/_component/Section";
import {buttonVariants} from "@/components/ui/button";
import {GithubIcon} from "@/app/_component/icons/GithubIcon";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {LinkedinIcon} from "lucide-react";
import {CodingGameIcon} from "@/app/_component/icons/CodingGameIcon";

export const Header = () => {
  return (
    <header className={"top-0 py-4"}>
      <Section className={"flex items-baseline"}>
        <div className={"inline-flex gap-2"}>
          <h1 className={"text-lg font-bold text-primary"}>maelcolome.com</h1>
          {/*<h1 className={"text-lg font-bold text-primary"}>Blog</h1>*/}
        </div>
        <div className={"flex-1"}/>
        <ul className={"flex items-center gap-2"}>
          <Link
            href="https://github.com/Zer0absolute"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
          >
            <GithubIcon size={16} className={"text-foreground"}/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mael-colome/"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className={"text-foreground"}/>
          </Link>
          <Link
            href="https://www.codingame.com/profile/33011eafc537a63f3fb76064f5c9b8582901965"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
          >
            <CodingGameIcon size={16} className={"text-foreground"}/>
          </Link>
        </ul>
      </Section>
    </header>
  );
};