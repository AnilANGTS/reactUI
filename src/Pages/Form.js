import React, { useRef, useState } from "react";
import Nav from '../Headerfooter/Nav'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Headerfooter/Footer';

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ogprice } = location.state || {};
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    form_mobile: '',
    form_pincode: '',
    form_city: '',
    form_street: '',
    form_Landmark: '',
    form_Area:''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Full Name is required';
    }

    if (!formData.form_mobile) {
      newErrors.form_mobile = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.form_mobile)) {
      newErrors.form_mobile = 'Invalid mobile number. Must be 10 digits and start with 6-9';
    }

    if (!formData.form_pincode) {
      newErrors.form_pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.form_pincode)) {
      newErrors.form_pincode = 'Invalid PIN code. Must be 6 digits';
    }

    if (!formData.form_city.trim()) {
      newErrors.form_city = 'City is required';
    }

    if (!formData.form_street.trim()) {
      newErrors.form_street = 'Street is required';
    }

    if (!formData.form_Landmark.trim()) {
      newErrors.form_Landmark = 'Landmark is required';
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }else{
      navigate('/payment-type',{ state: { ogprice } });
    }

  };

  return (
    <>
      {/* ========================= contact Form start =========================*/}
    <Nav/>
        <div className='container formbg'>
            <div className='row '>
             
                <div className='section-title mb-5 mt-2'>
                  <h3 className='sub-title mb-4' style={{fontWeight:"bold",}}>Add a new address</h3>
                  
                  <form ref={form} onSubmit={sendEmail}>
                    <div className='row'>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          {/* <label className="text-black d-flex justify-content-start">Country</label> */}
                          <select className="form-select" aria-label="Default select example">
                             <option selected>India</option>                      
                           </select>
                          </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Full Name</label>
                          <input 
                            type='text' 
                            name="from_name"  
                            value={formData.from_name}
                            onChange={handleChange}
                          /> 
                          {errors.from_name && <span className="error-text">{errors.from_name}</span>}
                       </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Mobile Number</label>
                          <div className="PhoneInputfield">
                            {/* <PhoneInput className='phone-input-container style-border'  name="form_mobile"  
                              country={'us'}  value={formData.form_mobile}  onChange={handlePhoneChange}  /> */}
                             <input 
                            type='text' 
                            name="form_mobile" 
                            placeholder="10 digit mobile number without prefixes"
                            value={formData.form_mobile}
                            onChange={handleChange}
                          />
                            {errors.form_mobile && <span className="error-text">{errors.form_mobile}</span>}
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border inputnumber'>
                          <label className="text-black d-flex justify-content-start">Pincode </label>
                          <input 
                            type='text' 
                            name="form_pincode" 
                            placeholder="6 digit [0-9] PIN code"
                            value={formData.form_pincode}
                            onChange={handleChange}
                          />
                           {errors.form_pincode && <span className="error-text">{errors.form_pincode}</span>}
                        </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Flat, House no. , Building, Company, Apartment</label>
                          <input 
                            type='text' 
                            name="form_street" 
                            value={formData.form_street}
                            onChange={handleChange}
                          />
                        {errors.form_street && <span className="error-text">{errors.form_street}</span>}
                     </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Area ,Street, Sector ,Village</label>
                          <input 
                            type='text' 
                            name="form_Area" 
                            value={formData.form_Area}
                            onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Landmark</label>
                          <input 
                            type='text' 
                            name="form_Landmark" 
                            placeholder="E.g. near Apollo hospital"
                            value={formData.form_Landmark}
                            onChange={handleChange}
                          />
                          {errors.form_Landmark && <span className="error-text">{errors.form_Landmark}</span>}
                        </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">Town / City</label>
                          <input 
                            type='text' 
                            name="form_city" 
                            value={formData.form_city}
                            onChange={handleChange}
                          />
                          {errors.form_city && <span className="error-text">{errors.form_city}</span>}
                        </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start">State</label>
                          <select
                          className="form-select"
                          aria-label="Expiry Year"
                           name="expiryYear"
                           value={formData.expiryYear}
                     onChange={handleChange}
                  >
            {["select","Andhra Pradesh", "Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
              "Gujarat","Haryana"," Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
              "Maharashtra","Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
               "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh"].map(state => (
             <option key={state} value={state}>
                  {state}
              </option>
                 ))}
              </select>
                 </div>
                     
                      
        <div className='p-2 ps-0 d-flex align-items-center'>
        <input  type="checkbox"
              name="cardType"
              value="Credit Card"
              checked={formData.cardType === 'Credit Card'}
              onChange={handleChange}
              className='small-checkbox'/>
        <h6 className='ms-2'>Make this my default address</h6>
      </div>

                 {/* From field End */}
                  <div className="container mt-3">
                    <h4>Add delivery instructions</h4>
                    <p>Preferences are used to plan your delivery.<br/>However, Shipments can sometimes arrives early or later than planned</p>
                  </div>

                  <div className='col-12 col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <label className="text-black d-flex justify-content-start mb-2">Address Type</label>
                          <select
                          className="form-select"
                          aria-label="Expiry Year"
                           name="expiryYear"
                           value={formData.expiryYear}
                     onChange={handleChange}
                  >
            {["select an address type","Home (7am-9pm Delivery)","Office/commercial (10am-6pm Delivery)"].map(address => (
             <option key={address} value={address}>
                  {address}
              </option>
                 ))}
              </select>
                 </div>
                 </div>                     

      </div>
                      <div className='col-12'>
                      <button className='btn btn-warning d-block w-100 pt-2 pb-2' type="submit" value="send">Use this Address</button>
                           </div>
                    </div>
                  </form>
                </div>
              </div>
              </div>
          <Footer/>

           
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default Form;
