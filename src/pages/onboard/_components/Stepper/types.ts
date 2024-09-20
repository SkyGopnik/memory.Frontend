export interface Step {
  title: string;
  image: string;
  description: string;
  onActionClick(): void;
  buttonType: "play" | "icon";
}
