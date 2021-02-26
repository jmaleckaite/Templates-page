import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'; 
import logo from './img/1.jpg';
import 'semantic-ui-css/semantic.min.css';
import Desktop from './Desktop';
import Mobile from './Mobile';

class UseTemplate extends React.Component {
    render() {
return (
    

    <div className="preview">
    <div className="ui container center alligned">
    <Form>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Button as={Link} to="/#" icon='save' size='large' />
    <Switch>
    <Route path="/desktop">
        <Desktop />
    </Route>
    <Route path="/mobile">
        <Mobile />
    </Route>

    <Redirect to="/desktop" />
    </Switch>
    </BrowserRouter>
    </Form>
    </div>
    </div>
);
    }
}

export default UseTemplate;