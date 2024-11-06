import type { FC, SVGProps } from "react";

export type ThemeItem = {
  title: string;
  value: string;
  price: number;
  icon: FC<SVGProps<SVGSVGElement>>;
  icons: Array<string>;
};
