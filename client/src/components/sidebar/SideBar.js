import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './App.scss';


const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Inventory List</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-styled pb-3">
          <p>Dashboard</p>
          <SubMenu title="Your Saved Homes" icon={faHome} items={submenus[0]}/>
          <NavLink tag={Link} to={'/home'}>
            </NavLink>
          <SubMenu title="Saved Rooms" icon={faHome} items={submenus[1]}/>
          <NavItem>
            <NavLink tag={Link} to={'/about'}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>About
            </NavLink>
          </NavItem>
          <SubMenu title="Pages" icon={faCopy} items={submenus[1]}/>
          <NavItem>
            <NavLink tag={Link} to={'/pages'}>
              <FontAwesomeIcon icon={faImage} className="mr-2"/>Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/faq'}>
              <FontAwesomeIcon icon={faQuestion} className="mr-2"/>FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/contact'}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Contact
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Your saved homes",
        target: "Home-1"
      },
    {
      title: "Second Home",
      target: "Home-2"
    },
    {
      title: "Third Home",
      target: "Home-3"
    },
    {
      title: "Fourth Home",
      target: "Home-4"
    },{
      title: "Fifth Home",
      target: "Home-5"
    },
    {
      title: "Sixth Home",
      target: "Home-6"
    },
      
    ],
    [
      {
        title: "Master Bedroom",
        target: "/MasterBedroom",          
      },
      {
        title: "Kitchen",
        target: "/Kitchen",        
      },
      {
        title: "Bathroom",
        target: "/Bathroom",        
      },
      {
        title: "Living Room",
        target: "/LivingRoom",        
      },
      {
        title: "Dining Room",
        target: "/DiningRoom",        
      }
    ]
  ]
  
export default SideBar;