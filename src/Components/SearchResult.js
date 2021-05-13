import { FavoriteBorder } from '@material-ui/icons';
import React from 'react'
import "../Styles/SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
// this page linked with searchPAgeo
function SearchResult({
     img,
     location, 
     title,
     description,
     star,
     price,
     total,
}) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon 
                className="searchResult__heart"
            />
            <div className="searchResult__info">
                <div className="searchResult__infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon
                            className="searchResult__star"
                        />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
            </div>
            </div>
            
        </div>
    )
}

export default SearchResult
