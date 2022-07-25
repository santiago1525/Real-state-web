import React, {useState} from 'react'
/* Components */
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
/* Data */
import { SliderDataTwo } from '../data/SliderData';
import { InfoDataThree } from '../data/InfoData';


const Rentals = () => {

    const  [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderDataTwo}/>
            <InfoSection {...InfoDataThree}/>
            <Footer />
        </>
  )
}

export default Rentals