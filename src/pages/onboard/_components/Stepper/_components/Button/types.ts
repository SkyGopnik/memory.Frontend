import type { ButtonProps } from "react-html-props";

export type PlayButtonProps = ButtonProps & {
  buttonType: "play" | "icon";
};
