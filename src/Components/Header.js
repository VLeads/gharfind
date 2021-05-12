import React from 'react'
import '../Styles/Header.css';
import logo from '../gharfind-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
//we 👆 imported "Avatar" as a component, not an icon. Because we want profile image in that circular shape when user logged in

function Header() {
    return (
        <div className="header">
            <img 
            className="header__icon"
                src={logo}
                alt="GharFind logo"
            />

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p> 
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
