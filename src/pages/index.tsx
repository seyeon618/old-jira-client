import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DateRange } from "@mui/x-date-pickers-pro";
import axios from "axios";
import { Dayjs } from "dayjs";

import BottomNavi from "@/Atoms/BottomNavi";
import CalendarButton from "@/Atoms/CalendarButton";
import PopoverCalendar from "@/Atoms/PopoverCalendar";
import SearchBar from "@/Atoms/SearchBar";

import ComboBox from "../Atoms/ComboBox";

import { ButtonWrap, Container, Logo } from "./styles";

function Home(): React.ReactElement {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [date, setDate] = React.useState<DateRange<Dayjs>>([null, null]);
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    getLabels();
  }, []);

  const getLabels = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/label`).then((res) => {
      setOptions(res.data.labels);
    });
  };

  const openPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const searchIssue = () => {
    const fromDate = date[0]?.format("YYYYMMDD");
    const toDate = date[1]?.format("YYYYMMDD");
    const data = {
      search_text: searchText,
      exclude_text: "",
      from_date: fromDate ?? "",
      to_date: toDate ?? "",
      label: label,
    };
    console.log(data);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/search`, data)
      .then((res) => {
        res.data.forEach((item: any) => {
          if (item.LABEL.length > 0) {
            console.log(item);
          }
        });
        console.log(res.data);
      });
  };

  return (
    <>
      <Container>
        <Logo />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onClick={searchIssue}
        />
        <ButtonWrap>
          <CalendarButton
            text={
              date[0]?.format("YYYY-MM-DD") && date[1]?.format("YYYY-MM-DD")
                ? `${date[0]?.format("YYYY-MM-DD")} ~ ${date[1]?.format(
                    "YYYY-MM-DD"
                  )}`
                : "Creation Date"
            }
            onClick={openPopup}
          />
          <ComboBox options={options} label={label} setLabel={setLabel} />
        </ButtonWrap>
        <PopoverCalendar
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          date={date}
          setDate={setDate}
        />
      </Container>
      <BottomNavi />
    </>
  );
}

export default Home;
