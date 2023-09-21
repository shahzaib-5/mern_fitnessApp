import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../adminPanel/PlanDetail.css"

const PlanDetail = () => {
//   const id = useParams().id;
//   console.log(id);
//   useEffect(() => {
//     const fetchHandler = async () => {
//       await axios
//         .get(`http://localhost:5000/admin/${id}`)
//         .then((res) => console.log(res.data));
//     };
//     fetchHandler();
//   }, [id]);


const [inputs, setInputs] = useState({})
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/admin/${id}`)
        .then((res) => res.data).then(data => setInputs(data.plan));
    };
    fetchHandler()
  }, [id]); //whever id will change from url it fetch same id

  const sendRequest = async() =>{
    await axios.put(`http://localhost:5000/admin/${id}`,{
        fname: String(inputs.fname), //due to string validation occure every time
        lname: String(inputs.lname),
        email: String(inputs.email),
        address: String(inputs.address),
        country: String(inputs.country),
        state: String(inputs.state),
    }).then(res => res.data)
}

  const handleSubmit = (e)=>{
    e.preventDefault(); //reload page    
    sendRequest().then(()=>history("/admin"))
  }

  const handleChange = (e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  return(
     <div className="detail">
    {inputs && (<Form onSubmit={handleSubmit}>
        <h1>Update Membership Form</h1>
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
          style={{ width: "auto", marginLeft: "420px" }}
        >
          Update
        </Button>
      </Form>)
      }
  </div>
)};


export default PlanDetail;
