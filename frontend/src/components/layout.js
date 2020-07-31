import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  margin: 0 auto;
  max-width: ${(props) =>
    props.fullwidth ? "100%" : `${props.theme.maxWidth}px`};
`;

export const Row = styled.div`
  margin: ${(props) => props.theme.gutter}px;
`;

export const Col = ({ children, ...rest }) => {
  function getWidthString(span) {
    if (!span) return;
    const width = (span / 12) * 100;
    return `width: ${width}%;`;
  }

  const ColumnStyle = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%;")}

    @media only screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.sm}px`}) {
      ${({ sm }) => sm && getWidthString(sm)};
    }
    @media only screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.md}px`}) {
      ${({ md }) => md && getWidthString(md)};
    }
    @media only screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.lg}px`}) {
      ${({ lg }) => lg && getWidthString(lg)};
    }
  `;

  const Gutter = styled.div`
    margin: ${(props) => props.theme.gutter}px;
  `;

  return (
    <ColumnStyle {...rest}>
      <Gutter>{children}</Gutter>
    </ColumnStyle>
  );
};
