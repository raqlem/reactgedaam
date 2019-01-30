import React, { Component } from 'react';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, FormText, Table,
  Modal, ModalHeader, ModalBody, ModalFooter,
  TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from 'classnames';


export default class Classes extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      modal: false,
      activeTab: '1'
    };

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  onButtonClick() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="container p-5">

        <legend>Turma</legend>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Geral
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Coordenadores
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Alunos
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Form>
              <fieldset>
                <p></p>
                <Row form>
                  <Col md={9}>
                    <FormGroup>
                      <Label for="tema">Tema</Label>
                      <Input type="text" name="tema" id="tema" placeholder="" />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="status">Status</Label>
                      <Input type="select" name="status" id="status">
                        <option></option>
                        <option>A Iniciar</option>
                        <option>Em Andamento</option>
                        <option>Encerrada</option>
                        <option>Cancelada</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="local">Local</Label>
                      <Input type="text" name="local" id="local" placeholder="" />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="dtInicio">Data de Início</Label>
                      <Input type="date" name="dtInicio" id="dtInicio" />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="dtFim">Data de Fim</Label>
                      <Input type="date" name="dtFim" id="dtFim" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="horario">Horário</Label>
                      <Input type="time" name="horario" id="horario" />
                    </FormGroup>
                  </Col>
                </Row>
                <Label for="exampleCheckbox">Dias da Semana</Label>
                <div>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Segunda-Feira</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Terça-Feira</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Quarta-Feira</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Quinta-Feira</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Sexta-Feira</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Sábado</Label>
                  </FormGroup>
                </div>
              </fieldset>
              <p></p>
              <Button onClick={this.onButtonClick}>Salvar </Button>
            </Form>
          </TabPane>

          <TabPane tabId="2">
            <p></p>
            <fieldset>
              <Button onClick={this.onButtonClick}>Incluir Novo Coordenador</Button>
              <p></p>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Período</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Marie Sklodowska Curie</td>
                    <td>5o</td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Greg Johann Mendel</td>
                    <td>8o</td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                </tbody>
              </Table>
            </fieldset>
          </TabPane>

          <TabPane tabId="3">
            <p></p>
            <fieldset>
              <Button onClick={this.onButtonClick}>Incluir Novo Aluno</Button>
              <p></p>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Período</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Charles Robert Darwin</td>
                    <td>5o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mae Carol Jemison</td>
                    <td>2o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Aaron Hillel Swartz</td>
                    <td>4o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Alan Mathison Turing</td>
                    <td>3o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Grace Murray Hopper</td>
                    <td>6o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Oswaldo Gonçalves Cruz</td>
                    <td>7o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Alberto Santos Dumont</td>
                    <td>8o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Margaret Eleanor Atwood</td>
                    <td>3o</td>
                    <td><Button onClick={this.onButtonClick}>Transferir</Button></td>
                    <td><Button onClick={this.onButtonClick}>Excluir</Button></td>
                  </tr>

                </tbody>
              </Table>
            </fieldset>
          </TabPane>
        </TabContent>


      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Funcionalidade não implementada</ModalHeader>
        <ModalBody>
          Este é apenas um protótipo, cujo objetivo é validação de requisitos. Não possui funcionalidades implementadas.
          </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onButtonClick}>Entendi</Button>{' '}
        </ModalFooter>
      </Modal>


      </div >
    );
  }
}
