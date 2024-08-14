import React from 'react'

const footer = () => {
  return (
    <div className='container m-0  mb-0 bg-black '>
    <div className='row pt-3'>
      <div className='col-4'>
        <p style={{color:"#a5a2a2", cursor:"pointer", fontSize:"12px"}}>Conditions of Use</p>
      </div>

      <div className='col-4'>
        <p style={{color:"#a5a2a2", cursor:"pointer",fontSize:"12px"}}>Privacy Notice</p>
      </div>

      <div className='col-4'>
        <p style={{color:"#a5a2a2", cursor:"pointer",fontSize:"12px"}}>Interest Based Ads</p>
      </div>
    </div>
 

  <p className='text-center m-0 pb-4' style={{color:"#a5a2a2",fontSize:"12px"}} >&copy; 1996-2022. Amazon.com, inc. or its affiliates</p>

  </div>
  )
}

export default footer
