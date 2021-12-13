import React, { useEffect, useState } from "react";
import * as backend from "../../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const reach = loadStdlib(process.env);
const { standardUnit } = reach;
console.log(standardUnit, "starter", reach);

const Home = () => {
  const [balProj, setBalProj] = useState();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [share, setShare] = useState();
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  let ctcPO = null;
  let ctcS = null;
  let accPO = null;
  let accS = null;

  useEffect(() => {
    initials();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    let payload = {
      name,
      amount,
      share,
      description,
      address,
    };
    //deploy with payload
    handleClose();
  };

  const initials = async () => {
    const startingBalance = await reach.parseCurrency(1000);
    [accPO, accS] = await reach.newTestAccounts(2, startingBalance);

    const fmx = x => reach.formatCurrency(x, 4);
    const getBalance = async acc => fmx(await reach.balanceOf(acc));

    const initialBalAlice = await getBalance(accPO);
    const initialBalBob = await getBalance(accS);
    console.log(initialBalAlice, "startingBalance", initialBalBob);

    ctcPO = accPO.contract(backend);
    ctcS = accS.contract(backend, ctcPO.getInfo());
    // const acc = await reach.getDefaultAccount();
    // const sellerAcc = await reach.stdlib.newTestAccount(1000);
    // const buyerAcc = await reach.stdlib.newTestAccount(1000);
    // const toAU = su => reach.stdlib.parseCurrency(su);
    // const toSU = au => reach.stdlib.formatCurrency(au, 4);
    // const showBalance = async (role, acc) => {
    //   let balance = toSU(await stdlib.balanceOf(acc));
    //   document.getElementById(`${role}-balance`).value = balance;
    // };
    // const balAtomic = await reach.balanceOf(acc);
    // const bal = reach.formatCurrency(balAtomic, 4);
    // setBalProj(bal);
    // if (await reach.canFundFromFaucet()) {
    //   // this.setState({ view: "FundAccount" });
    //   alert("fund account");
    // } else {
    //   alert("deploy or attach");
    //   // this.setState({ view: "DeployerOrAttacher" });
    // }
  };

  const deployProject = async () => {
    const proposalInteract = {
      proposalInfo: {
        name,
        amount,
        share,
        description,
        address,
      },
      reportReady: async () => {
        const projectInfo = JSON.stringify(await ctcPO.getInfo());
      },
    };

    ctcPO = accPO.contract(backend);
    await backend.ProjectOwner(ctcPO, proposalInteract);
    // await showBalance("seller", sellerAcc);
  };

  const attachProject = async () => {
    const attachInteract = {
      attachInfo: {
        name,
        amount,
        share,
        description,
        address,
      },
      reportReady: async () => {
        const projectInfo = JSON.stringify(await ctcS.getInfo());
      },
    };

    ctcS = accS.contract(backend);
    await backend.Sponsor(ctcS, attachInteract);
    // await showBalance("seller", sellerAcc);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Please fill the form below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="NFT Market Place"
                onChange={e => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="NFT Market Place"
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Funding Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="400"
                onChange={e => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Equity Share</Form.Label>
              <Form.Control
                type="number"
                placeholder="40"
                onChange={e => setShare(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="home--wrapper">
        <h1>Welcome to Sponsor Me</h1>
        <div>
          <Row>
            <Col>
              <h1 className="display-6">Request Sponsorship</h1>
              <hr style={{ width: "10rem" }} />
              <p className="text-left mt-3">
                Showcase your unique idea to the world and get sponsorship upto
                1 million Algorand with ease. The journey to fulfil your dreams
                starts here
              </p>
              <Button onClick={handleShow}>Get Started</Button>
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
    </>
  );
};

export default Home;
