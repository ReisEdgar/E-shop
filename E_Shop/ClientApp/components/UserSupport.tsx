import * as React from 'react';
import axios from "axios";
export class UserSupport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { textarea:null, user: null, admin: false, display:false, exists : false, owner : "", status: "", date: "", category : "", codeInput :"", messageInput: "", checkboxInput : false }
        this.sendCode = this.sendCode.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleCodeInputChange = this.handleCodeInputChange.bind(this);
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }
    handleMessageInputChange(event) {
        var state:any = this.state;
        state.messageInput = event.target.value;
        state.textarea = event.target;
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
            .then( (response) => {
                console.log(response);
            var state: any = this.state;
                if(response.status === 200){
                    var statuses =['Laukia',
'Taisoma',
'Sutaisyta']
var cat = ['PC',
    'LAPTOP',
    'PLAYSTATION',
    'XBOX',
    'NINTENDO',
    'KINECT',
    'WII',
    'PSP'];
state.exists = true;
                    state.category = cat[ response.data.category];
                    state.status = statuses[ response.data.status];
                    state.display = true;
                    state.owner = response.data.owner;
                    state.date = response.data.date;
                    this.setState(state);
                }
            })
            .catch((error) => {
                var state :any = this.state;
                state.exists = false;
                state.display = true;
                this.setState(state);
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
              .then((response) => {
                  this.state.textarea.value = "";
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
                            <label>Iveskite taisomos įrangos kodą:</label>
                <input type="text" onChange={this.handleCodeInputChange} />
{this.state.display
    ?(
        this.state.exists
        ?  <div className="row">
        <div className="col-sm-2" ><label>{this.state.owner}</label></div>
        <div className="col-sm-2" ><label>{this.state.category}</label></div>
        <div className="col-sm-2" ><label>{this.state.status}</label></div>
        <div className="col-sm-2" ><label>{this.state.startDate}</label></div>
    
      </div>
      :<div>
    <label>Irašas nerastas</label>
    </div>
    )
    :<div></div>
}
                            <button className="btn btn-primary" onClick={this.sendCode}> Pateikti</button>
                        </div>
                        {this.props.user?
                        <div>
                            <label>Parašykite laišką svetainės administracijai:</label>
                            <div>
                    <textarea className="message-input" onChange={this.handleMessageInputChange} >
                    </textarea>
                                <div>
                                    <label>Rašoma dėl brokuotos prekės (administracija greičiau atsakys į šią žinutę)</label>
                        <input type="checkbox" onChange={this.handleCheckBoxChange}/>
                        <button className="btn btn-success" onClick={this.sendMessage}> Išsiųsti</button>
                                </div>

                            </div>
                        </div>
                        :<div></div>
                        }
                    </div>

    }
}