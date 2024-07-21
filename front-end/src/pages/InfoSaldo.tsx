import React from "react";
import Header from "../components/layout/header";
import InfoUser from "../components/layout/infouser";
import MenuFitur from "../components/layout/menufitur";

const InfoSaldo: React.FC = () => {
  return (
    <body className="bg-primary-dark-blue font-sans">
      <Header />
      <InfoUser />
      <MenuFitur />
      
    </body>
  );
};

export default InfoSaldo;
