import React from 'react';

const HomeCard = () => (
  <div className="col-12 col-sm-4">
    <div className="card" style={{width: '18rem'}}>
      <img src="https://www.bandab.com.br/wp-content/uploads/2018/01/medicina.jpg" style={{ paddingTop: '3px' }} className="card-img-top rounded mx-auto" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
);

export default HomeCard;
