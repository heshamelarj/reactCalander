import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ThemeToggler from "../Themes/ThemeToggler";
import { useDarkMode } from "../Themes/useDarkMode";
import { darkTheme, lightTheme } from "../Themes/Themes";

const Wrapper = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
