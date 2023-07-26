import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { Search, SearchInput } from "./styles";

function SearchBar({ onClick }: { onClick: () => void }): React.ReactElement {
  return (
    <Search>
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
      <SearchInput inputProps={{ "aria-label": "search" }} />
    </Search>
  );
}

export default SearchBar;
