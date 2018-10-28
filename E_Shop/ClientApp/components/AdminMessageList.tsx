import * as React from 'react';
import { AdminMessage } from './AdminMessage';

export class AdminMessageList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {

        return <div >
            <AdminMessage sender="Jonas" />
            <AdminMessage sender="Petras" />
            <AdminMessage sender="Antanas" />
        </div>
    }
}