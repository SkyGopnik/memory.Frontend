import type { FC, SVGProps } from "react";

export interface LevelProps {
  title: string;
  image: FC<SVGProps<SVGSVGElement>>;
  currentScore: number;
  requiredScore: number;
  isActive?: boolean;
  isLocked?: boolean;
}
