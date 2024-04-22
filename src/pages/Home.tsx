import React, { useState } from "react";
import Banner from "../utils/Banner";
import Clientes from "./Clientes";
import { pagesEnum } from "../constants";

const Home = () => {
  const [component, setComponent] = useState(<></>);

  const handlePage = (page: string) => {
    if (page === pagesEnum.Cli) {
      setComponent(<Clientes></Clientes>);
      return;
    }
    setComponent(<></>);
  }

  return (
    <>
      <Banner page={handlePage}></Banner>
      {component}
    </>
  );
};

export default Home;
