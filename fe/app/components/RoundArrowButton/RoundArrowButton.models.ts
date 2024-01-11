type ArrowDirectionType = "up" | "down" | "left" | "right";

export interface RoundArrowButtonProps {
  arrowDirection: ArrowDirectionType;
  onClick?: () => void;
}
