import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Steps
        css={{
          "--steps-size": size,
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step}>
            {step}
          </Step>
        ))}
      </Steps>
      <Label>
        Passo {currentStep} de {size}
      </Label>
    </MultiStepContainer>
  );
}

MultiStep.displayName = "MultiStep";
