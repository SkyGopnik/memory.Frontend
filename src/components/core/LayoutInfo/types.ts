import type { LayoutWrapperProps } from "../LayoutWrapper/types";
import type { GameResults } from "store/game/types";

export interface LayoutInfoProps extends LayoutWrapperProps {
  title: string;
  description: string;
  results?: GameResults;
}
