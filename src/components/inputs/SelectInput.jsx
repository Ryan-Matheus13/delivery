import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import './SelectInput.css'

const SelectInput = () => {
  const [bairro, setBairro] = useState("");

  const handleChange = (event) => {
    setBairro(event.target.value);
  };
  return (
    <>
      <Select className="select-input" value={bairro} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};

export default SelectInput;
