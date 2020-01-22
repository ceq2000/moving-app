import React from "react";
<<<<<<< HEAD
=======
import './App.scss';
>>>>>>> oscar-branch

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container className='container-1'>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
<<<<<<< HEAD
                        <h1 className='text-center'>Want to know what you own?</h1>
=======
                        <h1 className='text-center'></h1>
>>>>>>> oscar-branch
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
>>>>>>> oscar-branch
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}