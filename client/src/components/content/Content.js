import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Hello" } />
        <Route exact path="/about" component={() => "About" } />
        <Route exact path="/Pages" component={() => "Pages" } />
        <Route exact path="/faq" component={() => "FAQ" } />
        <Route exact path="/contact" component={() => "Contact" } />
        <Route exact path="/Home-1" component={() => "Home-1" } />
        <Route exact path="/Home-2" component={() => "Home-2" } />
        <Route exact path="/Home-3" component={() => "Home-3" } />
        <Route exact path="/Page-1" component={() => "Page-1" } />
        <Route exact path="/Page-2" component={() => "Page-2" } />
        <Route exact path="/page-1" component={() => "page-1" } />
        <Route exact path="/page-2" component={() => "page-2" } />
        <Route exact path="/page-3" component={() => "page-3" } />
        <Route exact path="/page-4" component={() => "page-4" } />                
      </Switch>
=======
// import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', { 'is-open': props.isOpen })}>
    <NavBar toggle={props.toggle} />
        {props.children} 
        {/* <Switch>
            <Route exact path="/" component={() => "Hello"} />
            <Route exact path="/about" component={() => "About"} />
            <Route exact path="/Pages" component={() => "Pages"} />
            <Route exact path="/faq" component={() => "FAQ"} />
            <Route exact path="/contact" component={() => "Contact"} />
            <Route exact path="/Home-1" component={() => "Home-1"} />
            <Route exact path="/Home-2" component={() => "Home-2"} />
            <Route exact path="/Home-3" component={() => "Home-3"} />
            <Route exact path="/Page-1" component={() => "Page-1"} />
            <Route exact path="/Page-2" component={() => "Page-2"} />
            <Route exact path="/page-1" component={() => "page-1"} />
            <Route exact path="/page-2" component={() => "page-2"} />
            <Route exact path="/page-3" component={() => "page-3"} />
            <Route exact path="/page-4" component={() => "page-4"} />
            <Route exact path="/pages/books" component={() => "Books"} />
            <Route path="/books/:id" component={() => "Detail"} />
            <Route exact path="/items" component={() => "Item"} />
            <Route path="/items/:id" component={() => "itemDetails"} />
        </Switch> */}
       
>>>>>>> 4a11b10b7e60453aee7b0e91d35f9c59e76c9db2
    </Container>
)