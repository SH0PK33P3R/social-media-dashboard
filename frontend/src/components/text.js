import React from "react";
import styled from "styled-components";

export const Title = ({ children, type, ...rest }) => {
  const Tag = styled(type)`
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.heading};
  `;
  return <Tag {...rest}>{children}</Tag>;
};

export const Body = ({ children, ...rest }) => {
  const Tag = styled.p`
    margin: 0;
    color: ${(props) => props.theme.colors.dimText};
    font-size: ${(props) => props.theme.fonts.size};
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: ${(props) => props.theme.fonts.boldWeight};
  `;
  return <Tag {...rest}>{children}</Tag>;
};
