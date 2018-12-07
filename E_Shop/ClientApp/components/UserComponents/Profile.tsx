import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Link} from "react-router-dom";
import { fetchCurrentUser } from "../UserFetcher";

class Profile extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props) {
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
                    Profilis
                </h1>
            </section>

            {this.state.user ?
                <section className="content container-fluid">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="box box-primary">
                            <div className="box-body box-profile">
                                <img className="profile-user-img img-responsive img-circle"
                                     src={this.state.user.picture} alt="User profile picture"/>

                                    <h3 className="profile-username text-center">{this.state.user.fullName}</h3>

                                    <p className="text-muted text-center">{this.state.user.nickname}</p>

                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Forumo slapyvardis</b> <a className="pull-right">{this.state.user.nickname || "-"}</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Sistemos rolė</b> <a className="pull-right">{this.state.user.getRoleName()}</a>
                                        </li>
                                    </ul>

                                    <Link to="edit-profile" className="btn btn-primary btn-block"><b>Redaguoti profilį</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Apie mane</h3>
                            </div>
                            <div className="box-body">
                                
                                <strong><i className="fa fa-pencil margin-r-5"></i> Pomėgiai</strong>

                                <p>
                                    <span className="label label-danger">MMORPG</span>
                                    <span className="label label-success">PS4</span>
                                    <span className="label label-info">Nintendo switch</span>
                                    <span className="label label-warning">GamersClub</span>
                                    <span className="label label-primary">GTA V</span>
                                </p>

                                <br/>

                                <strong><i className="fa fa-file-text-o margin-r-5"></i> Aprašymas</strong>

                                <p>{this.state.user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.admin ? 
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className="box box-default">
                            <div className="box-header with-border">
                                <h3 className="box-title">Administratoriaus panelė</h3>
                            </div>
                            <div className="box-body">
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <Link to='user-list' className='btn btn-lg btn-primary'>Vartotojų lentelė</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''}
            </section> : <h3> Palaukite... </h3> }
        </div>
    }
}

export default Profile