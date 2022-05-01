import React, { useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState();
  

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm {" "}
          <img src={LogoTitle} alt="developer" />andu
          <br />
          web developer      
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>

    </div>
  )
}

export default Home;