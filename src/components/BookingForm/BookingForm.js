import React, { useState } from "react";
import "./BookingForm.css";

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const today = new Date();
  const todayLocale = today.toLocaleDateString("en-CA");
  const hour = today.getHours().toFixed(2).slice(0, 2) + ":00";
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    console.log("Selected date:", selectedDate);
    const newSelectedDate = new Date(selectedDate);
    console.log("New selected date object:", newSelectedDate);
    dispatch({
      type: "UPDATE_TIMES",
      date: newSelectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!date || !time || !guests || !occasion) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (
      date === todayLocale &&
      (time <= hour || !availableTimes.includes(time))
    ) {
      alert("Please select a valid time.");
      return;
    }
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form className="booking__form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onClick={(e) => e.currentTarget.showPicker()}
        onChange={(e) => handleDateChange(e)}
        min={todayLocale}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((timeOption) => (
          <option
            key={timeOption}
            value={timeOption}
            disabled={
              date &&
              date === todayLocale &&
              (timeOption < hour || timeOption === hour)
            }
          >
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="num-guests">Number of guests</label>
      <select
        id="num-guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
      </select>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="engagement">Engagement</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};
