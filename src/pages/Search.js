import React, {useState} from 'react'
import SearchPage from '../components/Search'
import { animateScroll as scroll } from "react-scroll";
import {BiUpArrowCircle} from 'react-icons/bi'
import { ToTop } from '../components/Button'

const Search = () => {
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
        <div>
            <SearchPage />
            <ToTop onClick={scrollToTop} hidden={show}><BiUpArrowCircle/></ToTop>
        </div>
    )
}

export default Search
