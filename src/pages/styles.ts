import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 80%;
  height: 93vh;
  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Logo = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='501' height='60' viewBox='0 0 501 60' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect width='501' height='60' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_2018_6' transform='scale(0.00199601 0.0166667)'/%3E%3C/pattern%3E%3Cimage id='image0_2018_6' width='501' height='60' xlink:href='data:image/png;base64,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'/%3E%3C/defs%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 501px;
  height: 60px;
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 50px;
`;
