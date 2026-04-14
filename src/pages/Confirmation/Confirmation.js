import "./Confirmation.css";

export const Confirmation = (props) => {
  return (
    <section className="confirmation">
      <h1>Booking confirmed</h1>
      <div className="separator">
        <p>Your reservation has been successfully submitted.</p>
      </div>
      <div className="details">
        <p>{`Booking Details: Date: ${props.data.date}`}</p>
        <p>{`Time: ${props.data.time}`}</p>
        <p>{`Guests: ${props.data.guests}`}</p>
        <p>{`Occasion: ${props.data.occasion}`}</p>
        <p>We look forward to welcoming you at Little Lemon!</p>
      </div>
    </section>
  );
};

export default Confirmation;
