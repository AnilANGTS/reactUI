import React from 'react'
import '../styles/Global.css'
import Nav from '../Headerfooter/Nav'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Headerfooter/Footer';

const PayType = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ogprice } = location.state || {};
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/varify',{ state: { ogprice } });
};
  return (
    <>
    <Nav/>
   
    <div className='container pt-2 m-2'>
     <div className='section-title '>
        <h3 className='sub-title' style={{fontWeight:"bold" ,}}>select a payment method</h3>
     </div>
     <form onSubmit={handleSubmit}>
      <div className='row checkbox-box d-flex align-items-center mt-3 mb-1'>
        <div className='col-3 d-flex justify-content-center'>
        <input  type="radio" name="paymentType" className='small-checkbox' /></div>
        <div className='col-9'>
        <img src='assets/HomeImages/bank.jpeg' width="80%" className='mb-2'/>
        <img src='assets/HomeImages/bank1.png' width="100%"/>
        <h5>Add Debit / Credit  card </h5>
        <p>you can save your cards as per new RBI Guidline.<a href='' style={{textDecoration:"none"}}>Learn More..</a> </p>
        </div>
      </div>

      <div className='row checkbox-box d-flex align-items-center mb-1'>
        <div className='col-3 d-flex justify-content-center  '>
        <input disabled type="radio" name="paymentType" className='small-checkbox'/></div>
        <div className='col-9'>
        <h5>EMI unavailable why? </h5>
        </div>
      </div>


      <div className='row checkbox-box d-flex align-items-center'>
        <div className='col-3 d-flex justify-content-center'>
        <input disabled type="radio" name="paymentType" className='small-checkbox'/></div>
        <div className='col-9'>
        <h5>Pay on  Delivery</h5>
        </div>
      </div>
     
      <div className='col-12 mt-5'>
      <button className='btn btn-warning d-block w-100 pt-2 pb-2' type="submit" value="send">Submit</button>
      </div>
      </form>
    </div>
    <div>
    <img src="assets/HomeImages/bottom.png" width="100%" className='mt-5 mb-4' height="auto"/>
    </div>
    <Footer/>
    </>
  )
}

export default PayType