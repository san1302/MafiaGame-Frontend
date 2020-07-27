import React,{Component} from 'react';
import {Button, Header, Image, Modal,Form} from 'semantic-ui-react';
import CreateRoom from '../../Containers/CreateRoom/CreateRoom';
import {Route,Switch, Link}from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

class HomePage extends Component{
  render() {
    return (
        <Form><br></br>
            <Button color='black'>Join Room</Button>
            <Modal trigger={<Button color='pink'>Create Room</Button>} centered={true}>
              <CreateRoom/>
            </Modal>  
        </Form>
    )
  }
}

export default HomePage;