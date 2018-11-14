﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import axios from "axios";
export class AdminMessage extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {showMessage : false, open : false, buttonText : "Išskleisti", messageInput : ""};
        this.openMessage = this.openMessage.bind(this);
        this.openClose = this.openClose.bind(this);

        this.sendResponse = this.sendResponse.bind(this);


    }
sendResponse (){
    var config = {
        headers: {'Authorization': "bearer " + window.localStorage.accessToken}
   };
   var message = {AdminMessage: {Text: this.state.messageInput, MessageType:"USER_TO_USER"}, UserMessageId: this.props.id};
       axios.post('/api/Message/adminresponse', message, config)
        .then( (response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });   
        this.openClose(false);
}
    openClose(value : any) {
        var state: any = this.state;
            state.open = value;       
        this.setState(state);      
    }

    messageInputChange(event){
        var state: any = this.state;
        state.messageInput = event.target.value;       
        this.setState(state);    
    }

    openMessage() {
        var state : any = this.state;

        if (this.state.showMessage) {
            state.showMessage = false;
            state.buttonText = "Išskleisti"
        } else {
            state.showMessage = true;
            state.buttonText = "Suskleisti"
        }
        this.setState(state);      
    }

    public render() {

        return <div>

                <div>
                <p>
                        <span>{this.props.sender}</span>
                </p>
                {this.state.showMessage ?
                    <div>
                        <span>{this.props.message}</span>

                    </div>
                    :
                    <div>

                    </div>
                }
                <button onClick={this.openMessage}>
                    {this.state.buttonText}
    
                </button>
                <button onClick={() => { this.openClose(true) }}>Atsakyti</button>
                {
                    this.state.open 
                        ? <div>
         
                            <textarea className="message-input" >
                    </textarea>
                        <button onClick={() => { this.openClose(false) }}>Uždaryti</button>
                            <button onClick={this.sendResponse}>Siųsti</button>

                        </div>
                        : <div></div>
                }
            </div>
        </div>;
    }
}

