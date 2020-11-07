import React, { Component } from 'react'
import { Card, CardDeck, Container, Row, Col, ListGroup } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CardDeck className="m-4">
                        <Row>
                            <Col md="9">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Lorem ipsum</Card.Title>
                                        <Card.Text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Sed est sapien, mollis sit amet tortor sed, gravida ornare nulla. 
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                                            Fusce dictum, orci eget condimentum tincidunt, velit ex consequat 
                                            est, sed lobortis nibh nunc at diam. Mauris pretium eros in consectetur 
                                            imperdiet. Vestibulum ipsum erat, eleifend eget suscipit id, 
                                            condimentum at nisl. Sed vel rhoncus tellus. Quisque consectetur 
                                            hendrerit justo, nec aliquam elit vestibulum in. Etiam sit amet 
                                            tincidunt ante, eget mattis metus.</p>
                                    
                                            <p>Praesent pharetra aliquam ligula, nec vehicula arcu vulputate nec. 
                                                Proin sit amet justo condimentum, rutrum dolor sed, posuere arcu. 
                                                Praesent tristique elit magna, id vulputate massa lobortis eget. 
                                                Sed consectetur ornare elit vitae placerat. Morbi eu tellus arcu. 
                                                Proin sit amet erat quis ligula ornare bibendum. Ut luctus suscipit 
                                                urna, volutpat bibendum mauris bibendum nec. Praesent sit amet varius 
                                                libero. Duis sit amet convallis ante, vel ultrices dolor. Donec vel 
                                                ligula ut quam eleifend iaculis. Mauris dapibus bibendum ante eu lobortis. 
                                                Nullam congue ut leo non facilisis. Cras nisl ligula, vehicula eget aliquet 
                                                ac, cursus vitae est. Aenean mauris lacus, cursus congue mi a, porta malesuada 
                                                ante. Ut dolor ligula, egestas nec leo nec, lobortis tempor ipsum.</p>

                                            <p>Donec scelerisque mi eget libero viverra vestibulum. In ac luctus dolor. 
                                                Proin vulputate vehicula elementum. Nunc egestas dolor non turpis ultrices 
                                                pretium at a mi. Sed turpis ante, varius tincidunt justo a, vulputate 
                                                tempor sem. Suspendisse imperdiet sem sem, vestibulum rhoncus ex porttitor 
                                                in. Vestibulum tellus sapien, iaculis at est ut, tincidunt bibendum nisi. 
                                                Mauris vel felis finibus augue sollicitudin sodales. Mauris scelerisque 
                                                consequat est, a sollicitudin lorem finibus non. Donec metus nulla, 
                                                porttitor eu lorem et, vestibulum feugiat turpis. Curabitur eget tellus 
                                                bibendum, aliquam massa nec, blandit enim. Fusce imperdiet fringilla iaculis. 
                                                Vivamus non tempus dui. Donec vulputate diam in augue gravida, ut vehicula massa laoreet.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item href="/">First</ListGroup.Item>
                                        <ListGroup.Item href="/about">Second</ListGroup.Item>
                                        <ListGroup.Item href="/contact">Thirth</ListGroup.Item>
                                        <ListGroup.Item href="/slide">Fourth</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </CardDeck>
                </Container>
            </div>
        )
    }
}
