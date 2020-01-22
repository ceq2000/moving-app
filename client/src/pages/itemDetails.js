import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import './App.scss';

class itemDetails extends Component {
    state = {
        item: {}
    };
    // Add code to get the item with an _id equal to the id in the route param
    // e.g. http://localhost:3000/books/:id
    // The item id for this route can be accessed using this.props.match.params.id

    componentDidMount() {
        API.getItem(this.props.match.params.id)
            .then(res => {
                this.setState({ item: res.data })
            });
    }

    render() {
        return (
            <Container className="details" fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.item.name} in {this.state.item.location}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Description</h1>
                            <p>{this.state.item.description}</p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
<<<<<<< HEAD
                        <Link to="/">← Back to Items</Link>
=======
                        <Link to="/">← Back to Inventory</Link>
>>>>>>> 8edc7a43451d86602d36e4e06c347db995a2dd84
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default itemDetails;
