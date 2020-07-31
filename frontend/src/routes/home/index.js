import React from "react";

import { Title, Body } from "components/text";
import OverviewCard from "modules/overviewCard";
import { Grid, Row, Col } from "components/layout";
import SocialMediaCard from "modules/socialMediaCard";

import data from "./data";

const Home = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Title type="h1">Social Media Dashboard</Title>
          <Body>Total followers: 23,004</Body>
        </Col>
      </Row>
      <Row>
        {data.main.map((item, i) => {
          console.log(item);
          return (
            <Col key={i} sm={12} md={3} lg={3}>
              <SocialMediaCard {...item} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Title type="h2">Overview - Today</Title>
        </Col>
      </Row>
      <Row>
        {data.today.map((item, i) => {
          console.log(item);
          return (
            <Col key={i} sm={12} md={3} lg={3}>
              <OverviewCard {...item} />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};

export default Home;
