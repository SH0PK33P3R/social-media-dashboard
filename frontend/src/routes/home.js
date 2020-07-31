import React from "react";

import { Title } from "components/text";
import { Grid, Row, Col } from "components/layout";

const Home = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Title type="h1">Home</Title>
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
