import React, {useState} from 'react'
import BoolePage from '../components/BoolePage'
import { animateScroll as scroll } from "react-scroll";
import {BiUpArrowCircle} from 'react-icons/bi'
import { ToTop } from '../components/Button'

const Boole = () => {
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
        <>
            <BoolePage />
            <ToTop onClick={scrollToTop} hidden={show}><BiUpArrowCircle/></ToTop>
        </>
    )
}

export default Boole
