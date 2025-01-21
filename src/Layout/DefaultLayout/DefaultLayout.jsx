import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTo from "../../Components/ScrollToTo/ScrollToTo";

const DefaultLayout = () => {
  return (
    <div className="App">
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
