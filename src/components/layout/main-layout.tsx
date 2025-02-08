import React from "react";
import ToasterProvider from "~/libs/provider/toast-provider";
import NavBar from "../nav-bar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ToasterProvider />
      <NavBar />
      {children}
    </>
  );
};

export default MainLayout;
