import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="right-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col md="3">
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">First</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Second</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Third</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md="9">
                            
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
