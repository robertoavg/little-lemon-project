import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Booking/Booking";
import "./Main.css";

const seededTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function initializeTimes() {
  return seededTimes;
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return seededTimes;
    default:
      return state;
  }
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Booking availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
