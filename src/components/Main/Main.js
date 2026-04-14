import { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Booking/Booking";
import Confirmation from "../../pages/Confirmation/Confirmation";
import { fetchAPI, submitAPI } from "../../api/api";

import "./Main.css";

export function initializeTimes() {
  const today = new Date();
  const seededTimes = fetchAPI(today);
  return seededTimes;
}

export function updateTimes(state, action) {
  console.log("Reducer called with action:", action);
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
}

const Main = () => {
  const navigate = useNavigate();
  const [confirmationData, setConfirmationData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  console.log("Available times in Main component:", availableTimes);

  const submitForm = (formData) => {
    const { date, time, guests, occasion } = formData;
    const success = submitAPI(formData);
    if (success) {
      setConfirmationData({ date, time, guests, occasion });
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<Confirmation data={confirmationData} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
