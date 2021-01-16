import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {ButtonContainer} from './Button';
import styled from 'styled-components';
// import logo from "../logo.svg";

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <i className="fas fa-store"></i>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                PRODUCT
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            &nbsp;My Cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainDark);
    .nav-link {
        color : var(--mainWhite) !important;
        font-size : 1.3rem;
        text-transform : capitalize;
    }

`;

