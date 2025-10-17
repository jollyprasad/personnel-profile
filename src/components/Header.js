import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({to, children}){
  return (
    <NavLink to={to} className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
      {children}
    </NavLink>
  )
}

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="logo">JP</div>
          <div className="brand-text">
            <div className="name">Jolly Prasad</div>
            <div className="role">Senior Consultant and Tech Enthusiast</div>
          </div>
        </div>

        <nav className="nav">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/articles">Articles</NavItem>
          <NavItem to="/contact">Contact Me</NavItem>
        </nav>
      </div>
    </header>
  )
}
