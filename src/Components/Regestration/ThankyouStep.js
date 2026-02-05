import React from 'react'
import thankyou from '../../assets/imges/icon-thank-you.svg'

const ThankyouStep = () => {
  return (
    <div className='thanks'>
        <img src={thankyou} alt="Subscription confirmed"/>
        <h2>Thank you!</h2>
        <p>Thanks for registering. If you ever need support, please feel free to email us at hello@pavdental.com</p>
        <br/>
        <a href='/'> <h2>Back to Home</h2></a>
    </div>
  )
}

export default ThankyouStep