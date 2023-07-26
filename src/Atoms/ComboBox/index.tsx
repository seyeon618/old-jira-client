import React, { SetStateAction } from "react";
import TextField from "@mui/material/TextField";

import { StyledAutocomplete } from "@/Atoms/ComboBox/styles";

function ComboBox({
  options,
  label,
  setLabel,
}: {
  options: string[];
  label: string;
  setLabel: React.Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  const onChange = (
    e: React.SyntheticEvent<Element, Event>,
    label: unknown
  ) => {
    if (typeof label === "string") {
      setLabel(label);
    }
  };

  return (
    <StyledAutocomplete
      disablePortal
      options={options}
      value={label}
      onChange={onChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default ComboBox;
