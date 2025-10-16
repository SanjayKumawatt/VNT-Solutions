import React from "react";
import HeroSection from "../Components/HeroSection";
import OurServices from "../Components/OurServices";
import WhyChooseUs from "../Components/WhyChooseUs";
import MarketingFunnel from "../Components/MarketingFunnel";

function Home(){
    return(
        <div>
            <HeroSection/>
            <OurServices/>
            <WhyChooseUs/>
            <MarketingFunnel/>
        </div>
    );
}

export default Home;