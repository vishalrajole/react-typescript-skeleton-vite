import { StyledButton } from "./index.styles";

const Button = ({
  variant,
  label,
}: {
  variant: "text" | "contained" | "outlined";
  label: string;
}) => {
  return <StyledButton variant={variant}> {label}</StyledButton>;
};

export default Button;
