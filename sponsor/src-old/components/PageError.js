import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Error from "../assets/404.png";

const PageError = () => {
  return (
    <div>
      <Container className="h-100">
        <Row>
          <Col xs={2} />
          <Col xs={8} className="mt-4">
            <h1 className="display-4">Looks like you are lost...</h1>
            <hr style={{ width: "10rem" }} />
            <p className="text-left mt-3">
              The resource you are looking for is most likely no longer
              available <a href="/">Return to Homepage</a>
            </p>

            <Image src={Error} fluid />
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
  );
};

export default PageError;
