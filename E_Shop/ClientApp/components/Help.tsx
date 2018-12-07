import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { UserSupport } from './UserSupport';
import { AdminSupport } from './AdminSupport';
import Fetcher from 'request';
import { fetchCurrentUser } from "./UserFetcher";
export class Help extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props: any) {
        super(props);
        this.state = { user:null, admin: false, loaded : false };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
    }

    userAutentificationResponse(response) {
        if (response) {
            this.setState({ user: response, admin: response.role == 3, loaded : true});
        }else{
            this.setState({ user: null, admin: false, loaded : true});
        }
    }
    componentDidMount() {
        console.log("parent");
        var result = fetchCurrentUser(this.userAutentificationResponse);
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
            {this.state.loaded 
              ?
               ( this.state.admin 
                    ?
                    <AdminSupport user = {this.state.user} />
                    :
                    <UserSupport user = {this.state.user} />)
                    :
                    <div></div>
                }
            </section>
        </div>
    }
}