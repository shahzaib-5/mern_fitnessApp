import React from 'react'
import { useState } from 'react'
import './BMI.css'
const BMI = () => {

    const[weight,setWeight] = useState(0)
    const[height,setheight] = useState(0)
    const[bmi,setBmi] = useState('')
    const[message,setMessage] = useState("")
    let imgSrc = ''

    let calcBmi = (event) =>{
        event.preventDefault()
        if(weight ===0 || height ===0){
        alert("Please Enter The Correct Values of Weight and Height ")
    }else {
        let bmi= (weight/(height * height)*703)
        setBmi(bmi.toFixed(4))

        if(bmi < 25){
            setMessage("you are under weight")
        }else if(bmi >=25 && bmi < 30){
            setMessage("you are healthy Weight")
        }else if(bmi > 30){
            setMessage("You are over Weight")
        }else {
            setMessage("Invlaid Data Entered")
        }
    }
    }

    let reload = ()=>{
        window.location.reload()
    }
  return (
    <div className='mainbmi'>
    <div className='bmi-container'>
      <div className="container">
        <h2 className='center'>BMI CALCULATOR</h2>
        <form action="" onSubmit={calcBmi}>
            <div className='field'>
                <label htmlFor="">Weight (lbs)</label>
                <input type="text" value={weight} onChange = {(event) => setWeight(event.target.value)}/>
            </div>

            <div className='field'>
                <label htmlFor="">Height (inches)</label>
                <input type="text" value={height} onChange = {(event) => setheight(event.target.value)}/>
            </div>
            <div className='mybtn'>
                <button className="button" onClick = {"Please Enter The Correct Values of Weight and Height "} type='submit'>Submit</button>
                <button className="button btn-outLine" onClick = {reload} type='submit'>Reload</button>
            </div>
            
        </form>
        <div className='center'>
                <h3>
                    Your BMI is : {bmi}
                    
                </h3>
                <p>{message}</p>
            </div>
            <div className="img-container">
                <img src={imgSrc} alt="" />
            </div>
      </div>
    </div>
    </div>
  )
}

export default BMI
