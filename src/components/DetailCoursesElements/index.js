import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: left;
    align-items: flex-start;
    margin-bottom: 50px;
    /* position: relative; */
`

export const Div = styled.div`
    
`

export const Image = styled.img`
    /* margin-left: 90px; */
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    letter-spacing: 2px;
    /* margin-top: 50px; */
`

export const LeftColumn = styled.div`
    position: fixed;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 600px;
    overflow: auto;
    top: 150px;
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px var(--quinary-color); 
        border-radius: 10px;
        /* background: var(--quinary-color); */
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: var(--quinary-color);
        -webkit-box-shadow: inset 0 0 6px var(--quinary-color); 
    }
`

export const RightColumn = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 400px;
    margin-top: 80px;
`

export const LeftH2 = styled(Link)`
    font-size: 26px;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 1px;
    margin-top: 20px;
    color: var(--quinary-color);
    &:hover{
        color: var(--quinary-color);
        /* text-decoration: none; */
    }
`

export const LeftH3 = styled(Link)`
    font-size: 20px;
    margin-left: 30px;
    margin-top: 3px;
    font-weight: 600;
    cursor: pointer;
    color: var(--quinary-color);
    &:hover{
        color: var(--quinary-color);
        /* text-decoration: none; */
    }
`

export const LeftH4 = styled(Link)`
    font-size: 18px;
    margin-left: 60px;
    font-weight: 500;
    cursor: pointer;
    color: var(--quinary-color);
    &:hover{
        color: var(--quinary-color);
        /* text-decoration: none; */
    }
`

export const LeftH5 = styled(Link)``

export const RightH2 = styled.h2`
    font-size: 26px;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 1px;
    margin-top: 20px;
`

export const RightH3 = styled.h3`
    font-size: 20px;
    margin-left: 30px;
    font-weight: 600;
    cursor: pointer;
`

export const RightH4 = styled.h4`
    font-size: 18px;
    margin-left: 60px;
    font-weight: 500;
    cursor: pointer;
`

export const RightH5 = styled.h5``

export const RightP = styled.p`
    margin-left: 90px;
`
export const RightWordBold = styled.span`
    font-weight: bold;
`
export const RightWordItalic = styled.span`
    font-style: italic;
`