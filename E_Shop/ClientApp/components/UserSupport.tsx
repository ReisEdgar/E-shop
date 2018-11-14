import * as React from 'react';
import axios from "axios";
export class UserSupport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { user: null, admin: false, codeInput :"", messageInput: "", checkboxInput : false }
        this.sendCode = this.sendCode.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleCodeInputChange = this.handleCodeInputChange.bind(this);
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }
    handleMessageInputChange(event) {
        var state:any = this.state;
        state.messageInput = event.target.value;
        this.setState(state);
    }

    handleCheckBoxChange(event) {
        var state:any = this.state;
        state.checkboxInput = event.target.value;
        this.setState(state);
    }


    handleCodeInputChange(event) {
        var state:any = this.state;
        state.codeInput = event.target.value;
        this.setState(state);
    }

    sendCode() {
        axios.get('/api/Hardware/' + this.state.codeInput)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });   
         }

         sendMessage() {
            var config = {
                headers: {'Authorization': "bearer " + window.localStorage.accessToken}
           };
           var messageType = this.state.checkboxInput ? "USER_TO_ADMIN_BROKEN_ITEM" : "USER_TO_ADMIN_STANDART";
                     var message = {Text: this.state.messageInput, MessageType: messageType};
                    console.log(messageType);
             axios.post('/api/Message', message,config
            )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
             }
 
componentDidMount(){
    }

    public render() {

        return <div >
                                  <div>
                            <span>Iveskite taisomos įrangos kodą:</span>
                <input type="text" onChange={this.handleCodeInputChange} />

                            <button onClick={this.sendCode}> Pateikti</button>
                        </div>
                        {this.props.user?
                        <div>
                            <span>Parašykite laišką svetainės administracijai:</span>
                            <div>
                    <textarea className="message-input" onChange={this.handleMessageInputChange} >
                    </textarea>
                                <div>
                                    <span>Rašoma dėl brokuotos prekės (administracija greičiau atsakys į šią žinutę)</span>
                        <input type="checkbox" onChange={this.handleCheckBoxChange}/>
                        <button onClick={this.sendMessage}> Išsiųsti</button>
                                </div>

                            </div>
                        </div>
                        :<div></div>
                        }
                    </div>

    }
}