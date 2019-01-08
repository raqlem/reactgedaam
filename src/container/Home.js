import React, { Component} from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

export default class Home extends Component {

  homeCardSubscriptions = {
    title: 'Inscrições',
    text: 'Gerencia Inscrições',
    action: () => hashHistory.push('/subscriptions')
  }

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

  render() {
    return (
      <div className="container text-center p-4">
        <div className="row">
          <HomeCard {...this.homeCardSubscriptions}/>
          <HomeCard {...this.homeCardStudents}/>
          <HomeCard {...this.homeCardClasses}/>
        </div>
      </div>
    );
  }
}
