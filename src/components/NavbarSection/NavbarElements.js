import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.div`
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    margin-top: -80px;
    background-color: transparent;
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLogo = styled(Link)`
    color: var(--primary-color);
    font-size: 24px;
    font-weight: 800;
    text-decoration: none;
    &:hover{
        color: var(--primary-color);
        text-decoration: none;
    }
`

export const NavbarMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 35%;
    list-style-type: none;
    font-size: 16px;
    margin-bottom: 0;
`

export const NavbarItem = styled.li`
    cursor: pointer;
`

export const NavbarLink = styled(LinkS)`
    color: var(--primary-color);
    text-decoration: none;
    &:hover{
        color: var(--primary-color);
        text-decoration: none;
    }
`