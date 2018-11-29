import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Newgooduser extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { user: null, admin: false, codeInput: "", messageInput: "", checkboxInput: false }
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    handleMessageInputChange(event) {
        var state: any = this.state;
        state.messageInput = event.target.value;
        this.setState(state);
    }

    handleCheckBoxChange(event) {
        var state: any = this.state;
        state.checkboxInput = event.target.value;
        this.setState(state);
    }

    public render() {

        return <div >
                   <div>
                       <span>Pavadinimas</span>
                   </div>
                <div>

                    <input type="text" onChange={this.handleMessageInputChange} />
                </div>
                   <div>
                       <span>Aprašymas</span>
            </div>
            <textarea className="message-input" onChange={this.handleMessageInputChange} >
            </textarea>
                   <div>
                       <span>Kaina</span>
            </div>
                   <div>

                       <input type="text" onChange={this.handleMessageInputChange} />
            </div>
            
            <div>
                <span>Miestas</span>
            </div>
                   <div>

                       <input type="text" onChange={this.handleMessageInputChange} />
            </div>
                   <div>
                       <span>Kiekis prekiu</span>
                       
            </div>
            <div>
                <input type="text" onChange={this.handleMessageInputChange} />
            </div>



                   <div>
                       <span>Išsaugoti skelbima</span>
                {/* <button onClick={this.sendMessage}> Išsiųsti</button> */}
                   </div>







               </div>

    }
}