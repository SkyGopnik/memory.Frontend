import type { ButtonHTMLAttributes } from "react";

export interface ShopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "buy" | "select";
}
