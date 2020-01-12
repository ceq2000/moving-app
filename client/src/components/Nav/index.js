import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { onLogout } from '../../redux/actions'
import './App.scss';
const Nav = (props) => {
  return   <Navbar className='navbar-expand-lg navbar-dark bg-success justify-content-left'>
  <Navbar.Brand href="/">Home Inventory</Navbar.Brand>
  {
    props.user ?
      <Button onClick={props.onLogout}>Logout</Button> :
      <Link to={"/login"}>
        <Button className='btn btn-dark-success'>Login</Button>
      </Link>
  }
</Navbar>;
};

export default connect(
  // mapStateToProps
  state => ({user: state.user.details}),
  // mapDispatchToProps
  { onLogout }
)(Nav);
