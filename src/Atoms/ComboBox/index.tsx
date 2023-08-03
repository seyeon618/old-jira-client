import React, { SetStateAction, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

import { StyledAutocomplete } from "@/Atoms/LabelComboBox/styles";

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
    label: string | unknown
  ) => {
    if (typeof label === "string") setLabel(label);
  };

  return (
    <StyledAutocomplete
      freeSolo
      value={label}
      options={options}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default ComboBox;
