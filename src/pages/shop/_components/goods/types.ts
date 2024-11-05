import type { ComponentType, SVGProps } from "react";

export interface GoodsProps {
  id: number;
  title: string;
  price: number;
  isBuy: boolean;
  isSelected: boolean;
  imageSrc: ComponentType<SVGProps<SVGSVGElement>>;
}
