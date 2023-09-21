import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Admin from "./Admin";
import ".//AdminPanel.css";
const URL = "http://localhost:5000/admin";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const AdminPanel = () => {
  const [plans, setPlans] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setPlans(data.plans));
  }, []);
  console.log(plans);

  return (
    <div style={{ height: "1000vh" }}>
      <ul className="ul1">
        {plans &&
          plans.map((plan, i) => (
            <div className="myplan10" key={i}>
              <Admin plan={plan} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
