import React, { useState } from "react";
import "../Styles/Header.css";
import logo from "../gharfind-logo.png";
import { MdAccountCircle } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//we 👆 imported "Avatar" as a component, not an icon. Because we want profile image in that circular shape when user logged in
import { NavLink } from "react-router-dom";
import Auth from "./Auth";
import fire from "./Fire";
import Host from "./Host";

const Header = (hasAccount) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    alert("⚠ Note: Currently search function is in development !!");
  };

  return (
    <div className="header">
      {/* <a href> tag refresh the page, therefore we've not used that
            "<Link>" don't refresh the page */}
      <NavLink to="/" activeStyle={{ color: "blue" }}>
        <img className="header__icon" src={logo} alt="GharFind logo" />
      </NavLink>

      <div className="header__center">
        <input onChange={handleSubmit} type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <NavLink
          to="/host"
          activeStyle={{ backgroundColor: "lightblue" }}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{ textTransform: "inherit" }}
          >
            Host Room
          </Button>
        </NavLink>
        {/* <LanguageIcon /> */}

        {/* toggle button based on user login or logout */}

        {/* <Link to="/auth" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "inherit" }}
          >
            Signup/Signin
          </Button>
        </Link> */}

        {/* draopdown */}
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MdAccountCircle style={{ fontSize: 30 }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>
            <NavLink
              to="/auth"
              activeStyle={{ color: "blue" }}
              style={{ textDecoration: "none" }}
            >
              Sign up/in
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => fire.auth().signOut()}>Logout</MenuItem>
        </Menu>

        {/* <Button
          variant="contained"
          color="secondary"
          onClick={() => fire.auth().signOut()}
        >
          Logout
        </Button> */}
        {/* <Avatar /> */}

        {/* commented for short time */}
        {/* {hasAccount ? (
                    <Button variant='contained' color="secondary" onClick={() => fire.auth().signOut()} >Logout</Button>
                ) : (
                    <Link to='/auth' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' color="primary" style={{textTransform: 'inherit'}}>Signup/Signin</Button>
                    </Link>
                )} */}

        {/* <ExpandMoreIcon /> */}
      </div>
    </div>
  );
};

export default Header;
