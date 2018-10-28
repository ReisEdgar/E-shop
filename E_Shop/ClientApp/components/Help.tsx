import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { UserSupport } from './UserSupport';
import { AdminSupport } from './AdminSupport';

export class Help extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props: any) {
        super(props);
        this.state = { admin: false };
    }

    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Pagalba
                       {/* <small>Optional description</small>*/}
                </h1>
            </section>

            <section className="content container-fluid">
                {this.state.admin 
                    ?
                    <AdminSupport />
                    :
                    <UserSupport/>
                }
                <button onClick={() => { this.setState({ admin: !this.state.admin }) }}>admin</button>
            </section>
        </div>
    }
}