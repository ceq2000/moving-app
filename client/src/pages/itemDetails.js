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
                            <h2>Details</h2>
                            <h4>Item : {this.state.item.name}</h4>
                            <h4>Location : {this.state.item.location}</h4>
                            <h4>Model Number : {this.state.item.modelNumber}</h4>
                            <h4>Purchase Date : {this.state.item.purchaseDate}</h4>
                            <h4>Purchase Price : {this.state.item.purchasePrice}</h4>
                            <h4>Purchase Location : {this.state.item.purchaseLocation}</h4>
                            <h4>Description : {this.state.item.description}</h4>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <button>
                        <Link to="/">← Back to Inventory</Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default itemDetails;
