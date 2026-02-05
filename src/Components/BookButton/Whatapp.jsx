import { FaWhatsapp } from "react-icons/fa";

const BookingButton = () => {
  return (
    <div className="st-hero-btn-group d-flex justify-content-center">
      <a
        target="_blank"
        href="https://wa.me/+447311871456"
        className="whasapp pulse"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default BookingButton;
