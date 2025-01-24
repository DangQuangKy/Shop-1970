import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTo from "../../Components/ScrollToTo/ScrollToTo";
import TitleSlider from "../../Components/Slider/TitleSlider";

const DefaultLayout = () => {
  return (
    <div className="App">
      <div className="slider-sticky">
        <TitleSlider />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTo />
    </div>
  );
};

export default DefaultLayout;
