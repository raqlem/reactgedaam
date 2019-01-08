import React from 'react';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4 col-md-6">
    <div className="card" style={{width: '18rem'}}>
      <img src="https://www.bandab.com.br/wp-content/uploads/2018/01/medicina.jpg" style={{ paddingTop: '3px' }} className="card-img-top rounded mx-auto" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
      </div>
    </div>
  </div>
);

export default HomeCard;
