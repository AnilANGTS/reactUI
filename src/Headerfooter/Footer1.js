import React from 'react'

const Footer1 = () => {
  return (
   <>
     {/* Bottom part */}
     <div className='container-fluid bg-light m-0 p-0 mt-5'>
        <img src='assets/HomeImages/logos.svg' width="100%"/>
        </div>

        <div className='container-fluid m-o p-0  '>
          <div className='row '>
            <div className='col-12'>
              <img src='/assets/HomeImages/otp.jpg' width="100%" alt="Checkout" />
            </div>
          </div>
        </div>

        <div className='container m-0 pt-4  mb-0 bg-light '>
    <div className='row pt-3'>
      <div className='col-4'>
        <p style={{color:"green", cursor:"pointer", fontSize:"12px"}}>Conditions of Use</p>
      </div>

      <div className='col-4'>
        <p style={{color:"green", cursor:"pointer",fontSize:"12px"}}>Privacy Notice</p>
      </div>

      <div className='col-4'>
        <p style={{color:"green", cursor:"pointer",fontSize:"12px"}}>Interest Based Ads</p>
      </div>
    </div>
    </div>

  <p className='text-center m-0 pb-4' style={{fontSize:"12px"}} >&copy; 1996-2022. Amazon.com, inc. or its affiliates</p>
     
   </>
  )
}

export default Footer1