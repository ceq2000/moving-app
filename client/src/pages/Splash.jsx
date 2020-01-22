import React from "react";
import './App.scss';

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container className='container-1'>
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
<<<<<<< HEAD
                        <h1 className='text-center'>We can help!</h1>
=======
                        <h1 className='text-center'>Like us on Facebook!</h1>
>>>>>>> 8edc7a43451d86602d36e4e06c347db995a2dd84
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}