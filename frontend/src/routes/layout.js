import React from "react";

import Card from "components/card";
import { Title, Body } from "components/text";
import { Grid, Row, Col } from "components/layout";

const Layout = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Title type="h1">Layout</Title>
        </Col>
      </Row>
      <Row>
        <Col sm={9} md={6} lg={3}>
          <Card>
            <Body>Column 1</Body>
          </Card>
        </Col>
        <Col sm={3} md={6} lg={3}>
          <Card>
            {" "}
            <Body>Column 2</Body>
          </Card>
        </Col>
        <Col sm={9} md={6} lg={3}>
          <Card>
            {" "}
            <Body>Column 3</Body>
          </Card>
        </Col>
        <Col sm={3} md={6} lg={3}>
          <Card>
            {" "}
            <Body>Column 4</Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Card>
            {" "}
            <Body>Row 2</Body>
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default Layout;
