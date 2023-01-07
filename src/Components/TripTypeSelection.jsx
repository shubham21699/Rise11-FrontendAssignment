import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function TripTypeSelection() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="roundTrip"
          control={<Radio />}
          label="Round Trip"
        />
        <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
        <FormControlLabel
          value="multiCity"
          control={<Radio />}
          label="Multi City"
        />
      </RadioGroup>
    </FormControl>
  );
}
