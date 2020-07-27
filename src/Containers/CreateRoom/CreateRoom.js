import React, {Component} from 'react';
import { Button, Header, Image, Modal, Form, Input } from 'semantic-ui-react'
class CreateRoom extends Component{
    state = {
        userName: ''
    };

    HandleChangeInUserName = (event) =>{
        this.setState({
            userName: event.target.value
        })
    }

    OnSubmitUserName = () => {
        var userName = this.state.userName;
        console.log(userName);
        this.setState({
            userName: ''
        });
    }

    render()
    {
        return(
            <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                            <Modal.Header>Enter Your Username</Modal.Header>
                                <Input placeholder='UserName' value = {this.state.userName} onChange = {this.HandleChangeInUserName} />
                            </Form.Field>
                            <Button type='submit' onClick = {this.OnSubmitUserName}>Submit</Button>
                        </Form> 
                    </Modal.Description>
            </Modal.Content>
        )
    };
    
};

export default CreateRoom;