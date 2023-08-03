import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { Search, SearchInput } from "./styles";

function SearchBar({
  searchText,
  setSearchText,
  onClick,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}): React.ReactElement {
  return (
    <Search>
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
      <SearchInput
        inputProps={{ "aria-label": "search" }}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </Search>
  );
}

export default SearchBar;
