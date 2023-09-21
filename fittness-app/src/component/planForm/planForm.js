import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const PlanForm = () => {
  const history = useNavigate();
  const [state, setState] = useState("");
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    country: "",
    state: "",
    image:'',
    // trainer: "",
    // type: "",
  });

  // function handleChange1(e) {
  //   setState(e.target.value)
  // }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // console.log(e.target.name,"Value",e.target.value)
  };

  const sendRequest = async () => {

    await axios
      .post("http://localhost:5000/admin", {
        fname: String(inputs.fname), //due to string validation occure every time
        lname: String(inputs.lname),
        email: String(inputs.email),
        address: String(inputs.address),
        country: String(inputs.country),
        state: String(inputs.state),
        myFile:(inputs.image,inputs.image.name)
        
        // trainer: String(inputs.trainer),
        // type: String(inputs.type),
      })
      .then(() => console.log("--",inputs.image,"--",inputs.image.name));
  };

const imageUpload = (event)=>{ 
  setInputs({...inputs,image:event.target.files[0]})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/submitted"));
  };

  return (
    <div style={{marginTop : "150px"}}>
    <div
      style={{
        width: "50%",
        margin: "auto",
        backgroundColor: "#ccc",
        padding: "2% 3%",
        borderRadius: "12px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h1>Membership Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={inputs.fname}
            onChange={handleChange}
            type="text"
            placeholder="Enter first name"
            name="fname"
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={inputs.lname}
            onChange={handleChange}
            type="text"
            placeholder="Enter last name"
            name="lname"
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={inputs.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            name="email"
          />

          <Form.Label>Home Address</Form.Label>
          <Form.Control
            value={inputs.address}
            onChange={handleChange}
            type="text"
            placeholder="Enter address"
            name="address"
          />

          <Form.Label>Country</Form.Label>
          <Form.Select
            value={inputs.country}
            onChange={handleChange}
            className="mb-3"
            aria-label="Default select example"
            name="country"
            // value={state}
            // onChange={handleChange1}
          >
            <option>Select Country</option>
            <option value="pakistan">Pakistan</option>
            <option value="usa">USA</option>
          </Form.Select>

          <Form.Label>State</Form.Label>
          <Form.Select
            value={inputs.state}
            onChange={handleChange}
            className="mb-3"
            aria-label="Default select example"
            name="state"
          >
            <option>Select State</option>
            {/* {state === "1" ? ( */}
            {/* <> */}
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Balochistan">Balochistan</option>
            <option value="KPK">KPK</option>
            {/* </> */}
            {/* ) : ( */}
            {/* <> */}
            <option value="Alaska">Alasaka</option>
            <option value="Florida">Florida</option>
            <option value="Sen Fransisco">Sen Fransisco</option>
            <option value="Sen Andreas">Sen Andreas</option>
            <option value="California">California</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            {/* </> */}
            {/* )} */}
          </Form.Select>

          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            onChange={imageUpload}
            type="file"
            // placeholder="Enter address"
            name="myFile"
          />

          {/* <Form.Label>Do you want to require a personal trainer?</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                value={inputs.trainer}
                onChange={handleChange}
                inline
                label="Yes"
                name="trainer"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                value={inputs.trainer}
                onChange={handleChange}
                inline
                label="No"
                name="trainer"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}

          <Form.Label>Plan Type?</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                value={inputs.type}
                onChange={handleChange}
                inline
                label="Basic Plan"
                name="type"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                value={inputs.type}
                onChange={handleChange}
                inline
                label="Premium Plan"
                name="type"
                type={type}
                id={`inline-${type}-2`}
              />

              <Form.Check
                value={inputs.type}
                onChange={handleChange}
                inline
                label="Pro Plan"
                name="type"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))} */}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "30%", marginLeft: "420px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default PlanForm;
