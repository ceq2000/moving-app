// import React from "react";
// import { connect } from 'react-redux'
// import { Button, Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// import { onLogout } from '../../redux/actions'
// import { PromiseProvider } from "mongoose";
// import './App.scss';
// const Nav = (props) => {
  
//   return <Navbar className='navbar-expand-lg justify-content-center'>
//     <Navbar.Brand className='type' href="/"> TalliHome</Navbar.Brand>
   
//     {
//       props.user ?
//         <Button onClick={props.onLogout}>Logout</Button> :
//         <Link to={"/login"}>
//           {/* <Button className='btn btn-light-danger'>Login</Button> */}
//         </Link>
//     }
//   </Navbar>;
// };

// export default connect(
//   // mapStateToProps,
//   state => ({user: state.user.details }),
//   // mapDispatchToProps,
//   { onLogout }
// )(Nav);
// // const Nav = (props) => {
// //   return   <Navbar className='navbar-expand-lg justify-content-right'>
// //   <Navbar.Brand className='type' href="/">Home Inventory</Navbar.Brand>
// //   {
// //     props.user ?
// //       <Button onClick={props.onLogout}>Logout</Button> :
// //       <Link to={"/login"}>
// //         <Button className='btn btn-dark-success'>Login</Button>
// //       </Link>
// //   }
// // </Navbar>;
// // };

// // export default connect(
// //   // mapStateToProps
// //   state => ({user: state.user.details}),
// //   // mapDispatchToProps
// //   { onLogout }
// // )(Nav);


import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import './App.scss';
import { onLogout } from '../../redux/actions'
const Nav = (props) => {
    return <Navbar className='navbar-expand-lg justify-content-between'>
        <div container="navlink">
            <Navbar className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to={'/items'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/page-2'}>Category</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/page-3'}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/page-4'}>Contact</NavLink>
                </NavItem>
            </Navbar>
        </div>
        <Navbar.Brand className="type" href="/"><img src="./images/logo.png" alt="TalliHome Logo"></img> </Navbar.Brand>
        {
            props.user ?
                <Button onClick={props.onLogout}>Logout</Button> :
                <Link to={"/login"}>
                    <Button>Login</Button>
                </Link>
        }
    </Navbar>;
};
export default connect(
    // mapStateToProps
    state => ({ user: state.user.details }),
    // mapDispatchToProps
    { onLogout }
)(Nav);