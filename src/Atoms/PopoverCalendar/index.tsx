import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";

import RangeCalendar from "@/Atoms/RangeCalendar";

function PopoverCalendar({
  anchorEl,
  setAnchorEl,
  date,
  setDate,
}: {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  date: DateRange<Dayjs>;
  setDate: React.Dispatch<React.SetStateAction<DateRange<Dayjs>>>;
}): React.ReactElement {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <RangeCalendar date={date} setDate={setDate} />
    </Popover>
  );
}

export default PopoverCalendar;
