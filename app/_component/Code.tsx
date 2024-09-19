import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn("font-mono bg-accent/30 hover:bg-accent/50 transition-colors border border-accent px-1 py-0.5 p-1 rounded-sm text-primary", className)} {...props} />
  );
};