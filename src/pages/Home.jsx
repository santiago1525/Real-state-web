import React, {useState} from 'react'
/* Components */
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Dropdown from '../components/Dropdown';
import InfoSection from '../components/InfoSection';
import AboutSection from '../components/aboutSection';
import Footer from '../components/Footer';
/* Data */
import { SliderData } from '../data/SliderData'
import { InfoData, InfoDataTwo } from '../data/InfoData';



const Home = () => {

    const  [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <AboutSection />
            <InfoSection {...InfoDataTwo} reverse='false'/>
            <Footer />
        </>
  )
}

export default Home