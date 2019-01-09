import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class SubscriptionForm extends Component {


    render() {
        return (
            <div className="container p-5">
                <Form>
                    <fieldset>
                        <legend>Formulário de Inscrição - Gedaam 1/2019</legend>
                        <p></p>
                        <FormGroup>
                            <Label for="option1">Opção 1</Label>
                            <Input type="text" name="option1" id="option1" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="option2">Opção 2</Label>
                            <Input type="text" name="option2" id="option2" />
                        </FormGroup>
                    </fieldset>
                    <p></p>
                    <Button>Submit</Button>
                </Form>
            </div>

        );
    }
}