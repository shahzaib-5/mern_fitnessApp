import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ".//Deleted.css";
const Deleted = () => {
  return (
    <div className='delete'>
      <h1>Record Deleted SuccessFully</h1>
      <Button className='back'>
      <Link to="/admin" style={{textDecoration : 'none',color : "white"}}>Back TO Admin</Link>
        </Button>
    </div>
  )
}

export default Deleted
