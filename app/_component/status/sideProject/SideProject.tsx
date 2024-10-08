import {LucideIcon} from "lucide-react";
import Link from "next/link";

export type SideProjectType = {
  Logo: LucideIcon,
  title: string,
  description: string,
  url: string,
}

export const SideProject = (props: SideProjectType) => {
  return (
    <Link href={props.url}
          className={"inline-flex items-center gap-4 p-1 rounded hover:bg-accent/50 transition-colors"}>
      <span className={"bg-accent text-accent-foreground p-3 rounded-sm"}><props.Logo size={18}/></span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  )
}