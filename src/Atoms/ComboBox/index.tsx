import React, { SetStateAction } from "react";
import TextField from "@mui/material/TextField";

import { StyledAutocomplete, StyledPopper } from "@/Atoms/ComboBox/styles";

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

  // const CustomPopper: React.FC<PopperProps> = (props) => {
  //   const memoChildren = useMemo(() => props.children, [options]);
  //
  //   return (
  //     <Popper open={props.open} anchorEl={props.anchorEl}>
  //       {memoChildren}
  //     </Popper>
  //   );
  // };

  return (
    <StyledAutocomplete
      freeSolo
      value={label}
      options={options}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      PopperComponent={(props) => (
        <StyledPopper {...props}>{props.children}</StyledPopper>
      )}
    />
  );
}

export default React.memo(ComboBox);
