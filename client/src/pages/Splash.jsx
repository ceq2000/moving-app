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
                        <h1 className='text-center'>Want To Move?</h1>
=======
                        <h1 className='text-center'>Inventory?</h1>
>>>>>>> 4a11b10b7e60453aee7b0e91d35f9c59e76c9db2
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
>>>>>>> 4a11b10b7e60453aee7b0e91d35f9c59e76c9db2
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}