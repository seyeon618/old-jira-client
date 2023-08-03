import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const GuideText = styled("div")``;

export const Container = styled("div")`
  width: 80%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

export const SearchIconWrapper = styled("div")`
  display: flex;
  margin: auto;
  flex: 1;
`;

export const Search = styled("div")`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 10px 20px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  color: #9ea3a9;
`;

export const SearchInput = styled(InputBase)`
  display: flex;
  margin: auto;
  flex: 9;

  font-family: NotoSans, sans-serif;
`;
