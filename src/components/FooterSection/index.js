import React from 'react'
import { FooterContainer, FooterContent, FooterP } from './FooterElements';
import {FaCopyright} from 'react-icons/fa';

const FooterSection = () => {
    return (
        <>
            <FooterContainer id="copyright">
                <FooterContent>
                    <FooterP>Bản quyền <FaCopyright /> thuộc 18521536 - Lê Anh Triều và 18521591 - Đặng Nguyễn Anh Tuấn </FooterP>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default FooterSection
