import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './App.scss';

class Items extends Component {
    state = {
        // MUST MATCH "itemSeed" OBJECT IN "seedDB.js" file 
        name: [],
        location: "",
        description: "",
        purchaseDate: "",
        purchasePrice: "",

    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res =>
                this.setState({
                    items: res.data, name: "", location: "", description: "", purchaseDate: "",
                    purchasePrice: ""
                })
            )
            .catch(err => console.log(err));
    };

    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadItems())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.location) {
            API.saveItem({
                name: this.state.name,
                location: this.state.location,
                description: this.state.description,
                purchaseDate: this.state.purchaseDate,
                purchasePrice: this.state.purchasePrice
            })
                .then(res => this.loadItems())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container className="items" fluid>
                <Row>
                    <Col size="md-8">
                        <Jumbotron>
                            <h1>What are you moving?</h1>
                            <h4>Use this form to add items to your home inventory list.</h4>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Item Name (required)"
                            />
                            <Input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Location (required)"
                            />
                            <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                placeholder="Description (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.location)}
                                onClick={this.handleFormSubmit}
                            >Add Item
                            </FormBtn>
                        </form>
                    </Col>
                </Row>

                <row>
                    <Col size="md-8 sm-12">
                        <Jumbotron>
                            <h1>My Home Inventory List</h1>
                            <h4>Click on a list item below for item details.</h4>
                        </Jumbotron>
                        {this.state.items && this.state.items.length ? (
                            <List>
                                {this.state.items.map(item => (
                                    <ListItem key={item._id}>
                                        <Link to={"/items/" + item._id}>
                                            <strong>
                                                {item.name} in {item.location}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </row>
            </Container>

        );
    }
}

export default Items;
