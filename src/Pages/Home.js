import React, { useEffect, useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import homeData from '../Data/homeData';
import MobileHeader from '../Headerfooter/MobileHeader';
import Nav from '../Headerfooter/Nav'
import FadeLoader from 'react-spinners/FadeLoader';


const Home = () => {
  const [time, setTime] = useState(600)
    useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          return 300; 
        } else {
          return prevTime - 1; 
        }
      });
    }, 1000); 
    return () => clearInterval(timer); 
});

  return (<>  
     {/* <MobileHeader/>  */}
     <div className='mobile-tablet-only'>
      <Nav/>   
    <div className='container-fluid m-0 p-0 '> 
      {/* Home Banner   */}
      <div className='container-fluid m-0 p-0'>
        <img src="/assets/HomeImages/banner.jpeg" width="100%" height="auto" alt='Banner Image'></img>
        <img src="/assets/HomeImages/banner1.jpeg" width="100%" height="auto" alt='Banner Image'></img>
        <img src="/assets/HomeImages/banner2.png" width="100%" height="auto" alt='Banner Image'></img>
      </div>
      {/* Timer for Below  Banner  */}
      <div >
        <div className='bg-dark pb-2 row pt-2 m-0'   >
          <div className='col-7 pe-5 '>
          <h6 className='text-light text-end'> Today's Deals </h6>
          <h4 className='text-light text-end ' >
          <FaRegClock className='clock-timer ' style={{color:"#EFD0CA"}}/>  <span className='clock' >{`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}</span></h4></div>
          <div className='col-4 mt-3 '>
          <button className='btn btn-warning clock-btn'> View All</button>
          </div>
        </div>

      {/* All Products */}
      {/* Cards using Map method */}
      
        <div className="container pt-3">
      <div className="row">
        {homeData.map((card ,id) => (
          <div key={card.id} className="col-6 col-md-4 col-lg-3 mb-4 pe-2 ps-2 ">
            <div className="card">
              <img src={card.imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="title text-center title">{card.title}</h5>
                <h4 className="text-center homediscount">
                  <span className="over-through text-decoration-line-through">{card.originalPrice}</span>
                  <span className="text-danger "> {card.discount}% OFF</span>
                </h4>
                <div className='text-center'>
                <img src="/assets/HomeImages/prime.png" width="65%" alt='prime'/>
                </div>
                <h3 className="text-danger text-center">Price : {card.price}</h3>
                <a href={`/detail/${card.id}`} className="btn btn-warning d-block mx-auto text-center">BUY NOW</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='d-flex justify-content-center mt-5 mb-5' >
    <FadeLoader />
    </div>
      </div>
    </div>
    </div>
    <div className='desktop-only'>
      <div>  
        <div className='d-flex jusfity-content-center flex-column'>
        <img src='assets/HomeImages/error.jpeg' width="50%"  className='m-auto'/>
        <h4 className='text-center'>Uh Oh! Page not found!</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home;