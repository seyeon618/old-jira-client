import React, { useState } from "react";
import { DateRange, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { StyledRangeCalendar } from "./styles";

function RangeCalendar({
  date,
  setDate,
}: {
  date: DateRange<Dayjs>;
  setDate: React.Dispatch<React.SetStateAction<DateRange<Dayjs>>>;
}): React.ReactElement {
  const today = dayjs();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledRangeCalendar
        calendars={1}
        value={date}
        onChange={(date: DateRange<unknown>) =>
          setDate(date as DateRange<Dayjs>)
        }
        dayOfWeekFormatter={(day) =>
          daysOfWeek[["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].indexOf(day)]
        }
        shouldDisableDate={(day) => {
          return dayjs(day as Dayjs).isAfter(today);
        }}
      />
    </LocalizationProvider>
  );
}

export default RangeCalendar;
