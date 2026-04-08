import { BookingForm } from "../../components/BookingForm/BookingForm";
import "./Booking.css";

export default function Booking() {
  return (
    <section className="booking">
      <div className="container booking__inner">
        <h1>Reserve a table</h1>
        <BookingForm />
      </div>
    </section>
  );
}
