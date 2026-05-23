import React from "react";
import WeatherApp from "./WeatherApp";
import CalculatorApp from "./CalculatorApp";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <WeatherApp />
      <CalculatorApp />
    </div>
  );
};

export default App;