import { BookingForm } from "../../components/BookingForm/BookingForm";
import "./Booking.css";

export default function Booking({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking">
      <div className="container booking__inner">
        <h1>Reserve a table</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </div>
    </section>
  );
}
