import React, { useState } from "react";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const GenderRadio = () => {
  const [gender, setGender] = useState("male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>

      <RadioGroup
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />

        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderRadio;