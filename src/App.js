import React from 'react'
import "./styles/Global.css"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Headerfooter/Header';
import Nav from './Headerfooter/Nav';
import MobileHeader from './Headerfooter/MobileHeader'
import CardDetail from './Pages/CardDetail';
import Form from './Pages/Form';
import PayType from './Pages/PayType';
import VarifyOTP from './Pages/VarifyOTP';
import Cardinfo from './Pages/Cardinfo';
import Footer from './Headerfooter/Footer';
import Process from './Pages/Process';
import Error from './Pages/Error'

const App = () => {
  return (<>
   <BrowserRouter>
      <AppContent />
    </BrowserRouter>
</>
  )
}


function AppContent() {
   
    return (
      <>
         
      {/* <Header/> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={ <CardDetail/>}/>
          <Route exact path='/check-out' element={<Form/>} />
          <Route exact path='/payment-type' element={<PayType/>} />
          <Route exact path='/varify' element={<VarifyOTP/>} />
          <Route exact path='/cardinfo' element={<Cardinfo/>}/>
          <Route exact path='/process' element={<Process/>}/>         
          <Route  path='*' element={<Error/>}/>
        </Routes>
        {/* <Footer/> */}
      </>
    );
  }


export default App;