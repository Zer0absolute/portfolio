import {cn} from "@/lib/utils";

type SpacingType = {
  size?: "small" | "medium" | "large";
}

export const Spacing = ({size = "medium"}: SpacingType) => {
  return (
    <div className={cn({
      "h-8 lg:h-16": size === "small",
      "h-16 lg:h-24": size === "medium",
      "h-24 lg:h-32": size === "large",
    })}/>
  );
};