import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const URL = "http://localhost:5000/user/signup";
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(URL, {
        username: data.username,
        password: data.password,
        email: data.email,
      })
      .then((res) => {
        localStorage.setItem("Token",res.data.token)
        window.location.reload();
      }) 
      history("/")
      
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div
      style={{
        width: "25%",
        margin: "auto",
        backgroundColor: "#ccc",
        padding: "2% 3%",
        borderRadius: "12px",
        marginTop: "170px",
      }}
    >
      <Form onSubmit={(e) => submit(e)}>
        <h1>SignUp Now</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handle(e)}
            id="username"
            value={data.username}
            placeholder="Username"
          />

          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            placeholder="Passwword"
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            placeholder="Email"
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          variant="primary"
          type="submit"
          style={{ width: "fit-content", marginLeft: "160px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
