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
            {/* <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>No worries if you don't have home, we are here for you !!</h5>
                <Button 
                onClick={() => history.push('/search')}
                variant='outlined'
                >Explore Nearby</Button>
            </div> */}
        </div>
    )
}

export default Banner
