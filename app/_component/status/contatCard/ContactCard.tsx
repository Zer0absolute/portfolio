import Link from "next/link";
import {Card} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";

type ContactCardType = {
  image: string,
  mediumImage: string,
  title: string,
  description: string,
  url: string,
}

export const ContactCard = (props: ContactCardType) => {
  return (
    <Link href={props.url} className={"w-full"}>
      <Card className={"p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4"}>
        <div className={"relative"}>
          <img
            src={props.image}
            alt={props.title}
            className={"w-12 h-12 rounded-full object-contain"}
          />
          <img
            src={props.mediumImage}
            alt={props.title}
            className={"w-6 h-6 rounded-full object-contain absolute -bottom-1 -right-1"}
          />
        </div>
        <div>
          <div className={"flex items-center gap-2"}>
            <p className="text-lg font-semibold">{props.title}</p>
          </div>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
        <div className={"ml-auto"}>
          <ArrowUpRight size={16}
                        className={"mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"}/>
        </div>
      </Card>
    </Link>
  )
}