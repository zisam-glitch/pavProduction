import React from 'react'
import Step from "./Step"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Steps = () => {
  const page = useSelector((e) => e.page.value)

  return (
    <div className='Steps'>
      <Link to="/" className="st-site-branding2">
        <img
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1723411040/PAV_LOGO_2-01_r2ecmh.png"
          alt="Logo"
        />
      </Link>

      <div className='MainSteps'>
        <Step
          step={1}
          subtitle="Please provide your personal details"
          title="Personal info"
          active={page === 0}
        />
        <Step
          step={2}
          subtitle="Please provide necessary address"
          title="Address"
          active={page === 1}
        />
        <Step
          step={3}
          subtitle="Please provide ethnic details"
          title="Additional information"
          active={page === 2}
        />
        <Step
          step={4}
          subtitle="Please provide patient health information."
          title="Patient health"
          active={page === 3}
        />
        <Step
          step={5}
          subtitle="Please provide patient questionnaire."
          title="Medical History"
          active={page === 4}
        />
 <Step
          step={6}
          subtitle="Please provide patient Dental questionnaire."
          title="Dental History"
          active={page === 5}
        />
      </div>
    </div>
  )
}

export default Steps