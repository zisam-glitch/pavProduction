import { BsFillCalendar2CheckFill } from 'react-icons/bs';

const BookingButton = () => {
  return (
    <div className="st-hero-btn-group d-flex justify-content-center">
      <a
      target='_blank'
        href="https://pavdental.setmore.com/" 
        className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
        style={{ width: '100%', maxWidth: '300px',textAlign:"center" }} // Adjust max-width as needed
      >
        <BsFillCalendar2CheckFill /> Book Now
      </a>
    </div>
  );
};

export default BookingButton;
