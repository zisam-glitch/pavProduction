import React from 'react';

const Brand = ({ img, bg }) => {
  return (
    <div className={`st-logo-carousel st-style1 `}>
      
      <img className='w-96' src={img} alt={img} />
    </div>
  )
}

export default Brand;
