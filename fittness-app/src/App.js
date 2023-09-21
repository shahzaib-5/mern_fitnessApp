import "./App.css";
import Main from "./component/Main/Main";
import Program from "./component/Program/Program";
import Header from "./component/Header/Header";
import AboutUs from "./component/WhyUs/WhyUs";
import Plan from "./component/Plan/Plan";
import BMI from "./component/BMI/BMI";
import LOGIN from "./component/login/login";
import Signup from "./component/signup/Signup";
import PlanForm from "./component/planForm/planForm"
import AdminPanel from "./component/adminPanel/AdminPanel";
import PlanDetail from "./component/adminPanel/PlanDetail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Submitted from "./component/Submitted/Submitted";
import Deleted from "./component/Deleted/Deleted";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=>{
    axios.get(`http://localhost:5000/admin`)
  })
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            {/* <Route path='/header' element={<Header/>}></Route> */}
            <Route path="/" element={<Main />}></Route>
            <Route path="/program" element={<Program />}></Route>
            <Route path="/whyUs" element={<AboutUs />}></Route>
            <Route path="/plan" element={<Plan />}></Route>
            <Route path="/bmi" element={<BMI />}></Route>
            <Route path="/login" element={<LOGIN />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/planform" element={<PlanForm />}></Route>

            <Route path="/admin" element={<AdminPanel />}></Route>
            <Route path="/admin/:id" element={<PlanDetail />}></Route>
            <Route path="/submitted" element={<Submitted />}></Route>
            <Route path="/deleted" element={<Deleted />}></Route>
            
          </Routes>
          
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
