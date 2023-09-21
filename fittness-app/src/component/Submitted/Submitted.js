import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ".//Submitted.css";
const Submitted = () => {
  return (
    <div className='Submitmain'>
      <h1>Form Submitted SuccessFully</h1>
      <Button className='back'>
      <Link to="/planform" style={{textDecoration : 'none',color : "white"}}>Back</Link>
        </Button>
    </div>
  )
}

export default Submitted
