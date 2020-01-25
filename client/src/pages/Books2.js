// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../api";
// import './App.scss';
// import { runInThisContext } from "vm";
// import { TextArea, FormBtn } from "../components/Form";
// import DeleteBtn from "../components/DeleteBtn";

import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './App.scss';

class Homes extends Component {
    state = {
        homes: [],
        title: "",
        year: "",
        description: ""
    };
    // Add code to get the item with an _id equal to the id in the route param
    // e.g. http://localhost:3000/books/:id
    // The item id for this route can be accessed using this.props.match.params.id

    componentDidMount() {
        this.loadHomes();
    }

    loadBooks2 = () => {
        API.getHomes()
            .then(res =>
                this.setState({ homes: res.data, title: "", year: "", description: "" })
            )
            .catch(err => console.log(err));
    };

    deleteHome = id => {
        API.deleteHome(id)
        .then(res => this.laodHomes())
        .cath(err => console.log(err));
    };
    handleInputChange =event => {
        const { name, value } = event.target;
        this.setState ( {
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
        if (this.state.title && this.state.year) {
            API.saveHome( {
                title: this.state.title,
                year: this.state.year,
                description: this.state.description
            })
            .then(res => this.loadHomes())
            .cath(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluie>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h2>Let's Keep a Record of your rooms</h2> 
                        </Jumbotron>
                        <form>
                            <Input 
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder= "item (required)"
                            />
                            <Input 
                            value={this.state.year}
                            onChange={this.handleInputChange}
                            name="year"
                            placeholder="year, make or model (required)"
                            />
                            <TextArea
                            value={this.state.description}
                            onChange={this.state.handleInputChange}
                            name="description"
                            />
                            <FormBtn
                            disabled={!(this.state.year && this.state.title)}
                            onClick={this.handleFormSubmit}
                            />
                        </form>
                    </Col>

                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h2> Items on my rooms</h2>
                    </Jumbotron>
                    {this.state.homes.length ? (
                        <List>
                            {this.state.homes.map(function(home) {
                                return (
                                    <ListItem key={home._id}>
                                        <Link to={"/homes/" + book_id}>
                                            {home.title} made in {home.year}
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteHome(home._id)} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    ): (
                        <h3> No results to display</h3>
                    )}
                </Col>
                </Row>
            </Container>
        );
    }
}
    export default Homes;
