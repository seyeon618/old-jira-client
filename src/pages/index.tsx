import React, { useEffect, useState } from "react";
import { DateRange } from "@mui/x-date-pickers-pro";
import axios from "axios";
import { Dayjs } from "dayjs";

import CalendarButton from "@/Atoms/CalendarButton";
import ComboBox from "@/Atoms/ComboBox";
import PopoverCalendar from "@/Atoms/PopoverCalendar";
import SearchBar from "@/Atoms/SearchBar";

import { ButtonWrap, Container, Logo } from "./styles";

function Home(): React.ReactElement {
  const [issue, setIssue] = useState();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [date, setDate] = React.useState<DateRange<Dayjs>>([null, null]);
  const [label, setLabel] = useState("");

  useEffect(() => {
    getLabels();
  }, []);

  const getLabels = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/label`).then((res) => {
      console.log(res.data);
    });
  };

  const openPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getIssue = () => {
    const data = {
      search_text: "세미나",
      exclude_text: "",
      from_date: "20200101",
      to_date: "20230714",
      label: "",
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/search`, data)
      .then((res) => {
        setIssue(res.data);
        console.log(res.data);
      });
  };

  const searchIssue = () => {
    console.log(label);
    console.log(date[0]?.format("YYYYMMDD"));
    console.log(date[1]?.format("YYYYMMDD"));
  };

  return (
    <Container>
      <Logo />
      <SearchBar onClick={searchIssue} />
      <ButtonWrap>
        <CalendarButton onClick={openPopup} />
        <ComboBox
          options={["test1", "test2"]}
          label={label}
          setLabel={setLabel}
        />
      </ButtonWrap>
      <PopoverCalendar
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        date={date}
        setDate={setDate}
      />
    </Container>
  );
}

export default Home;
