import * as React from 'react';
import { AdminMessage } from './AdminMessage';
import axios from "axios";

export class AdminMessageList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state={messages : null}
        this.getMessages = this.getMessages.bind(this);
    }

    getMessages() {
    
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken}
       };
        axios.get('/api/Message/admin', config)
            .then( (response) => {
               // console.log(response);
    this.setState({messages : response.data})
            })
            .catch(function (error) {
                console.log(error);
            });   
         }

componentDidMount(){
    this.getMessages();
}

    public render() {

        return <div >
            {this.state.messages ?
                            this.state.messages.map(req =>
                        <tr  key={req.id}>
                            <AdminMessage refetch={this.getMessages} sender={req.senderEmail} message={req.text} id = {req.id} />

                        </tr>
                    )
                    :<div></div>
                }
        </div>
    }
}