import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Subscriptions extends Component {

  constructor() {
    super();
    this.state = {
      subscriptions: []
    }


  }

  componentDidMount() {
    fetch('https://gedaamsubscriptionapi.herokuapp.com/api/inscricoes')
    .then(results => {
      return results.json();
    }).then(data => {
      let subscriptions = data.map((subscription) => {
        return (<tr key={subscription.id}>
          <th scope="row">{subscription.id}</th>
          <td>{subscription.opcao1}</td>
          <td>{subscription.opcao2}</td>
        </tr>);
      });
      this.setState({subscriptions: subscriptions});
    })
}


  render() {
    return (
      <div className="container p-5">
        <legend>Listagem de Inscrições</legend>
        <p></p>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Opção 1</th>
              <th>Opção 2</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subscriptions}
          </tbody>
        </Table>
      </div>

    );
  }
}
