import React, { useState } from "react";
import { darkTheme, lightTheme } from "./Themes/Themes";

import ThemeToggler from "./Themes/ThemeToggler";
import { GlobalStyles } from "./Themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Themes/useDarkMode";
import Layout from "./Layout/Layout";
import Navbar from "./Layout/Navbar";
function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <Navbar>
          <ThemeToggler
            toggleTheme={themeToggler}
            theme={themeMode}
            currentTheme={theme}
          />
        </Navbar>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
