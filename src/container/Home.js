import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {

  homeCardSubscriptions = {
    title: '[Recuperação] Inscrições',
    text: 'Prova de conceito para recuperação de dados',
    action: () => hashHistory.push('/subscriptions')
  }
  homeCardSubscriptionForm = {
    title: '[Gravação] Formulário de Inscrição',
    text: 'Prova de conceito para gravação de dados e envio de e-mail',
    action: () => hashHistory.push('/subscriptionForm')
  }
  homeCardFormPrototype = {
    title: '[Protótipo] Formulário de Inscrição',
    text: 'Somente para validação de interface - não funcional',
    action: () => hashHistory.push('/formPrototype')
  }


  render() {
    return (
      <div className="container text-center p-4">
        <div className="row">
          <HomeCard {...this.homeCardFormPrototype} />
          <HomeCard {...this.homeCardSubscriptionForm} />
          <HomeCard {...this.homeCardSubscriptions} />
        </div>
      </div>
    );
  }
}
