import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deviceSize } from './Assets/responsive';

const ToggleContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    background: #264653;
    top: 0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    z-index: 999;
`;

const CloseToggleIcon = styled(FaTimes)`
    color: #fff;
    cursor: pointer;
`;

const ToggleIcon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`;

const ToggleWrapper = styled.div`
    color: #fff;
`;

const ToggleMenu = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 20px);

    @media screen and (max-width: ${deviceSize.tablet}px) {
        grid-template-rows: repeat(6, 20px);
    }
`;

const ToggleLink = styled(Link)`
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #2a9d8f;
        transition: 0.2s ease-in-out;
    }
`;

const ToggleBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const ToggleBtn = styled(Link)`
    font-size: 1rem;
    color: #fff;
    background: #2a9d8f;;
    white-space: nowrap;
    padding: 1rem 3rem;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transtion: all 0.2s ease-in-out;
        background: #fff;
        color: #333;
        font-weight: 500;
    }
`;

function MenuToggle({ isOpen, aboutToggle }) {
    return (
        <ToggleContainer isOpen={isOpen} onClick={aboutToggle}>
            <ToggleIcon onClick={aboutToggle}>
                <CloseToggleIcon />
            </ToggleIcon>
            <ToggleWrapper>
                <ToggleMenu>
                    <ToggleLink to='/' onClick={aboutToggle}>Home</ToggleLink>
                </ToggleMenu>
                <ToggleMenu>
                    <ToggleLink to='/signUp' onClick={aboutToggle}>Sign Up</ToggleLink>
                </ToggleMenu>
                <ToggleMenu>
                    <ToggleLink to='/login' onClick={aboutToggle}>Sign In</ToggleLink>
                </ToggleMenu>
                <ToggleBtnWrap>
                    <ToggleBtn to='/contact' onClick={aboutToggle}>Contact Us</ToggleBtn>
                </ToggleBtnWrap>
            </ToggleWrapper>
        </ToggleContainer>
    )
}

export default MenuToggle;
