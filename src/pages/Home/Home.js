import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";

import HomePageSlider from "../../Components/Slider/HomePageSlider";
// import images from './Slider/images';

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      {/* <h1>Home component</h1> */}
      <Banner />
      {/* <HomePageSlider slides={images} autoPlay={3} /> */}
      <HomePageSlider />

      <div className="home__section">
        <Card
          src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg"
          title="Beautiful stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          title="Entire homes"
          description="Comfortable private places, with room for friends & family "
        />
        <Card
          src="https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251__340.jpg"
          title="1 bedroom appartments"
          description="Rooms that just enough to meet your basic needs"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://bit.ly/3hn2DuX"
          title="1 Bedroom"
          description="Stressed with the working day, have a cozy sleep with this cozy bedroom"
          price="Rs. 350/night"
        />
        <Card
          src="https://img.staticmb.com/mbphoto/property/cropped_images/2019/Jul/24/Photo_h180_w240/35072739_6_1563975048731632828711_180_240.jpg"
          title="Room in Kolkata"
          description="Fully equipped room, giving feel of your own home"
          price="Rs.600/night"
        />
        <Card
          src="https://i.ytimg.com/vi/cRpn8Wrf4Fs/maxresdefault.jpg"
          title="Room in Agra"
          description="Enjoy the amazing sites of Agra with this amazing room"
          price="Rs. 700/night"
        />
        <Card
          src="https://bit.ly/3hn2DuX"
          title="1 Bedroom"
          description="Stressed with the working day, have a cozy sleep with this cozy bedroom"
          price="Rs. 350/night"
        />
      </div>
    </div>
  );
}

export default Home;
