export interface Step {
  title: string;
  description: string;
  image: string;
  nextStep(): void;
  isLastStep: boolean;
}
