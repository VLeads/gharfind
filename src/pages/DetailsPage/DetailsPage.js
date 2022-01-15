import React, { useState } from "react";
import Search from "../../Components/Search";
import Card from "../../Components/Card";

import "../../Styles/Search.css";
import "../../Styles/DetailsPage.css";
import "../../Styles/SearchPage.css";

import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

const DetailsPage = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //it is by default with react-date-range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //by default with react-date-range
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="mainContainer">
      <div className="roomImg">
        <Card
          src="https://bit.ly/3hn2DuX"
          title="1 Bedroom"
          description="Stressed with the working day, have a cozy sleep with this cozy bedroom"
          price="Rs. 350/night"
        />
      </div>
      <div className="bookRoom">
        <h3>Select Dates</h3>
        <div>
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/search")}
        >
          Book Room
        </Button>
      </div>
    </div>
  );
};

export default DetailsPage;
