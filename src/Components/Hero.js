import React from 'react'

const Hero = (handleLogout) =>  {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Hero;



// import React from 'react'
// import '../Styles/Header.css';
// import logo from '../gharfind-logo.png';
// import SearchIcon from '@material-ui/icons/Search';
// import LanguageIcon from '@material-ui/icons/Language';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Avatar, Button } from "@material-ui/core";
// //we 👆 imported "Avatar" as a component, not an icon. Because we want profile image in that circular shape when user logged in
// import { Link } from "react-router-dom";

// const Hero = (handleLogout) => {

//     return (
//         <div className="header">
//             {/* <a href> tag refresh the page, therefore we've not used that
//             "<Link>" don't refresh the page */}
//             <Link to='/'>
//                 <img 
//                 className="header__icon"
//                     src={logo}
//                     alt="GharFind logo"
//                 />
//             </Link>

//             <div className="header__center">
//                 <input type="text" />
//                 <SearchIcon />
//             </div>

//             <div className="header__right">
//                 <Button variant="outlined" color="secondary">Host your listing</Button> 
//                 {/* <LanguageIcon /> */}

//                 <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
            
            
//                 {/* <ExpandMoreIcon /> */}
//                 <Avatar />
//             </div>
//         </div>
//     )
// }

// export default Hero
