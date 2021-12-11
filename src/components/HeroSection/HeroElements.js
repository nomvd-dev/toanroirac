import styled from "styled-components";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: var(--secondary-color);
`

export const HeroContent = styled.div`
    z-index: 3;
    color: var(--primary-color);
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HeroH2 = styled.h2`
    font-size: 40px;
    line-height: 1.5;
    text-align: center;
`

export const HeroP = styled.p`
    font-size: 40px;
    text-align: center;
    line-height: 3;
    font-family: var(--secondary-font);
`

export const HeroButton = styled(Link)`
    font-size: 16px;
    padding: 12px 36px;
    border: 1px solid transparent;
    border-radius: 50px;
    background: var(--secondary-color);
    color: var(--tertiary-color);
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
        color: var(--secondary-color);
        background: var(--primary-color);
        border: 1px solid var(--secondary-color);
        text-decoration: none;
    }
`