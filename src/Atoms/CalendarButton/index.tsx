import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";

import { StyledButton } from "@/Atoms/CalendarButton/styles";

function CalendarButton({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): React.ReactElement {
  return (
    <StyledButton
      variant="outlined"
      startIcon={<DateRangeIcon />}
      onClick={onClick}
    >
      Creation Date
    </StyledButton>
  );
}

export default CalendarButton;
