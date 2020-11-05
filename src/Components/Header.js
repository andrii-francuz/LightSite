import React, { Component } from 'react'
import { Container, Form, Nav, Navbar, Button, FormControl } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Slider from '../Pages/Slider'

import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto p-2">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/slider">Slider</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    text="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/slider" component={Slider}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
