import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { AdminMessageList } from './AdminMessageList';
import { AdminHardwareList } from './AdminHardwareList';

export class AdminSupport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {messageList : true}
    }

    public render() {

        return <div >
            <form id="admin-support-form" >
                <input type="radio" onClick={() => { this.setState({ messageList: true }) }} name="content" value="messages" /> Žinutės
                <input type="radio" onClick={() => { this.setState({ messageList: false }) }} name= "content" value="hardware" /> Taisoma įranga
                </form>

{
 this.state.messageList
 ?   <AdminMessageList/>
:    <AdminHardwareList/>
}
                   
        </div>
    }
}