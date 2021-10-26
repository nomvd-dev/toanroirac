import { React, useState } from 'react'
import { Nav, NavbarContainer, NavbarItem, NavbarLink, NavbarLogo, NavbarMenu } from './NavbarElements'
import { animateScroll as scroll } from "react-scroll";

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

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav className={navbar ? 'navbar changeBg' : 'navbar'}>
                <NavbarContainer>
                    <NavbarLogo to="/toanroirac">ToánRR</NavbarLogo>
                    <NavbarMenu>
                        <NavbarItem>
                            <NavbarLink onClick={scrollToTop}>Trang chủ</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink activeClass="active"
                                to="logic"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Nội dung</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink activeClass="active"
                                to="copyright"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Bản quyền</NavbarLink>
                        </NavbarItem>
                    </NavbarMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavbarSection
