import React, {useState} from 'react'
import BaiTapPage from '../components/BaiTap'
import { animateScroll as scroll } from "react-scroll";
import {BiUpArrowCircle} from 'react-icons/bi'
import { ToTop } from '../components/Button'

const BaiTap = () => {
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
            <BaiTapPage />
            <ToTop onClick={scrollToTop} hidden={show}><BiUpArrowCircle/></ToTop>
        </>
    )
}

export default BaiTap
