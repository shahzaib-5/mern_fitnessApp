import "./login.css"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const URL = "http://localhost:5000/user/signin";
	const [data,setData] = useState({
		email:"",
		password:""
	})

  function Submit(e){

		e.preventDefault();
		axios.post(URL, {
			email: data.email,
			password: data.password
		})	
		.then(res=>{
			console.log(res.data);
      localStorage.setItem("Token",res.data.token)
      window.location.reload();
      
		})
    history('/');
	}

  function handle(e){
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	}

    return(
      <div className="loginform">
      <div style={{width:"25%",
      margin:"auto",
      backgroundColor:"#ccc",
      padding:"2% 3%",
      borderRadius:"12px",
      // marginTop : "0px"
      }}>
        <Form onSubmit={(e) =>Submit(e)}>
          <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e) =>handle(e)} id='email' value={data.email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) =>handle(e)} id='password' value={data.password} placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" style={{width:"fit-content",marginLeft:"160px"}}>
        Submit
      </Button>
    </Form>
      </div>
      </div>
    )

}


export default Login
