import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { next, back } from './features/page';
import { info } from './features/user';

const NavigationButtons = () => {
  const page = useSelector((e) => e.page.value);
  const user = useSelector(e => e.user.value);
  const dispatch = useDispatch();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get all form inputs
      const formData = {};
      const formInputs = document.querySelectorAll('input, select, textarea');
      
      formInputs.forEach(input => {
        if (input.name) {
          formData[input.name] = input.value;
        }
      });

      // Merge with Redux user data
      const submissionData = {
        ...user,
        ...formData,
        timestamp: new Date().toISOString()
      };

      console.log('Submitting form data:', submissionData);

      const response = await fetch('https://formspree.io/f/xovyvveb', {
        method: 'POST',
        body: JSON.stringify(submissionData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        // Proceed to next step if submission is successful
        dispatch(next());
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please check the console for more details and try again.');
    }
  };

  const nextClick = () => {
    dispatch(info({...user, nextClick: true}));
    
    if (page === 5) {
      // On the last step, handle form submission
      return handleSubmit(new Event('submit'));
    }
    
    if (page === 0) {
      dispatch(next());
      dispatch(info({...user, nextClick: false}));
    } else {
      dispatch(next());
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className={page === 0 ? 'navigation btnRight' : 'navigation'}>
        {page !== 0 && (
          <button 
            type="button"
            className='btn1' 
            onClick={() => dispatch(back())}
          >
            Go Back
          </button>
        )}
        <button 
          className='btn2' 
          type={page === 5 ? 'submit' : 'button'}
          onClick={nextClick}
        >
          {page === 5 ? 'Submit' : 'Next Step'}
        </button>
      </div>
    </form>
  );
};

export default NavigationButtons;