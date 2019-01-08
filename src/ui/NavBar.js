import React from 'react';
import {Link} from 'react-router';
import logoFile from './logo.png';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to='/' className="navbar-brand"><img className="img-responsive" width="100px" height="100px" src={logoFile} alt={props.logo}/> </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/subscriptions' className="nav-link">Subscriptions</Link>
          </li>
          <li className="nav-item">
            <Link to='/students' className="nav-link">Students</Link>
          </li>
          <li className="nav-item">
            <Link to='/classes' className="nav-link">Classes</Link>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
