import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)} />
      </RightMenu>
      <BurgerNav show={burgerStatus} style={{ zIndex: "-1" }}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Book</a>
        </li>
        <li>
          <a href="#">Check In</a>
        </li>
        <li>
          <a href="#">Manage</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Flying With Us</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Fees</a>
        </li>
        <li>
          <Button>Sign In</Button>
        </li>
        <li>
          <Button>Sign Up</Button>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
  font-family: "Gotham Book", -apple-system, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-family: "Gotham Book", -apple-system, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  text-transform: uppercase;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
