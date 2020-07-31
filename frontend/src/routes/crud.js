import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "components/card";
import DataList from "modules/dataList";
import { Title } from "components/text";
import AddPostForm from "modules/addPostForm";
import { Grid, Row, Col } from "components/layout";

const List = () => {
  const [data, setData] = useState([]);

  function fetchData() {
    axios
      .get("http://localhost:3001/posts")
      .then(function (res) {
        setData(res.data);
      })
      .catch((err) => {
        console.error(`Something went wrong: ${err}`);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid>
      <Row>
        <Col>
          <Title type="h1">CRUD</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {data.length > 0 && <DataList data={data} />}
          <Card>
            <AddPostForm fetchData={fetchData} />
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default List;
