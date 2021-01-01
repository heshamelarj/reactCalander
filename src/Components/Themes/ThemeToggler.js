import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.toggleBorder};
  padding: 0.5em;
  border-radius: 10px;
  max-width: 40px;
`;

const ThemeToggler = ({ theme, toggleTheme, currentTheme }) => {
  console.log(currentTheme);
  if (currentTheme === "dark")
    return (
      <Button type="button" onClick={toggleTheme}>
        <span>
          <Sun />
        </span>
      </Button>
    );
  else
    return (
      <Button type="button" onClick={toggleTheme}>
        <span>
          <Moon />
        </span>
      </Button>
    );
};
ThemeToggler.PropTypes = {
  theme: PropTypes.object.isRequired,
  currentTheme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
export default ThemeToggler;
