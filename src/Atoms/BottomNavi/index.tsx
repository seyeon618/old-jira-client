import React from "react";

import { Contianer } from "@/Atoms/BottomNavi/styles";
import Driver from "@/Atoms/Driver";

function BottomNavi(): React.ReactElement {
  return (
    <>
      <Driver />
      <Contianer>
        <span>{"COPYRIGHT(C)2023 POLARIS OFFICE ALL RIGHTS RESERVED. -"}</span>
      </Contianer>
    </>
  );
}

export default BottomNavi;
