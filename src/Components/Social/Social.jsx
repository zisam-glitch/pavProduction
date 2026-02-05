import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <ul className="st-social-btn st-style1 st-mp0">
      <li>
        <Link to='https://www.facebook.com/profile.php?id=61566617083306&mibextid=ZbWKwL' target='_blank'>
          <Icon icon="fa6-brands:square-facebook" />
        </Link>
      </li>
      <li>
        <Link to='https://www.instagram.com/pavdentalofficial?igsh=MWM2MXV5cXJqcHB4MQ==' target='_blank'>
          <Icon icon="fa6-brands:instagram" />
        </Link>
      </li>
      <li>
        <Link to='https://www.tiktok.com/@pavdentalofficial?_t=8n1iWWGrdjk&_r=1' target='_blank'>
          <Icon icon="fa6-brands:tiktok" />
        </Link>
      </li>
      <li>
        <Link to='https://www.youtube.com/@PavDental' target='_blank'>
          <Icon icon="fa6-brands:youtube" />
        </Link>
      </li>
    </ul>
  )
}

export default Social;
