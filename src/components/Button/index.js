import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    font-size: 16px;
    padding: 15px 30px;
    border: 1px solid transparent;
    border-radius: 25px;
    background: var(--secondary-color);
    color: var(--tertiary-color);
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover{
        color: var(--secondary-color);
        background: var(--primary-color);
        border: 1px solid var(--secondary-color);
        text-decoration: none;
    }
`