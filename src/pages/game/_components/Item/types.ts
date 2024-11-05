import type { PropsWithChildren } from "react";

export type ItemProps = PropsWithChildren<{
  isActive?: boolean;
  onClick?: () => void;
  size: number;
}>;
