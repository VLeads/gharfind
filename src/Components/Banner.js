import React, { useState} from 'react';
import '../Styles/Banner.css';
import { Button } from "@material-ui/core";
import Search from '../Components/Search';
import { useHistory } from "react-router-dom";

function Banner() {
    // in "explore nearby" button, i've used history.push to redirect me to search page. Basically i'm storing direction via useHistory
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant="outlined"
                >
                {showSearch ?
                "Hide" :
                "Search Dates"} 
                </Button>
            </div>
        </div>
    )
}

export default Banner
