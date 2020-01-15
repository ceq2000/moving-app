import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import './App.scss';
>>>>>>> parent of 80a48e4... commented out the App.scss in splash.jsx to let app compile
=======
// import './App.scss';
>>>>>>> 80a48e4678fda017552dd5bb07e3f498c4585a88

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>Inventory?</h1>
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
                        <h1 className='text-center'>We got you!</h1>
=======
                        <h1 className='text-center'>We got you covered!</h1>
>>>>>>> 80a48e4678fda017552dd5bb07e3f498c4585a88
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}