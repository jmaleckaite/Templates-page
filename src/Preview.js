import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'; 
import { HashRouter as Router } from 'react-router-dom'
import logo from './img/1.jpg';
import 'semantic-ui-css/semantic.min.css';
import Desktop from './Desktop';
import Mobile from './Mobile';
import UseTemplate from './UseTemplate';

//when the message is published, the message is in prewait state, with options
//to preview and test. Once it is send to test, then it is possible to send to users

class Preview extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			selectedSubmit: false
		};
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
   

	render() {
const { activeItem } = this.state

		return (
		<div className="preview">
        <div className="ui container center alligned">
		<Form>
		<Router>
		<Button as={Link} to="/desktop"  icon='desktop' size='large' />
		<Button as={Link} to="/mobile" icon='mobile alternate' size='large' />
        <Switch>
		<Route path="/desktop">
			<Desktop />
		</Route>
		<Route path="/mobile">
			<Mobile />
		</Route>
		<Redirect to="desktop" />
		</Switch>
		</Router>
		</Form>
		</div>
		</div>

		
		);
	}
}

	
	/*
	function NavigationBar() {
		return (
		<Menu pointing secondary>		
		<div className="ui center aligned container">
		<div className="ui compact item">

		<a className="item">
		<Menu.Item href='/back' icon="arrow left"/>
        </a>
			<a className="item">
				<Menu.Item href='/send' icon='plane' disabled/>
			</a>
			<a className="item">
				<Menu.Item href='/test' icon='file' />
			</a>
		<a className="item">
		<Menu.Item icon="desktop" href='/#'
		
		/>
		</a>
		<a className="item">
		<Menu.Item icon='mobile alternate' href='/mobile'/>
		</a>
		</div>
		</div>
		</Menu>
		);
	}
	*/
	
    
    
function useTemplate() {
    return (
        <div className="main">
            <Grid centered columns={4}>
		<Grid.Column>

        </Grid.Column>
        </Grid>
        </div>
    )
}

	function DesktopView() {
		return (
		<div className="templatePage">
		<Grid centered columns={2}>
		<Grid.Column>
		<Form>
		<Header>Template Preview</Header>
		<Image 
		src= {logo}
		/>
		</Form>
		</Grid.Column>
		</Grid>
		</div>
		);
	}
	
	function MobileView() {
		return (
		<div className="mobileTemplatePage">
		<h1>Test</h1>
		</div>
		);
	}

export default Preview;

