import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {fetchCurrentUser} from "../UserFetcher";
import axios from "axios";

export class EditProfile extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    userAutentificationResponse(response) {
        if (response) {
            this.setState({ user: response, errorSet: false, error: null});
        }
    }
    componentDidMount() {
        console.log("parent");
        fetchCurrentUser(this.userAutentificationResponse);
    }
    
    updateProfile() {
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken}
        };
        var id = this.state.user.id;
        
        axios.put('/api/Users/' + id, this.state.user, config)
            .then( (response) => {
                this.setState({
                    error: false,
                    errorSet: true
                });
                console.log(response);
            })
            .catch(function (error) {
                this.setState({
                    error: true,
                    errorSet: true
                });
                console.log(error);
            });
    }

    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Profilio redagavimas
                </h1>
            </section>
            {this.state.errorSet == true ? (this.state.error == false ? 
                <div className='alert alert-success alert-dismissible'>Vartotojo informacija atnaujinta sėkmingai</div> :
                <div className='alert alert-danger alert-dismissible'>Vartotojo informacijos atnaujinti nepavyko</div>) : '' }
            {this.state.user ?
            <section className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Redaguoti profilį</h3>
                            </div>
                            <form method="post">
                                <div className="box-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Slapyvardis</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.user.nickname}
                                            placeholder="Įrašykite slapyvardį.."
                                            onChange={e =>
                                                this.setState({
                                                    ...this.state,
                                                    user: {
                                                        ...this.state.user,
                                                        nickname: e.target.value
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Aprašymas</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Aprašykite save.."
                                            value={this.state.user.description}
                                            onChange={e =>
                                                this.setState({
                                                    ...this.state,
                                                    user: {
                                                        ...this.state.user,
                                                        description: e.target.value
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block btn-flat"
                                    onClick={e => {
                                        this.updateProfile();
                                        e.preventDefault();
                                    }}
                                >
                                    Išsaugoti
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section> : <h3> Palaukite... </h3> }
        </div>
    }
}