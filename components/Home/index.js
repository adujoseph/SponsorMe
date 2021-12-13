import React, { useEffect } from "react";
import * as backend from "../../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import * as reach from "@reach-sh/stdlib/ALGO";

const reach = loadStdlib(process.env);
const { standardUnit } = reach;

const Home = () => {
  useEffect(() => {
    initials();
  }, []);

  const initials = async () => {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    console.log(acc, bal);
    //this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      // this.setState({ view: "FundAccount" });
      alert("fund account");
    } else {
      // this.setState({ view: "DeployerOrAttacher" });
    }
  };
  return (
    <div className="home--wrapper">
      <h1>Welcome to Sponsor Me</h1>
      <div>
        <Row>
          <Col>
            <h1 className="display-6">Request Sponsorship</h1>
            <hr style={{ width: "10rem" }} />
            <p className="text-left mt-3">
              Showcase your unique idea to the world and get sponsorship upto 1
              million Algorand with ease. The journey to fulfil your dreams
              starts here
            </p>
            <Button>Get Started</Button>
          </Col>
          <Col>
            <h5 className="display-6">Be a Sponsors</h5>
            <hr style={{ width: "10rem" }} />
            <p className="text-left mt-3">
              You are here because you want to be a part of something great,
              something unique and something that will change the world. Don't
              hesistate, get started now!
            </p>
            <Button>Sponsor Now</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
