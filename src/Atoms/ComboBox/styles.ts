import { Popper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

export const StyledAutocomplete = styled(Autocomplete)`
  &.MuiAutocomplete-root {
    width: 220px;
  }

  .MuiInputBase-root {
    padding: 6px;
    border-radius: 4px;
    input {
      z-index: 1;
      font-family: NotoSans, sans-serif;
    }
  }

  .MuiAutocomplete-endAdornment {
    z-index: 1;
  }

  .MuiOutlinedInput-notchedOutline {
    background-color: #f8f9fa;
    border: none;
  }
`;

export const StyledPopper = styled(Popper)`
  .MuiAutocomplete-listbox {
    max-height: 200px;
  }
`;
