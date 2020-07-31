import React from "react";
import styled from "styled-components";

import Card from "components/card";
import { Body } from "components/text";

const CardRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems};
`;

const Amount = styled(Body)`
  font-size: 30px !important;
  color: ${(props) => props.theme.colors.text}!important;
`;

const Percentage = styled(Body)`
  color: ${(props) =>
    props.positive
      ? props.theme.colors.primary
      : props.theme.colors.secondary}!important;
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const OverviewCard = ({ type, amount, percent, positive, platform }) => {
  return (
    <Card>
      <CardRow alignItems="flex-start">
        <Body>{type}</Body>
        <img alt={platform} src={`/images/icon-${platform}.svg`} />
      </CardRow>
      <CardRow alignItems="flex-end" style={{ marginTop: 20 }}>
        <Amount>{amount}</Amount>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Icon
              alt={positive ? "up arrow" : "down arrow"}
              src={`/images/icon-${positive ? "up" : "down"}.svg`}
            />
          </div>
          <Percentage positive={positive}>{percent}%</Percentage>
        </div>
      </CardRow>
    </Card>
  );
};

export default OverviewCard;
