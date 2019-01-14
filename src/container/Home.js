import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {

  homeCardSubscriptions = {
    title: 'Inscrições',
    text: 'Listagem de Inscrições',
    action: () => hashHistory.push('/subscriptions')
  }
  homeCardSubscriptionForm = {
    title: 'Formulário de Inscrição',
    text: 'Inscrição em uma Turma',
    action: () => hashHistory.push('/subscriptionForm')
  }
  homeCardFormPrototype = {
    title: 'Protótipo do Formulário de Inscrição',
    text: 'Protótipo - Este formulário é somente para validação de interface e não é funcional',
    action: () => hashHistory.push('/formPrototype')
  }


  render() {
    return (
      <div className="container text-center p-4">
        <div className="row">
          <HomeCard {...this.homeCardSubscriptionForm} />
          <HomeCard {...this.homeCardSubscriptions} />
          <HomeCard {...this.homeCardFormPrototype} />
        </div>
      </div>
    );
  }
}
