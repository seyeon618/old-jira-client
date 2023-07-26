import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)`
  padding: 10px 20px;
  height: 100%;

  font-family: NotoSans, sans-serif;
  color: black;
  background-color: #f8f9fa;
  border: none;

  :hover {
    border: 1px solid #064ab9;
  }
`;
