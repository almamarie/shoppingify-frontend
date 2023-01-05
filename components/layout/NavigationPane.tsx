import Image from "next/image";
import React from "react";
import logo from "../../public/resources/logo.svg";

const NavigationPane: React.FC<{ className: React.ReactNode }> = () => {
  return (
    <div>
      <Image src={logo} alt="Logo of shoppingify" />
    </div>
  );
};

export default NavigationPane;
