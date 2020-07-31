import React from "react";
import styled from "styled-components";

import Card from "components/card";
import { Body } from "components/text";

const Item = styled(Body)`
  color: ${(props) => props.theme.colors.primary};
`;

const DataList = ({ data }) => {
  return data.map((item, i) => (
    <Card key={i} style={{ marginBottom: 10 }}>
      <Item>{item.title}</Item>
    </Card>
  ));
};

export default DataList;
