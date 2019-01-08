import React, { Component} from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component {

  homeCardSubscriptions = {
    title: 'Inscrições',
    text: 'Gerencia Inscrições',
    action: () => alert('Página Inscrições acionada')
  }

  homeCardStudents = {
    title: 'Alunos',
    text: 'Gerencia Alunos',
    action: () => alert('Página Alunos acionada')
  }

  homeCardClasses = {
    title: 'Turmas',
    text: 'Gerencia Turmas',
    action: () => alert('Página Turmas acionada')
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <HomeCard {...this.homeCardSubscriptions}/>
          <HomeCard {...this.homeCardStudents}/>
          <HomeCard {...this.homeCardClasses}/>
        </div>
      </div>
    );
  }
}
