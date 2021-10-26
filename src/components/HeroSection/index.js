import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH2, HeroP, HeroVideo, HeroButton } from './HeroElements';
import video from '../../video/video.mp4';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <HeroVideo autoPlay loop muted src={video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH2>"It is not of the essence of mathematics to be conversant with the ideas of number and quantity."</HeroH2>
                    <HeroP>Geogre Boole</HeroP>
                    <HeroButton activeClass="active"
                        to="logic"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Bắt đầu</HeroButton>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
