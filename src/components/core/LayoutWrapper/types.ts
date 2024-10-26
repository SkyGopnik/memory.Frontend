import type { FC, PropsWithChildren, SVGProps } from "react";

export type LayoutWrapperProps = PropsWithChildren<{
  className?: string;
  pattern: FC<SVGProps<SVGSVGElement>>;
}>;
