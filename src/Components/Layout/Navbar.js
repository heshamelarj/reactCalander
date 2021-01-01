import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Navbar = ({ children }) => {
  return <Nav>{children}</Nav>;
};
Navbar.PropTypes = {
  children: PropTypes.element.arr,
};
export default Navbar;
