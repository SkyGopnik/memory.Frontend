import type { ComponentType, SVGProps } from "react";

export interface LevelProps {
  id: number;
  title: string;
  requiredScore: number;
  imageSrc: ComponentType<SVGProps<SVGSVGElement>>;
}
