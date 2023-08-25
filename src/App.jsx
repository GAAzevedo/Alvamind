import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';

const App = () => {
  
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
    AOS.refresh();
    }, []);
  return (
    <>
        <Header/>

        <Outlet/>



      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App