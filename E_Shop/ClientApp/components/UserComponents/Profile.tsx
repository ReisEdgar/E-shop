import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from "react-router-dom";
import { fetchCurrentUser } from "../UserFetcher";
import axios from "axios";
class Profile extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props) {
        super(props);
        this.state = { user: null, admin: false, items : null, hardware : false };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
        this.fetchHardware = this.fetchHardware.bind(this);

    }

    fetchHardware() {
        var config = {
            headers: { 'Authorization': "bearer " + window.localStorage.accessToken }
        };


        axios.get('/api/Hardware', config)
            .then((response) => {
                var state: any = this.state;

                var statuses = ['Laukia',
                    'Taisoma',
                    'Sutaisyta']
                var cat = ['PC',
                    'LAPTOP',
                    'PLAYSTATION',
                    'XBOX',
                    'NINTENDO',
                    'KINECT',
                    'WII',
                    'PSP'];

                for (var i = 0; i < response.data.length; i++) {
                    state.hardware = true;
                    response.data[i].category = cat[response.data[i].category];
                    response.data[i].status = statuses[response.data[i].status];

                }

                state.items = response.data;
                this.setState(state);

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    userAutentificationResponse(response) {
        if (response) {

            this.setState({ user: response, admin: response.role == 3 });
            if (response.role == 1) {
                this.fetchHardware();
            }
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
                                        src={this.state.user.picture} alt="User profile picture" />

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

                                    <br />

                                    <strong><i className="fa fa-file-text-o margin-r-5"></i> Aprašymas</strong>

                                    <p>{this.state.user.description}</p>
                                    {this.state.admin ?
                                        <div></div>
:<div>
                                    <strong><i className="fa fa-file-text-o margin-r-5"></i> Taisoma įranga</strong>
                             {   this.state.hardware
                                        ? <div>
                                            <div>
                                                <div className="col-sm-4" ><label>Kategorija</label></div>
                                                <div className="col-sm-4" ><label>Statusas</label></div>
                                                <div className="col-sm-4" ><label>Pridavimo data</label></div>
                                            </div>
                                            {this.state.items.map(req =>
                                                <div key={req.id}>

                                                    <div className="col-sm-4" ><label>{req.category}</label></div>
                                                    <div className="col-sm-4" ><label>{req.status}</label></div>
                                                    <div className="col-sm-4" ><label>{req.startDate}</label></div>
                                                </div>)}


                                        </div>
                                        : <div></div>
                                            }
                                        </div>
                                    }

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
                </section> : <h3> Palaukite... </h3>}
        </div>
    }
}

export default Profile