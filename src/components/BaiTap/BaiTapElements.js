import styled from "styled-components";

export const BaiTapContainer = styled.div`
    width: 100%;
    height: 80px;
    background: var(--quinary-color);
`

export const ShowAnswer = styled.button`
    border: 1px solid var(--quinary-color);
    padding: 5px 10px;
    margin-left: 90px;
    margin-bottom: 20px;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--quinary-color);
    transition: all 0.25s ease-in-out;
    &:hover{
        color: var(--primary-color);
        background: var(--quinary-color);
    }
`

export const ShowHint = styled.button`
    border: 1px solid var(--quinary-color);
    padding: 5px 10px;
    margin-left: 90px;
    margin-bottom: 20px;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--quinary-color);
    transition: all 0.25s ease-in-out;
    &:hover{
        color: var(--primary-color);
        background: var(--quinary-color);
    }
`