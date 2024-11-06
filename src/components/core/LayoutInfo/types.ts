import type { ReactNode } from "react";
import type { GameResults } from "store";

import type { LayoutWrapperProps } from "../LayoutWrapper/types";

export interface LayoutInfoProps extends LayoutWrapperProps {
  contentClassName?: string;
  title: string;
  description: string;
  stats?: GameResults;
  actions?: ReactNode;
  onClose?: () => void;
}
