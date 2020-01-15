import React from "react";
// import './App.scss';

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
<<<<<<< HEAD

                        <h1 className='text-center'>Inventory?</h1>

                        <h1 className='text-center'>Inventory?</h1>

=======
                        <h1 className='text-center'>Love To Read?</h1>
>>>>>>> parent of 7a8866f... Changed titles in public routes
                    </Jumbotron>
                    <Row className="text-center">
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-success" 
                            onClick={() => props.history.push('/signup')}
                            >Signup</Button>
                        </Col>
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-success"
                            onClick={() => props.history.push('/login')}
                            >Login</Button>
                        </Col>
                    </Row>
                    <Jumbotron fluid className='mt-4'>
<<<<<<< HEAD

                        <h1 className='text-center'>We got you covered!</h1>

                        <h1 className='text-center'>We got you covered!</h1>

=======
                        <h1 className='text-center'>We got you Cover to Cover!</h1>
>>>>>>> parent of 7a8866f... Changed titles in public routes
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}