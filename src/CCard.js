import React from 'react';
//import {
  //Card, CardImg, CardText, CardBody,
  //CardTitle, CardSubtitle } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Modal, Message, Checkbox, Form, Card, Image } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-grid-system';
//import './styles.css';
import logo from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import ReactDOM from 'react-dom';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import Preview from './Preview';
import Desktop from './Desktop';
import Mobile from './Mobile';
  
class CCard extends React.Component {
	


	render() {
		return (
		<div className="button">
		<Router>
		<Button as={ Link } to='/TemplateList'>Templates</Button>
		<Switch>
		<Route path="/TemplateList">
		<TemplateList />
		</Route>
		<Route path="/Preview">
			<Preview />
		</Route>
		<Route path="/UseTemplate">
			<UseTemplate />
		</Route>
		</Switch>
		</Router>
		</div>
		);
	}
}
		
		
function useTemplate() {
	return (
	  <div class="ui container center aligned">
		  
		  <Router>
		  <Button as={ Link } to='/Desktop' icon='desktop'/>
		  <Button as={ Link } to='/Mobile' icon='mobile alternate'/>
		  <Button as={ Link } to='/Save' icon='save'/>
 
		  <Switch>
		  <Route path="/Desktop">
			  <Desktop />
		  </Route>
		  <Route path="/Mobile">
			  <Mobile />
			  </Route>
			  <Route path="/Save">
			  </Route>
			  
		  </Switch>
      <Image
	src= {logo}
	/>
	</Router>
	 </div>
	);
  };

function TemplateList(props) {
  return (
    <div class="ui container center aligned">
	<Card.Group>
	<Card>
	<Card.Content>
	<Image 
	src= {logo}
	/>
	<Card.Header>First template</Card.Header>
	</Card.Content>
	<Card.Content extra>
	<div className='ui button'>
		<Router>
	<Button icon labelPosition='left' basic color='blue' as={Link} to='/Preview' target='_blank'>
	<Icon name='eye' />
	Preview
	</Button>
	<Button secondary as={Link} to='/UseTemplate' target='_blank'>
	Use Template
	</Button>
	<Switch>
		<Route path="/Preview">
			<Preview />
		</Route>
		<Route path="/UseTemplate">
			<UseTemplate />
		</Route>
	</Switch>
	</Router>
	</div>
	</Card.Content>
	</Card>
	<Card>
	<Card.Content>
	<Image
	src= {logo}
	/>
	<Card.Header>Second template</Card.Header>
	</Card.Content>
	<Card.Content extra>
	<div className='ui button'>
			<Router>
	<Button icon labelPosition='left' basic color='blue' as={Link} to='/Preview' target='_blank'>
	<Icon name='eye'/>
	Preview
	</Button>
	<Button secondary as={Link} to='/UseTemplate' target='_blank'>
	Use Template
	</Button>
	<Switch>
		<Route path="/Preview">
			<Preview />
		</Route>
		<Route path="/UseTemplate">
			<UseTemplate />
		</Route>
	</Switch>
	</Router></div>
	
	</Card.Content>
	</Card>
	<Card>
	<Card.Content>
	<Image
	src= {logo}
	/>
	<Card.Header>Third template</Card.Header>
	</Card.Content>
	<Card.Content extra>
	<div className='ui button'>
	<Router>
	<Button icon labelPosition='left' basic color='blue' as={Link} to='/Preview' target='_blank'>
	<Icon name='eye' />
	Preview
	</Button>
	<Button secondary as={Link} to='/UseTemplate' target='_blank'>
	Use Template
	</Button>
	<Switch>
		<Route path="/Preview">
			<Preview />
		</Route>
		<Route path="/UseTemplate">
			<UseTemplate />
		</Route>
	</Switch>
	</Router>
	</div>
	</Card.Content>
	</Card>
	  </Card.Group>
	  </div>
  );
};

function UseTemplate(props) {
	return (
	  <div class="ui container center aligned">
		  <Router>
		  <Button as={ Link } to='/Desktop' icon='desktop'/>
		  <Button as={ Link } to='/Mobile' icon='mobile alternate'/>
		  <Button as={ Link } to='/#' icon='save'/>
		  <Switch>
		  <Route path="/Desktop">
			  <Desktop />
		  </Route>
		  <Route path="/Mobile">
			  <Mobile />
			  </Route>
			  <Route path="/#">
			  </Route>
			  <Redirect to="/desktop" />
		  </Switch>
		 </Router> 
     
	
	 </div>
	);
  };



export default CCard;
