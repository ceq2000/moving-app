import React, { Component, Children } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './App.scss';

import { Form, FormControl } from 'react-bootstrap';

class Items extends Component {
    state = {
        // MUST MATCH "itemSeed" OBJECT IN "seedDB.js" file 
        name: [],
        rooms: ["Kitchen", "Garage", "Master Bedroom", "Living Room", "Suite", "Bathroom"],
        location: "",
        modelNumber: "",
        purchaseDate: "",
        purchasePrice: "",
        purchaseLocation: "",
        description: "",

    };

    componentDidMount() {
        this.loadItems();

    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                // let roomsDB = res.map(room => {
                //     return { value: room, display: room }
                // });
                this.setState({
                    items: res.data, name: "", location: "", description: "", purchaseDate: "",
                    purchasePrice: ""
                });
            })
            .catch(err => console.log(err));
    }


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
        if (this.state.name && this.state.rooms) {
            API.saveItem({
                name: this.state.name,
                rooms: this.state.rooms,
                location: this.state.location,
                description: this.state.description,
                modelNumber: this.state.modelNumber,
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
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What are you moving?</h1>
                        </Jumbotron>
                        <form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                    <option id='0'>Where is it in the House?</option>
                                    {this.state.rooms.map((room) => 
                                    <option key={room} value={room}>{room}</option>)}
                                </Form.Control>
                            </Form.Group>

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
                            <Input
                                value={this.state.modelNumber}
                                onChange={this.handleInputChange}
                                name="modelNumber"
                                placeholder="Model / Serial Number (required)"
                            />
                            <Input
                                value={this.state.purchaseDate}
                                onChange={this.handleInputChange}
                                name="purchaseDate"
                                placeholder="Purchase Date (required)"
                            />
                            <Input
                                value={this.state.purchasePrice}
                                onChange={this.handleInputChange}
                                name="purchasePrice"
                                placeholder="Purchase Price (required)"
                            />
                            <Input
                                value={this.state.purchaseLocation}
                                onChange={this.handleInputChange}
                                name="purchaseLocation"
                                placeholder=" Purchase Location (required)"
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
                            >
                                Add Item
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Item Tracker</h1>
                        </Jumbotron>
                        {this.state.items && this.state.items.length ? (
                            <List>
                                {this.state.items.map(item => (
                                    <ListItem key={item._id}>
                                        <Link to={"/items/" + item._id}>
                                            <strong>
                                                {item.name} in {this.state.rooms}
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
                </Row>
            </Container>
        );
    }
}



export default Items;