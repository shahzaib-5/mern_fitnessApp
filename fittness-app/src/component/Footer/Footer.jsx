import React from "react";
import { footer } from "../../data/plansData";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, discount offers sent straignt in your inbox
                every month
              </p>

              <div className="input-flex">
                <input type="email" placeholder="Email Address" />
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li className="list-hover"> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
