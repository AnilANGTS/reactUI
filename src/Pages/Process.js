    import React from 'react'
    import Nav from '../Headerfooter/Nav'
    import FadeLoader from 'react-spinners/FadeLoader';

    const Process = () => {
      return (<>
        <Nav/>
        <div className='container formbg m-0 p-0 ps-2 pe-2 pt-3'>
       
        <h3 className='bold text-center'>Please wait while we are processing payment</h3>
       
        <div className='d-flex justify-content-center mt-5 mb-5' >
    <FadeLoader />
    </div>
    
    <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-4'>
                    <img src='assets/HomeImages/12.jpg' width="100%" className=''></img>
                    <p className='text-center'>Authentic Products</p>
                </div>
                
                <div className='col-4'>
                    <img src='assets/HomeImages/12.jpg' width="100%" className=''></img>
                    <p className='text-center'>Secure Payment</p>
                </div>
                
                <div className='col-4'>
                    <img src='assets/HomeImages/12.jpg' width="100%" className=''></img>
                    <p className='text-center'>Easy Return</p>
                </div>
            </div>
          </div>
    
          
        <div className='container-fluid '>
            <div className='row mt-5 pb-4'>
                <div className='col-12'>
                    <img src='/assets/HomeImages/checkout.png' width="100%" ></img>
                </div>
            </div>
            </div>
    
        <div className='container mt-3 mb-0'>
            <div className='row'>
                <div className='col-4'>
                <p>Term & Use</p>
                </div>
                
                <div className='col-5'>
                <p>Privacy Notice</p>
                </div>
                
                <div className='col-3'>
                <p>Help</p>
                </div>
            </div>
            </div>
    
           <p className='text-center pt-0 pb-5'>&copy; 1996-2022. Amazon.com, inc. or its affiliates</p>
        
    </div>
    </>
      )
    }
    
    
export default Process