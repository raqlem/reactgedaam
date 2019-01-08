import React from 'react';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4 col-md-4">
    <div className="card" style={{width: '18rem'}}>
      <img src="https://www.bandab.com.br/wp-content/uploads/2018/01/medicina.jpg" style={{ paddingTop: '3px' }} className="card-img-top rounded mx-auto" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
      </div>
    </div>
  </div>
);

export default HomeCard;
