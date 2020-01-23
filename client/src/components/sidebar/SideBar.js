import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: '#fff' }}>&times;</span>
      <h3>TALIAPP</h3>

      <a class="btn btn-primary" href="/login" role="button">Logout</a>



    </div>
    <div className="side-menu">
      <Nav vertical className="list-styled pb-3">
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={'/about'}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />About
            </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={'/pages'}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />Portfolio
            </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/faq'}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />FAQ
            </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/contact'}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Contact
            </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Your home",
      target: "Home-1"
    },

  ],
  [
    {
      title: "rooms",
      target: "/books",
    },
    {
      title: "Items",
      target: "/items",
    }
  ]
]


export default SideBar;