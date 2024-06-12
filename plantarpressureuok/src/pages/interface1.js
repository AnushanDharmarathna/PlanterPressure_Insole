import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Interface1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/interface2");
  };
  const handleClick2 = () => {
    navigate("/interface3");
  };
  return (
    <div className="maindiv">
      <Header />
      <div className="maindiv1">
        <div className="maindiv2">
          <div>
            <p className="font1">INSOLE 1.0v</p>
            <div className="maindiv3">
              <button className="button1" onClick={handleClick}>
                FOOT TYPE
              </button>
              <button className="button1" onClick={handleClick2}>
                SPORT MODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface1;
