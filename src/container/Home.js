import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {

  homeCardSubscriptions = {
    title: 'Inscrições',
    text: 'Listagem de Inscrições',
    action: () => hashHistory.push('/subscriptions')
  }
  /*
    homeCardStudents = {
      title: 'Alunos',
      text: 'Gerencia Alunos',
      action: () => hashHistory.push('/students')
    }
  
    homeCardClasses = {
      title: 'Turmas',
      text: 'Gerencia Turmas',
      action: () => hashHistory.push('/classes')
    }
  */
  homeCardSubscriptionForm = {
    title: 'Formulário de Inscrição',
    text: 'Inscrição em uma Turma',
    action: () => hashHistory.push('/subscriptionForm')
  }


  render() {
    return (
      <div className="container text-center p-4">
        <div className="row">
        <HomeCard {...this.homeCardSubscriptionForm} />
          <HomeCard {...this.homeCardSubscriptions} />
        </div>
      </div>
    );
  }
}
