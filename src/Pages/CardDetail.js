import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { useParams, useNavigate } from 'react-router-dom';
import { homedata } from '../Data/homedata';
import "../styles/Global.css";
import Nav from '../Headerfooter/Nav';

const CardDetail = () => {
   const { id } = useParams();
   const card = homedata.find((item) => item.id === parseInt(id));

   const navigate = useNavigate();

   if (!card) {
      return <div>Product Not Found</div>;
   }

   // Handle submit on button click
   const handleSubmit = (e) => {
      e.preventDefault();
      const ogprice = {
         price: card.price,
      };
      navigate('/check-out', { state: { ogprice } });
   };

   return (
      <>
         <Nav />
         <div className='container-fluid p-0 m-0 pe-2 pb-5'>
            <div className='row mt-0'>
               <div className='col-12 col-lg-6'>
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        {card.imgsrcs.map((src, ind) => (
                           <div key={ind} className={`carousel-item ${ind === 0 ? 'active' : ''}`}>
                              <img className="d-block w-100" src={src} alt={`Slide ${ind + 1}`} />
                           </div>
                        ))}
                     </div>
                     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only text-dark"></span>
                     </a>
                     <a className="carousel-control-next text-dark" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only text-dark"></span>
                     </a>
                  </div>
                  {/* Carousel end */}
                  {/* Title and MRP Section */}
               </div>
               <div className='col-12 col-lg-6 ps-4 pe-2'>
                  <h5>{card.title}</h5>
                  <p className='cardtitle'>{`₹ ${card.price}`}</p>
                  <h4 className="mrp">MRP :
                     <span className="over-through text-decoration-line-through ">{`₹ ${card.originalPrice}`}</span>
                     <span className="text-danger ps-2 discount"> Save {` ${card.save}`}</span>
                  </h4>
                  <div className='text-start mb-5'>
                     <img src="/assets/HomeImages/prime.png" width="30%" alt='Prime' />
                  </div>
                  {/* About this Item Section */}
                  <h6 className='mt-5'>About this item:- </h6>
                  <ul>
                     {card.description.map((desc, id) => (
                        <li key={id}>{desc}</li>
                     ))}
                  </ul>
                  {/* Button Section */}
                  <div className='m-0 p-0 fixed-bottom'>
                     <div className='row'>
                        <div className="col-6 col-lg-2 m-0 p-0">
                           <a href="#" className="btn btn-light d-block mx-auto text-center">Add To Cart</a>
                        </div>
                        <div className="col-6 col-lg-2 p-0 m-0">
                           <button onClick={handleSubmit} className="btn btn-warning w-100   d-block mx-auto text-center">Buy Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CardDetail;
