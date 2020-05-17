import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import Pages from "./components/menus/Pages";

const MainLayout = ({ user, shop }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <section className="main-content">
        <Pages />
      </section>
    </div>
  );
};

export default MainLayout;
