import React from "react";
import styled from "styled-components";

export const Title = ({ children, type, ...rest }) => {
  const Tag = styled(type)`
    font-family: ${(props) => props.theme.fonts.heading};
  `;
  return <Tag {...rest}>{children}</Tag>;
};

export const Body = ({ children, ...rest }) => {
  const Tag = styled.p`
    margin: 0;
    font-family: ${(props) => props.theme.fonts.body};
  `;
  return <Tag {...rest}>{children}</Tag>;
};
