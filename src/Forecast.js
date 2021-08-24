import React from "react";
import "./Forecast.css";
export default function Forcast(props) {
  return (
    <div className="Forecast">
      {props.day}
      {props.value}
    </div>
  );
}
