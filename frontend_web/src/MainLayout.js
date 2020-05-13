import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <MainPage />
    </div>
  );
};

export default MainLayout;
