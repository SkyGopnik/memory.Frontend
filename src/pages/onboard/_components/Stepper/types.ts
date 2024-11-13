import type { FC, SVGProps } from "react";

export interface Step {
  title: string;
  image: FC<SVGProps<SVGSVGElement>>;
  description: string;
  onActionClick(): void;
  buttonType: "play" | "icon";
}
