import React from "react";
import "./AdminPanel.css";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = (props) => {


  const history = useNavigate();
  const { _id, fname, lname, email, address, country, state } = props.plan;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/admin/${_id}`)
      .then((res) => res.data)
      .then(()=>history("/deleted"))
      /*
      .then(() => history("/admin")); 
      */
  };
  return (
    <div className="adminmain">
    <div className="mycard10">
      <h4>First Name: {fname}</h4>
      <h4>Last Name: {lname}</h4>
      <h4>Email: {email}</h4>
      <h4>Address: {address}</h4>
      <h4>Country: {country}</h4>
      <h4>State: {state}</h4>
      {/* <h4>Personal Trainer? {trainer}</h4>
      <h4>Plan Type: {type}</h4> */}
      
      <Link to={`/admin/${_id}`}>
<Button> Update </Button>
</Link>

{/* <Button
        variant="contained"
        LinkComponent={Link}
        to={`/admin/${_id}`}
        sx={{ mt: "auto" }}
      >
        Update
      </Button> */}
      
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button>
    </div>
    </div>
  );
};

export default Admin;
