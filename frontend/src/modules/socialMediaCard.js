import React from "react";
import styled from "styled-components";

import Card from "components/card";
import { Body } from "components/text";
import { theme } from "components/theme";

const Icon = styled.img`
  margin-right: 10px;
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled(Body)`
  font-size: 60px !important;
  margin-top: 20px !important;
  color: ${(props) => props.theme.colors.text}!important;
`;

const SpacedText = styled(Body)`
  letter-spacing: 7px;
  font-weight: ${(props) => props.theme.fonts.lightWeight}!important;
`;

const AmountText = styled(Body)`
  color: ${(props) =>
    props.positive
      ? props.theme.colors.primary
      : props.theme.colors.secondary}!important;
`;

const SocialMediaCard = ({
  handle,
  number,
  positive,
  platform,
  amountToday,
}) => {
  return (
    <Card topColor={theme.colors[platform]}>
      <CardRow>
        <Icon src={`/images/icon-${platform}.svg`} />
        <Body>{handle}</Body>
      </CardRow>
      <Number>{number}</Number>
      <SpacedText>
        {platform === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
      </SpacedText>
      <CardRow style={{ marginTop: 25 }}>
        <div>
          <Icon src={`/images/icon-${positive ? "up" : "down"}.svg`} />
        </div>
        <AmountText positive={positive}>{amountToday} Today</AmountText>
      </CardRow>
    </Card>
  );
};

export default SocialMediaCard;
