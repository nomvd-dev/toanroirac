import { React, useState } from 'react'
import { Nav, NavbarContainer, NavbarItem, NavbarLink, NavbarLogo, NavbarMenu, NavbarOption, NavbarSearch, NavbarSelect } from './NavbarElements'
// import { animateScroll as scroll } from "react-scroll";
import { FaSearch } from 'react-icons/fa'

const NavbarSection = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <Nav className={navbar ? 'navbar changeBg' : 'navbar'}>
                <NavbarContainer>
                    <NavbarLogo to="/toanroirac">ToánRR</NavbarLogo>
                    <NavbarMenu>
                        <NavbarItem>
                            <div className="dropdown show">
                                <NavbarSelect className="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lý thuyết
                                </NavbarSelect>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <NavbarOption className="dropdown-item" to="/toanroirac/logic">Logic</NavbarOption>
                                    <NavbarOption className="dropdown-item" to="/toanroirac/quanhe">Quan hệ</NavbarOption>
                                    <NavbarOption className="dropdown-item" to="/toanroirac/boole">Đại số Boole</NavbarOption>
                                </div>
                            </div>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarSearch to="/toanroirac/baitap">Bài tập</NavbarSearch>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/toanroirac/dethi">Đề thi</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarSearch to="/toanroirac/search"><FaSearch /></NavbarSearch>
                        </NavbarItem>
                    </NavbarMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavbarSection
