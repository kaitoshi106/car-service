import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import NavItems from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        min-w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        justify-between
        lg:pr-12
        lg:pl-12
    `}
`;


export function Navbar() {
    return (
        <NavbarContainer>
            <Logo />
            <NavItems />
        </NavbarContainer>
    );
}
