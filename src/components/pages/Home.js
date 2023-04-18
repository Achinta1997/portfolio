import React, { useEffect,useRef } from 'react'
import Header from '../templetes/Header';
import Footer from '../templetes/footer';
import "./Home.scss";
import achinta from "../assets/achinta1.png";
import {init} from "ityped";


export const Home = () => {
 
  const textRef =useRef();
useEffect(()=>{
  init(textRef.current, { 
    showCursor: true,
    backDelay :1500,
     strings: ['Web developer..','Middleware Administrator'] })
},[])



  return (
    <div>
    <Header/>
    <div className='row home'>
      
      <div className='col-lg-6 col-md-12 col-sm-12'>
      
        <p className='intro'>Hi ,I am Achinta.
        I am a <span ref={textRef}></span></p>
      </div>

      {/* photo section */}
      <div className='col-lg-6 col-md-12 col-sm-12 my-image'>
        <img src={achinta} alt='image' />
      </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Home;