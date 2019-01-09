import React from 'react';
import {Link} from 'react-router';
import logoFile from './logo.png';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to='/' className="navbar-brand"><img className="img-responsive" width="100px" height="100px" src={logoFile} alt={props.logo}/> GEDAAM</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    </nav>
  );
};

export default NavBar;
