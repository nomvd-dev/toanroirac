import styled from "styled-components";

export const DeThiPageContainer = styled.div`
    /* padding-top: 80px; */
    width: 100%;
    height: 80px;
    background: var(--quinary-color);
    // display: flex;
    // flex-direction: column!important;
    /* margin-bottom: 80px; */
`

export const DeThiH4 = styled.h4`
    color: var(--quinary-color);
`

export const DeThiLink = styled.a`
    border: 1px solid var(--quinary-color);
    padding: 5px 10px;
    margin-left: 90px;
    margin-bottom: 20px;
    cursor: pointer;
    color: var(--quinary-color);
    transition: all 0.25s ease-in-out;
    &:hover{
        color: var(--primary-color);
        text-decoration: none;
        background: var(--quinary-color);
    }
`

export const DeThiDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 100px;
`

export const DeThiContent = styled.div`
    padding-top: 50px;
    width: 100%;
    max-width: 1100px;
    margin: auto;
`