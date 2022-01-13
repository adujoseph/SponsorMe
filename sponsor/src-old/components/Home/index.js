import React, { useEffect, useState } from "react";
import * as backend from "../../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Error from "../../assets/winner.png";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);


const { standardUnit } = reach;
console.log(standardUnit, "starter", reach);

const Home = () => {
  const [balProj, setBalProj] = useState();
  const [sponsorBal, setSponsorBal] = useState();
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [share, setShare] = useState();
  const [description, setDescription] = useState("");
  const [contractInfo, setContractInfo] = useState("");
  const [view, setView] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [contractId, setContractId] = useState("");

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
    console.log(name, description, amount, share);
    //deploy with payload
    deployProject();
    // handleClose();
  };

  const initials = async () => {
    suStr = standardUnit;
    toAU = su => reach.parseCurrency(su);
    toSU = au => reach.formatCurrency(au, 4);
    iBalance = toAU(1000);

    const acc = await reach.getDefaultAccount();
    const fundIt = await reach.parseCurrency(1000);
    showBalance(acc);
    // const balAtomic = await reach.balanceOf(acc);
    // const bal = reach.formatCurrency(balAtomic, 4);
    // console.log("trying to get bal: ", bal);
    try {
      const faucet = await reach.getFaucet();
      setView("FundAccount");
    } catch (e) {
      setView("");
    }
  };
  const showBalance = async acc => {
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    setBalProj(bal);
    // console.log(acc);
    // console.log(
    //   `Your balance is ${toSU(await reach.balanceOf(acc))} ${suStr}.`
    // );
    // return toSU(await reach.balanceOf(acc));
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
      setView("done");
    },
  });

  const deployProject = async () => {
    const projectOwnerInteract = {
      ...commonInteract("projectOwner"),
      projectInfo: {
        projectName: name,
        projectDetails: description,
        fundraisingGoal: amount,
        contractDuration: 200,
        share: share,
      },
      reportReady: async () => {
        const info = JSON.stringify(await ctc.getInfo());
        console.log(`Contract info: ${info}`);
        setContractInfo(info);
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

    const acc = await reach.getDefaultAccount();
    if (await reach.canFundFromFaucet()) {
      reach.fundFromFaucet(acc, 100000000);
    }
    const ctc = acc.contract(backend);
    await backend.ProjectOwner(ctc, projectOwnerInteract);
    await showBalance(acc);
    setView("pending");
  };

  const attachProject = async () => {
    const sponsorInteract = {
      ...commonInteract("sponsor"),
      sponsor: confirm,
    };

    const acc = await reach.getDefaultAccount();
    if (await reach.canFundFromFaucet()) {
      reach.fundFromFaucet(acc, 100000000);
    }
    const ctc = acc.contract(backend, Number(contractInfo));

    await backend.Sponsor(ctc, sponsorInteract);
    // await showBalance("seller", sellerAcc);

    // await ctc.p.Sponsor(sponsorInteract);
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
    attachProject();
  };

  if (view === "pending") {
    <>
      <h3>Contract {contractInfo} is pending</h3>
    </>;
  }
  if (view === "deploy") {
    return (
      <>
        <div>
          <Container className="h-100">
            <Row>
              <Col xs={2}></Col>
              <Col xs={8}>
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
                      defaultValue={balProj}
                      disabled={true}
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
              </Col>
              <Col xs={2}></Col>
            </Row>
            {contractInfo ? (
              <h6>
                Your contract with ID: {contractInfo ? contractInfo : ""} has
                been deployed and await response from a sponsor
              </h6>
            ) : (
              <></>
            )}
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
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <div className="home--attach">
                  <h5>Available Balance: {balProj}</h5>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Contract ID: </Form.Label>
                          <Form.Control
                            type="enter contract id"
                            placeholder="100"
                            onChange={e => setContractId(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                      <p>
                        {confirm
                          ? `This project with contract ID: ${contractId} is sponsored by you, congratulations!`
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
                </div>
              </Col>
              <Col xs={4}></Col>
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
              <Form.Control type="email" placeholder="NFT Market Place" />
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
        <Row>
          <Col>
            <div className="home--jumbo">
              <h1>Welcome to Sponsor Me</h1>
              <div className="home--action">
                <h5 className="home--action">
                  What will you like to do today?
                </h5>
                <div>
                  <Row>
                    <Button onClick={getSponsorship}>Get Sponsorship</Button>{" "}
                    <span className="home--divider">| </span>
                    <Button onClick={beASponsor}>Be a Sponsor</Button>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <Image src={Error} fluid />
            </div>
          </Col>
        </Row>

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
