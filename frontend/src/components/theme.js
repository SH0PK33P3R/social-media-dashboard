import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.bodyBackground};
  }
`;

const theme = {
  // Layout
  gutter: 5,
  maxWidth: 950,
  breakpoints: {
    sm: 768,
    md: 992,
    lg: 1200,
  },

  // Text
  fonts: {
    body: `'Rubik', sans-serif`,
    heading: `'Rubik', sans-serif`,
  },

  // Colors
  colors: {
    primary: "red",
    secondary: "green",
    bodyBackground: "#f2f7ff",
  },
};

const Theme = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default Theme;
