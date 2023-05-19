import MuiButton from "@mui/material/Button";
import { styled } from "styled-components";

export const StyledButton = styled(MuiButton)`
  border-radius: ${(props) => props.theme.shape.borderRadius};
  border: 2px solid ${(props) => props.theme.palette.primary.main};
`;
