import type { FC, SVGProps } from "react";

export interface ItemProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  price: number;
  isOwned?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  onInstall?: () => void;
  onPurchase?: () => void;
}
