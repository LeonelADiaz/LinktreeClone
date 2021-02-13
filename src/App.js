import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
const App = () => (
  <div className="App">
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
  </div>
);

export default App;
