import type { FC, SVGProps } from "react";

export interface GoodsProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  price: number;
  isOwned?: boolean;
  isSelected?: boolean;
}
