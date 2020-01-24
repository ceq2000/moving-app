import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './App.scss';

import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';


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
                            {/* onclick this.setState of location to >>>>  */}
                            <ButtonToolbar>
                                {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                                    variant => (
                                        <DropdownButton
                                            title={variant}
                                            variant={variant.toLowerCase()}
                                            id={`dropdown-variants-${variant}`}
                                            key={variant}
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                                Active Item
                                             </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </ButtonToolbar>
                            
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
                                placeholder="Model or Serial Number (required)"
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
                </Row>
            </Container>
        );
    }
}

export default Items;