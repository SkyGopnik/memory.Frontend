import type { ButtonProps as HTMLButtonProps } from "react-html-props";

export type ButtonType = "primary" | "secondary";

export type ButtonColor =
  | "amber"
  | "red"
  | "lime"
  | "pink"
  | "violet"
  | "blue"
  | "purple";

export type ButtonProps = Omit<HTMLButtonProps, "type"> & {
  type?: ButtonType;
  color: ButtonColor;
  htmlType?: HTMLButtonProps["type"];
};
