import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { onLogout } from '../../redux/actions'
import { PromiseProvider } from "mongoose";
import './App.scss';
const Nav = (props) => {
  
  return <Navbar className='navbar-expand-lg justify-content-center'>
    <Navbar.Brand className='type' href="/"> TALIAPP</Navbar.Brand>
   
    {
      props.user ?
        <Button onClick={props.onLogout}>Logout</Button> :
        <Link to={"/login"}>
          {/* <Button className='btn btn-light-danger'>Login</Button> */}
        </Link>
    }
  </Navbar>;
};

export default connect(
  // mapStateToProps,
  state => ({user: state.user.details }),
  // mapDispatchToProps,
  { onLogout }
)(Nav);
// const Nav = (props) => {
//   return   <Navbar className='navbar-expand-lg justify-content-right'>
//   <Navbar.Brand className='type' href="/">Home Inventory</Navbar.Brand>
//   {
//     props.user ?
//       <Button onClick={props.onLogout}>Logout</Button> :
//       <Link to={"/login"}>
//         <Button className='btn btn-dark-success'>Login</Button>
//       </Link>
//   }
// </Navbar>;
// };

// export default connect(
//   // mapStateToProps
//   state => ({user: state.user.details}),
//   // mapDispatchToProps
//   { onLogout }
// )(Nav);
