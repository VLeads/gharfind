import React, { useState } from 'react';
import '../Styles/Search.css';

import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";

//date picker component
//npm i react-date-range
function Search() {
    const [ startDate, setStartDate ] = useState(new Date());
    const [endDate, setEndDate ] = useState(new Date());

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
        <div className='search'>
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of guests
                <PeopleIcon />
            </h2>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button>Search GharFind</Button>
        </div>
    )
}

export default Search;