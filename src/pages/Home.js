import React from "react";
import HomeCardOne from "../components/HomeCardOne";
import HomeAboutCard from "../components/HomeAboutCard";
import Vison from "../components/Vison";
import HomesServices from "../components/HomesServices";

const Home = () => {
  const link = "/about"
  const servicsLink = '/services'

  return (
    <div className="">
     <HomeCardOne/>
     <HomeAboutCard link={link}/>
     <Vison/>
     <HomesServices servicsLink={servicsLink}/>
    </div>
  );
};

export default Home;
