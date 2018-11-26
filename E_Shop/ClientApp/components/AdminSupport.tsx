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

<form>
<div className="radio">
  <label><input onClick={() => { this.setState({ messageList: true }) }} type="radio" name="optradio" />Žinutės</label>
</div>
<div className="radio">
  <label><input onClick={() => { this.setState({ messageList: false }) }} type="radio" name="optradio"/>Taisoma įranga</label>
</div>
</form>
{
 this.state.messageList
 ?   <AdminMessageList/>
:    <AdminHardwareList/>
}
                   
        </div>
    }
}