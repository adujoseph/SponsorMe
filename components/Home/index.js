import React, { useEffect, useState } from "react";
import * as backend from "../../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

// import * as reach from "@reach-sh/stdlib/ALGO";

const reach = loadStdlib(process.env);
const { standardUnit } = reach;

const Home = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [share, setShare] = useState();
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

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
    alert(JSON.stringify(payload));
    //deploy with payload
    handleClose();
  };

  const initials = async () => {
    alert("Something went wrong");
    const acc = await reach.getDefaultAccount();
    alert(acc);
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
