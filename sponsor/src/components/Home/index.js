import React, { useEffect, useState } from "react";
import * as backend from "../../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const reach = loadStdlib(process.env);
const { standardUnit } = reach;
console.log(standardUnit, "starter", reach);

const Home = () => {
  const [balProj, setBalProj] = useState();
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [share, setShare] = useState();
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contractInfo, setContractInfo] = useState("");
  const [view, setView] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let ctcPO = null;
  let ctcS = null;
  let accPO = null;
  let accS = null;
  // global variables
  let suStr = standardUnit;
  let toAU;
  let toSU;
  let iBalance;

  useEffect(() => {
    initials();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setErrorMessage("");
    if (!name) {
      setErrorMessage("Please enter project name");
      return;
    }
    if (!description) {
      setErrorMessage("Please enter project deescription");
      return;
    }
    if (!amount) {
      setErrorMessage("Please enter project funding target");
      return;
    }
    if (!share) {
      setErrorMessage("Please enter equity share percentage");
      return;
    }
    console.log(name, description, amount, share)
    //deploy with payload
    handleClose();
  };

  const initials = async () => {
    suStr = standardUnit;
    toAU = su => reach.parseCurrency(su);
    toSU = au => reach.formatCurrency(au, 4);
    iBalance = toAU(1000);
  };
  const showBalance = async acc => {
    console.log(
      `Your balance is ${toSU(await reach.balanceOf(acc))} ${suStr}.`
    );
    return toSU(await reach.balanceOf(acc));
  };

  const commonInteract = role => ({
    reportPayment: payment =>
      console.log(
        `${role === "sponsor" ? "You" : "The sponsor"} paid ${toSU(
          payment
        )} ${suStr} to the contract.`
      ),
    reportTransfer: payment =>
      console.log(
        `The contract paid ${toSU(payment)} ${suStr} to ${
          role === "projectOwner" ? "you" : "the Project Owner"
        }.`
      ),
    reportExit: () => {
      console.log("Exiting contract");
    },
    reportCancellation: () => {
      console.log(
        `${role === "sponsor" ? "You" : "The Sponsor"} cancelled sponsorship.`
      );
    },
    reportTokenMinted: minted => {
      console.log(`Token was minted ${minted}`);
    },
    // didTransfer: (did, amt) => {
    //   if (did) {
    //     amt = _amt;
    //     console.log(`${role}: Received transfer of ${toSU(amt)}`);
    //   }
    //   console.log(`Token transfered ${amt}`);
    // },
    programEnded: () => {
      console.log("Program ended");
    },
  });

  const deployProject = async () => {
    const projectOwnerInteract = {
      ...commonInteract("projectOwner"),
      projectInfo: {
        projectName: name,
        projectDetails: description,
        fundraisingGoal: toAU(amount),
        contractDuration: 200,
        share: share,
      },
      reportReady: async () => {
        console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      },
      getParams: () => ({
        name: `Gil`,
        symbol: `GIL`,
        url: `https://tinyurl.com/4nd2faer`,
        metadata: `It's shiny!`,
        supply: reach.parseCurrency(1000),
        amt: reach.parseCurrency(amount),
      }),
      // reportReady: async () => { console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`); }
    };

    const acc = await reach.newTestAccount(iBalance);
    const ctc = acc.contract(backend);
    await backend.ProjectOwner(ctc, projectOwnerInteract);
    await showBalance(acc);
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
    const sponsorInteract = {
      ...commonInteract("sponsor"),
      sponsor: confirm,
    };
    const acc = await reach.newTestAccount(iBalance);
    const info = contractInfo;
    const ctc = acc.contract(backend, info);
    await ctc.p.Sponsor(sponsorInteract);
    await showBalance(acc);
  };

  const getSponsorship = () => {
    setView("deploy");
  };

  const beASponsor = () => {
    setView("attach");
  };

  const handleSponsor = () => {
    handleShow();
  };

  const handleConfirm = () => {
    setConfirm(true);
    handleClose();
  };

  if (view === "deploy") {
    return (
      <>
        <div>
          <Container className="h-100">
            <h6>Please fill the form below to request sponsorship</h6>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Wallet Balance</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="1000"
                  onChange={e => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="NFT Market Place"
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Funding Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="400"
                  onChange={e => setAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
            <Row>
              <Button variant="danger" onClick={() => setView("")}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Row>
            <div>
              <p>{errorMessage}</p>
            </div>
          </Container>
        </div>
      </>
    );
  }

  if (view === "attach") {
    return (
      <>
        <div>
          <Container className="h-100">
            <h5>Available Balance: 1000</h5>
            <Row>
              <Col>
                <p>Project Name: {name}</p>
                <p>Project Description: {description}</p>
                <p>Equity Share: {share}</p>
                <p>Funding Amount: {amount}</p>
                <p>
                  {confirm
                    ? `This project is sponsored by you to the tone of ${amount}, congratulations`
                    : ""}
                </p>
              </Col>
            </Row>
            <Row>
              <Button variant="danger" onClick={() => setView("")}>
                Go Back
              </Button>
              <Button variant="primary" onClick={handleSponsor}>
                Sponsor
              </Button>
            </Row>
          </Container>
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title> Confirm </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to sponsor this project?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
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
        <p>What will you like to do today?</p>
        <div>
          <Button onClick={getSponsorship}>Get Sponsorship</Button>
          <p>or</p>
          <Button onClick={beASponsor}>Be a Sponsor</Button>
        </div>
        {/* <div>
          <Row>
            <Col>
              <h5 className="display-6">Request Sponsorship</h5>
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
        </div> */}
      </div>
    </>
  );
};

export default Home;
