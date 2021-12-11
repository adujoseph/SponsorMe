import React, { useState, useEffect } from "react";
import * as backend from "./build/index.main.mjs";
import * as reach from "@reach-sh/stdlib/ALGO";
import Button from "react-bootstrap/Button";


const { standardUnit } = reach;

const App = () => {
  const [isDeployer, setIsDeployer] = useState(false);

  useEffect(() => {
    // async function fetchData() {
    //   const acc = await reach.getDefaultAccount();
    //   const balAtomic = await reach.balanceOf(acc);
    //   const bal = reach.formatCurrency(balAtomic, 4);
    // }
    // fetchData();
  }, []);

  return (
    <div>
      <h1>Sponsor Me Header Goes Here...</h1>
      <Button variant="success">Button #3</Button>
    </div>
  );
};

export default App;
