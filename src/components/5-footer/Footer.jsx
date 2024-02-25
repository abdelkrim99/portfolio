import React, { useEffect } from 'react'

import './footer.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>Footer</div>
  )
}
