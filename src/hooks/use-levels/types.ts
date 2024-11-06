import type { FC, SVGProps } from "react";
import type { GameOptions } from "store";

export type LevelItem = {
  label: string;
  image: FC<SVGProps<SVGSVGElement>>;
  requiredScore: number;
  gameOptions: GameOptions;
};
