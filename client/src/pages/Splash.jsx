import React from "react";

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>Want to know what you own?</h1>
                    </Jumbotron>
                    <Row className="text-center">
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-primary" 
                            onClick={() => props.history.push('/signup')}
                            >Signup</Button>
                        </Col>
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={() => props.history.push('/login')}
                            >Login</Button>
                        </Col>
                    </Row>
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>We can help!</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}