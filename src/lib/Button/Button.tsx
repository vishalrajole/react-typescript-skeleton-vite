import { ButtonProps as MuiButtonProps } from "@mui/material";

import { StyledButton } from "./button.styles";

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
