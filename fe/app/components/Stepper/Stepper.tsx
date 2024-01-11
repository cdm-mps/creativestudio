import { StepperProps } from "@components/Stepper/Stepper.models";
import StepperElement from "@components/StepperElement/StepperElement";
import { useTranslations } from "next-intl";

const Stepper = ({ activeStep, category }: StepperProps) => {
  const t = useTranslations("Components.Stepper");
  return (
    <div className="flex justify-center items-start font-league-gothic text-center md:gap-3 gap-1">
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
