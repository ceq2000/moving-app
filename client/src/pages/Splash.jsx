import React from "react";
<<<<<<< HEAD
=======
import './App.scss';
>>>>>>> parent of 80a48e4... commented out the App.scss in splash.jsx to let app compile

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>Love To Read?</h1>
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
                        <h1 className='text-center'>We got you!</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}