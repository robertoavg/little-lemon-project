import React, { useState } from "react";
import "./BookingForm.css";

export const BookingForm = () => {
  const today = new Date();
  const todayLocale = today.toLocaleDateString("en-CA");
  const hour = today.getHours().toFixed(2).slice(0, 2) + ":00";
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const allowedTimes = [
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const handleSubmit = () => {
    console.log(date === todayLocale);
    console.log(date);
    console.log(todayLocale);
    console.log(time);
    console.log(hour);
    console.log(time <= hour);
    if (!date || !time || !guests || !occasion) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    if (
      date === todayLocale &&
      (time <= hour || !allowedTimes.includes(time))
    ) {
      alert("Please select a valid time.");
      return;
    } else {
      alert(`Booking Details:
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}`);
    }
  };

  return (
    <form
      className="booking__form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onClick={(e) => e.currentTarget.showPicker()}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {allowedTimes.map((timeOption) => (
          <option
            key={timeOption}
            value={timeOption}
            disabled={timeOption < hour || timeOption === hour}
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
