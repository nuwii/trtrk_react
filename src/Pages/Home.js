import React from "react";
import Header from "../Wrappers/Header";
import Footer from "../Wrappers/Footer";
import Slider from "../Components/Slider/Slider";
import SectionIntro from "../Components/Sections/SectionIntro";
import SectionTwo from "../Components/Sections/SectionTwo";
import SectionWhyUs from "../Components/Sections/SectionWhyUs";
import SectionNews from "../Components/Sections/SectionNews";
import LayoutOne from "../Layouts/LayoutOne";

const Home = () => {
  return (
    <LayoutOne>
      <Slider />
      <SectionIntro />
      {/* <SectionTwo /> */}
      <SectionWhyUs />
      {/* <SectionNews /> */}
    </LayoutOne>
  );
};

export default Home;
