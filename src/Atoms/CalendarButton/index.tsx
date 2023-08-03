import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";

import { StyledButton } from "@/Atoms/CalendarButton/styles";

function CalendarButton({
  text,
  onClick,
}: {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): React.ReactElement {
  return (
    <StyledButton
      variant="outlined"
      startIcon={<DateRangeIcon />}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default CalendarButton;
