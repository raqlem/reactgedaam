import React from 'react';
import {
    Col, Row, Button, Form, FormGroup, Label, Input, FormText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export default class FormPrototype extends React.Component {

    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {
            modal: false
        };

    }

    onButtonClick() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div className="container p-5">
                <Form>
                    <fieldset>
                        <legend>Inscrição</legend>
                        <p></p>
                        <FormGroup>
                            <Label for="nomeCompleto">Nome Completo</Label>
                            <Input type="text" name="nome" id="nomeCompleto" placeholder="" />
                        </FormGroup>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="faculdade">Faculdade</Label>
                                    <Input type="select" name="faculdade" id="faculdade">
                                        <option></option>
                                        <option>FAMINAS</option>
                                        <option>UFMG</option>
                                        <option>UNI-BH</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label for="periodo">Período</Label>
                                    <Input type="number" min="1" max="12" name="periodo" id="periodo">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={7}>
                                <FormGroup>
                                    <Label for="matricula">Matrícula</Label>
                                    <Input type="text" name="matricula" id="matricula" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="telefone">Telefone</Label>
                                    <Input type="text" name="telefone" id="telefone" />
                                </FormGroup>
                            </Col>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="email">E-Mail</Label>
                                    <Input type="email" name="email" id="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="opcao1">Primeira Opção</Label>
                            <Input type="select" name="opcao1" id="opcao1">
                                <option></option>
                                <option>INGLÊS | Luana (9°) e Peu (9°) - Campus UFMG Saúde - Segunda-feira: 18h30-20h30</option>
                                <option>INGLÊS | Isabella Miranda (5°) e Wendel (5°) - Campus UFMG Saúde - Quarta-feira: 18h00-20h00</option>
                                <option>LIBRAS | Nina (5°) e Maíra (5°) e Rafael Nicolas (5°) - Campus UFMG Saúde - Terça-feira: 18h30-20h00</option>
                                <option>RESIDÊNCIA MÉDICA | Léo Padre (9°) - Campus UFMG Saúde - Segunda-feira: 13h00-14h00</option>
                                <option>RESIDÊNCIA EUA (INGLÊS) | Isabella Faria (9°) - Campus UFMG Saúde - Quinta-feira: 17h30-19h00</option>
                                <option>TURMA PARA CALOUROS | Thassi (5°) e Júlia Casali (5°) - Campus UFMG Saúde - Terça-feira: 12h00-13h00</option>
                                <option>Fernanda (8°) e Lorhayne (8°) - Campus UFMG Saúde - Segunda-feira: 18h00-19h30</option>
                                <option>Rafael Ageu (10°) e Gabriel Marques (10°) - Campus UFMG Saúde - Segunda-feira: 18h00-20h00</option>
                                <option>Natalia (7°) e Violeta (7°) - Campus UFMG Saúde - Terça-feira: 18h00-20h00</option>
                                <option>Gustavo (6°) e Brígida (6°) - Campus UFMG Saúde - Terça-feira: 18h10-19h40</option>
                                <option>Vinícius Antunes (8°) - Campus UFMG Saúde - Terça-feira: 18h15-20h00</option>
                                <option>Larissa (5°) e Vitor (5°) e Médici (5°) - Campus UFMG Saúde - Terça-feira: 18h30-20h30</option>
                                <option>Thales (9°) e Jaqueline (9°) - Campus UFMG Saúde - Terça-feira: 18h30-20h30</option>
                                <option>Nogueira (4°) e Garcez (4°) - Campus UFMG Saúde - Quarta-feira: 19h00-21h00</option>
                                <option>Lucas Macedo (5°) e Óliver (5°) - Campus UFMG Saúde - Quinta-feira: 12h30-14h00</option>
                                <option>Álvaro (5°) e Rayan (5°) - Campus UFMG Saúde - Quinta-feira: 18h20-20h00</option>
                                <option>Gabriela (3°) e Lara (6°) e Manuela (5°) - Campus UniBH Estoril - Segunda-feira: 17h00-19h00</option>
                                <option>Carolina (4°) e João (9°) - Campus UniBH Estoril - Segunda-feira: 18h00-19h00</option>
                                <option>Ana Paula (8°) e Yan (5°) - Campus UniBH Estoril - Segunda-feira: 19h00-21h00</option>
                                <option>Julia (5°) e André (9°) - Campus UniBH Estoril - Quarta-feira: 18h00-20h00</option>
                                <option>Tifany Rafaely (4°) - Campus UFMG Pampulha - Sexta-feira: 12h30-13h50</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="opcao2">Segunda Opção (opcional)</Label>
                            <Input type="select" name="opcao2" id="opcao2">
                                <option></option>
                                <option>1.  Residência Médica | Léo Padre (9°) - Campus UFMG Saúde - Segunda-feira: 13h00-14h00</option>
                                <option>2.  Fernanda (8°) e Lorhayne (8°) - Campus UFMG Saúde - Segunda-feira: 18h00-19h30</option>
                                <option>3.  Rafael Ageu (10°) e Gabriel Marques (10°) - Campus UFMG Saúde - Segunda-feira: 18h00-20h00</option>
                                <option>4.  Inglês | Luana (9°) e Peu (9°) - Campus UFMG Saúde - Segunda-feira: 18h30-20h30</option>
                                <option>5.  Turma para Calouros | Thassi (5°) e Júlia Casali (5°) - Campus UFMG Saúde - Terça-feira: 12h00-13h00</option>
                                <option>6.  Natalia (7°) e Violeta (7°) - Campus UFMG Saúde - Terça-feira: 18h00-20h00</option>
                                <option>7.  Gustavo (6°) e Brígida (6°) - Campus UFMG Saúde - Terça-feira: 18h10-19h40</option>
                                <option>8.  Vinícius Antunes (8°) - Campus UFMG Saúde - Terça-feira: 18h15-20h00</option>
                                <option>9.  Libras | Nina (5°) e Maíra (5°) e Rafael Nicolas (5°) - Campus UFMG Saúde - Terça-feira: 18h30-20h00</option>
                                <option>10. Larissa (5°) e Vitor (5°) e Médici (5°) - Campus UFMG Saúde - Terça-feira: 18h30-20h30</option>
                                <option>11. Thales (9°) e Jaqueline (9°) - Campus UFMG Saúde - Terça-feira: 18h30-20h30</option>
                                <option>12. Inglês | Isabella Miranda (5°) e Wendel (5°) - Campus UFMG Saúde - Quarta-feira: 18h00-20h00</option>
                                <option>13. Nogueira (4°) e Garcez (4°) - Campus UFMG Saúde - Quarta-feira: 19h00-21h00</option>
                                <option>14. Lucas Macedo (5°) e Óliver (5°) - Campus UFMG Saúde - Quinta-feira: 12h30-14h00</option>
                                <option>15. Residência EUA (Inglês) | Isabella Faria (9°) - Campus UFMG Saúde - Quinta-feira: 17h30-19h00</option>
                                <option>16. Álvaro (5°) e Rayan (5°) - Campus UFMG Saúde - Quinta-feira: 18h20-20h00</option>
                                <option>17. Gabriela (3°) e Lara (6°) e Manuela (5°) - Campus UniBH Estoril - Segunda-feira: 17h00-19h00</option>
                                <option>18. Carolina (4°) e João (9°) - Campus UniBH Estoril - Segunda-feira: 18h00-19h00</option>
                                <option>19. Ana Paula (8°) e Yan (5°) - Campus UniBH Estoril - Segunda-feira: 19h00-21h00</option>
                                <option>20. Julia (5°) e André (9°) - Campus UniBH Estoril - Quarta-feira: 18h00-20h00</option>
                                <option>21. Tifany Rafaely (4°) - Campus UFMG Pampulha - Sexta-feira: 12h30-13h50</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Novato no GEDAAM
                            </Label>
                        </FormGroup>
                    </fieldset>

                    <p></p>
                    <Button onClick={this.onButtonClick}>Inscrever</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Funcionalidade não implementada</ModalHeader>
                    <ModalBody>
                        Este é apenas um protótipo, cujo objetivo é validação de requisitos. Não possui funcionalidades implementadas.
                </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onButtonClick}>Entendi</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>


        );
    }
}