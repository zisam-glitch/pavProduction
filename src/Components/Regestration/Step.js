import React from 'react'
import { BsPatchCheck } from "react-icons/bs";

const Step = ({ step, title, active, subtitle }) => {
  return (
    <div className='Step'>
      <div className={active ? "stepNumber active" : "stepNumber"}>
        <BsPatchCheck/>
      </div>
      <div className={active ? "stepInfo actives" : "stepInfo"}>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}

export default Step