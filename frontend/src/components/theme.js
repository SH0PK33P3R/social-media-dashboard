import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.bodyBackground};
  }
`;

export const theme = {
  // Layout
  gutter: 20,
  maxWidth: 1440,
  breakpoints: {
    sm: 250,
    md: 868,
    lg: 1440,
  },

  // Text
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
    size: "14px",
    boldWeight: 700,
    lightWeight: 400,
  },

  // Colors
  colors: {
    primary: "hsl(163, 72%, 41%)",
    secondary: "hsl(356, 69%, 56%)",

    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "hsl(37, 97%, 70%)",
    youtube: "hsl(348, 97%, 39%)",

    bodyBackground: "hsl(230, 17%, 14%)",
    topBackground: "hsl(232, 19%, 15%)",
    cardBackground: "hsl(228, 28%, 20%)",
    dimText: "hsl(228, 34%, 66%)",
    text: "hsl(0, 0%, 100%)",
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
