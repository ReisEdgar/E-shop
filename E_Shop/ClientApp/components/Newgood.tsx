import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Newgooduser } from './Newgooduser';
import { Newgoodadmin } from './Newgoodadmin';
import Fetcher from 'request';
import { fetchCurrentUser } from "./UserFetcher";

export class Newgood extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        this.state = { user: null, admin: false };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);

    }

    userAutentificationResponse(response) {
        if (response) {
            this.setState({ user: response, admin: response.role == 3 });
        }
    }
    componentDidMount() {
        console.log("parent");
        fetchCurrentUser(this.userAutentificationResponse);
    }

    public render() {

        return <div className="container">
                   <section className="content-header">
                       <h1>
                           Prekių įkelimas
                           {/* <small>Optional description</small>*/}
                       </h1>
                   </section>

                   <section className="content container-fluid">
                       {this.state.admin
                           ?
                    <Newgoodadmin user={this.state.user} />
                           :
                    <Newgooduser user={this.state.user} />
                       }
                   </section>
               </div>
    }
}