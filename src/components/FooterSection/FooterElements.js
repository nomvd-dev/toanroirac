import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--quinary-color);
    @media screen and (max-width: 1300px){
        height: 50px;
    }
`

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterP = styled.p`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--primary-color);
    margin-bottom: 0;
` 