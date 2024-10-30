import type { ReactNode } from "react";

export interface AfterGameProps {
  title: string;
  subtitle: string;
  isRecord?: boolean;
  showResult?: boolean;
  isNewLevel?: boolean;
  isSubscribe?: boolean;
  children: ReactNode;
}
