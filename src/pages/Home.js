import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import LogicSection from '../components/LogicSection'
import { objectLogic } from '../components/LogicSection/Data'
import { objectQuanhe } from '../components/QuanheSection/Data'
import { objectBoole } from '../components/BooleSection/Data'
import QuanheSection from '../components/QuanheSection'
import BooleSection from '../components/BooleSection'
import { animateScroll as scroll } from "react-scroll";
import {BiUpArrowCircle} from 'react-icons/bi'
import { ToTop } from '../components/Button'

const Home = () => {
    const [show, setShow] = useState(true);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    window.addEventListener('scroll', changeBackground);
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div className='home'>
            <HeroSection />
            <LogicSection {...objectLogic} />
            <QuanheSection {...objectQuanhe} />
            <BooleSection {...objectBoole} />
            <ToTop onClick={scrollToTop} hidden={show}><BiUpArrowCircle/></ToTop>
        </div>
    )
}

export default Home
