import * as React from 'react';
import { RouteComponentProps } from 'react-router';
//import Modal from 'react-responsive-modal';

export class AdminMessage extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {showMessage : false, open : false, buttonText : "Išskleisti"};
        this.openMessage = this.openMessage.bind(this);
        //this.onOpenModal = this.onOpenModal.bind(this);

      //  this.onCloseModal = this.onCloseModal.bind(this);


    }
     /*
    onOpenModal = () => {
        var state = this.state;
        state.open = true;
        this.setState(state);      
      };
     
    onCloseModal = () =>{
          var state = this.state;
          state.open = false;
          this.setState(state);      };*/

    openClose(value : any) {
        var state: any = this.state;

            state.open = value;
        
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
                        <span> ---- zinutes----</span>
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
                            <button onClick={() => { this.openClose(false) }}>Siųsti</button>

                        </div>
                        : <div></div>
                }
            </div>
        </div>;
    }
}

