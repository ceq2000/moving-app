import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import './App.scss';

class Room extends Component {
    state = {
        room: {}
    };
    componentDidMount () {
        API.getRoom(this.props.match.params.id)
        .then(res => {
            this.setState.length({room: res.data})
        });
    }
    render() {
        return ( 
            <Container fluid className="room-detail">
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.room.title} by { this.state.room.year}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>description</h1>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <button type="submit"
                        className="btn btn-success">
                            <Link to="/">Back to Homes </Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Room;
