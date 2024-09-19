import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export type WorkType = {
  image: string,
  title: string,
  role: string,
  date: string
  url: string,
  freelance?: boolean,
}

export const Work = (props: WorkType) => {
  return (
    <Link href={props.url}
          className={"inline-flex items-center gap-4 p-1 rounded hover:bg-accent/50 transition-colors"}>
      <img src={props.image} alt={props.title} className={"w-10 h-10 rounded-md object-contain"}/>
      <div>
        <div className={"flex items-center gap-2"}>
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant={"outline"}>Mission</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className={"ml-auto"}>
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  )
}