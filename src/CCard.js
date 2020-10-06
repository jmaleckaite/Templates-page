import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';
import './styles.css';
import logo from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
 
class CCard extends React.Component {
	
	render() {
		return (
		<div className="button">
		<BrowserRouter>
		<Link to='/TemplateList'>Templates</Link>
		<Switch>
		<Route path="/TemplateList">
		<TemplateList />
		</Route>
		</Switch>
		</BrowserRouter>
		</div>
		);
	}
}
		
		
		
		

function TemplateList(props) {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
	<div class="wrap">
      <Card raised className="TemplateList-main">
        <CardImg src={logo} className="TemplateList-img" alt="Card image cap" />
        <CardBody>
          <CardTitle>First template</CardTitle>
          <Link className="btn">Preview</Link>
        </CardBody>
      </Card>
    </div>
	<div class="wrap">
	  <Card raised className="TemplateList-main col-12 col-md-5 m-1">
        <CardImg src={second} className="TemplateList-img" alt="Card image cap" />
        <CardBody>
          <CardTitle>Second template</CardTitle>
          <Link className="btn">Preview</Link>
        </CardBody>
      </Card>
    </div>
	<div class="wrap">
      <Card raised className="TemplateList-main col-12 col-md-5 m-1">
        <CardImg src={third} className="TemplateList-img" alt="Card image cap" />
        <CardBody>
          <CardTitle>Third template</CardTitle>
          <Link className="btn">Preview</Link>
        </CardBody>
      </Card>
	  </div>
	  </div>
  );
};

export default CCard;
