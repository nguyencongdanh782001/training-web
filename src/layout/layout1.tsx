import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Layout1 = ({ textColor, position, children }: any) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar textColor={textColor} position={position} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout1;
