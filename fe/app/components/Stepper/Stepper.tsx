import { StepperProps } from "@components/Stepper/Stepper.models";
import StepperElement from "@components/StepperElement/StepperElement";
import { useTranslations } from "next-intl";

const Stepper = ({ activeStep, category }: StepperProps) => {
  const t = useTranslations("Components.Stepper");
  return (
    <div className="flex items-start justify-center gap-1 text-center font-league-gothic md:gap-3">
      <StepperElement
        index={1}
        text={t("textOne")}
        category={category}
        isActive={activeStep === 0}
      />
      <StepperElement
        index={2}
        text={t("textTwo")}
        category={category}
        isActive={activeStep === 1}
      />
      <StepperElement
        index={3}
        text={t("textOne")}
        category={category}
        isActive={activeStep === 2}
      />
      <StepperElement
        category={category}
        withIcon
        isLast
        isActive={activeStep === 3}
      />
    </div>
  );
};

export default Stepper;
