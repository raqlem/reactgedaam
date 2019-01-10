import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SubscriptionForm extends Component {

    //https://developers.google.com/web/updates/2015/03/introduction-to-fetch


    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);

        fetch('https://gedaamsubscriptionapi.herokuapp.com/api/inscricao', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
              }),
            body: json
        });
    }


    /*fetch(URL_TO_POST, {
        method: 'post',
        body: new FormData(document.querySelector('#my-form'))
      }).then(function(response){
        // trate a resposta aqui
      });
*/

    render() {
        return (
            <div className="container p-5">
                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Formulário de Inscrição - Gedaam 1/2019</legend>
                        <p></p>
                        <FormGroup>
                            <Label for="opcao1">Opção 1</Label>
                            <Input type="text" name="opcao1" id="opcao1" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="opcao2">Opção 2</Label>
                            <Input type="text" name="opcao2" id="opcao2" />
                        </FormGroup>
                    </fieldset>
                    <p></p>
                    <Button>Submit</Button>
                </Form>
            </div>

        );
    }
}