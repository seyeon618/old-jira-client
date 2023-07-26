import { styled } from "@mui/material/styles";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export const StyledRangeCalendar = styled(DateRangeCalendar)`
  &.MuiDateRangeCalendar-root > div:first-of-type {
    display: none;
  }

  .MuiPickersDay-root.Mui-selected {
    background-color: #2b6590;
    color: white !important;
  }

  .MuiTypography-root {
    font-family: PretendardMedium, sans-serif;
  }

  .MuiDateRangePickerDay-rangeIntervalPreview > button {
    font-family: Pretendard, sans-serif;
  }

  .MuiDayCalendar-header > span:first-of-type,
  .MuiDayCalendar-weekContainer > div:first-of-type button:not(:disabled) {
    color: #f36262;
  }

  .MuiDayCalendar-header > span:last-of-type,
  .MuiDayCalendar-weekContainer > div:last-of-type button:not(:disabled) {
    color: #2b6590;
  }
`;
