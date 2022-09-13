import React, { useEffect, useState } from "react";
import "./additionSkills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import bearImage from "./assets/bearReading.png";

export default function AdditionSkills() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  // Input tracking on state
  const [number, setNumber] = useState("");

  // Function to generate a random number for the expression
  const randomNumber = () => {
    return Math.trunc(Math.random() * 999) + 1;
  };


  // Executes the randomNumber function to set new numbers after it's been summited and also clear the input box
  const randomizeAfterSubmit = () => {
    setNumber1(randomNumber());
    setNumber2(randomNumber());
    setNumber("");
  };

  // Handles input's changes
  const onChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  // Gets the constructed URL, compares the input to the response from the API & alerts the right/wrong message
  const fetchExpression = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data === parseInt(number)) {
          alert("Right answer!");
          // setScore(score + 1);
          randomizeAfterSubmit();
        } else {
          alert("Wrong answer!");
          // setScore(score - 1);
          randomizeAfterSubmit();
        }
        return;
      })
      .catch((error) => console.log(error));
  };

  // Constructing URL, check if number is integer, if it is does the API call and if its not alerts the user
  const handleClickSubmit = () => {
    if (number % 1 === 0) {
      const initialURL = `http://api.mathjs.org/v4/?expr=${number1}%2B${number2}`;
      fetchExpression(initialURL);
    } else {
      alert("Only integers are allowed.");
      setNumber("");
    }
  };

  // So new numbers don't re-generate while typing
  useEffect(() => {
    setNumber1(randomNumber());
    setNumber2(randomNumber());
  }, []);

  return (
    <Container className="main-container">
      <Row>
        <Col style={{ marginTop: "12.5%" }}>
          <div className="title-container">
            <h2>🧮 Let's test your addition skills! 🧮</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="math-expression">
            <h2>
              {" "}
              {number1} + {number2} ={" "}
            </h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="answer-input">
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Answer:
              </InputGroup.Text>
              <Form.Control
                type="number"
                onChange={onChangeHandler}
                value={number}
                placeholder="Your answer here, integers only!"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
              />
            </InputGroup>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="submit-btn">
            <Button onClick={handleClickSubmit} variant="outline-success">
              Submit answer
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <img
            className="bear-image"
            src={bearImage}
            style={{ width: "20%", height: "60.5%" }}
            alt= ""
          />
        </Col>
      </Row>
    </Container>
  );
}
