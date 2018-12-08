import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Link} from "react-router-dom";
import {fetchCurrentUser} from "../UserFetcher";
import axios from "axios";
import Modal from 'react-modal';
import Select from 'react-select';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        height: '30%'
    }
};

const roleOptions = [
    { value: 1, label: 'Vartotojas' },
    { value: 2, label: 'Forumo administratorius' },
    { value: 3, label: 'Administratorius' }
];

Modal.setAppElement('#react-app');

export class UserList extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            users: null,
            modalIsOpen: false,
            userRoles: [],
            successRoleUpdate: false
        };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
        this.usersAutentificationResponse = this.usersAutentificationResponse.bind(this);
        this.getRoleSpan = this.getRoleSpan.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleRoleSelectChange = this.handleRoleSelectChange.bind(this);
        this.updateUserRole = this.updateUserRole.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false, successRoleUpdate: false});
    }


    usersAutentificationResponse(response) {
        
        if (response) {
            this.setState({ users: response.data});
            var userRoles = [];
            this.state.users.map((user) => {
                userRoles.push({value: user.role, label: this.getRoleTitle(user.role)})
            });
            this.setState({
                userRoles: userRoles
            })
        }
    }
    userAutentificationResponse(response) {
        if (response) {
            this.setState({ user: response});
        }
    }
    componentDidMount() {
        console.log("parent");
        fetchCurrentUser(this.userAutentificationResponse);
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken}
        };
        axios.get('/api/Users', config)
            .then( (response) => {
                console.log(response);
                this.usersAutentificationResponse(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    getRoleSpan(role) {
        switch (role) {
            case 1:
                return <span className="label label-success">Vartotojas</span>;
            case 2:
                return <span className="label label-warning">Forumo administratorius</span>;
            case 3:
                return <span className="label label-danger">Administratorius</span>;
            default:
                return <span className="label label-success">Vartotojas</span>;
        }
    }

    getRoleTitle(role) {
        switch (role) {
            case 1:
                return "Vartotojas";
            case 2:
                return 'Forumo administratorius';
            case 3:
                return 'Administratorius';
            default:
                return "Vartotojas";
        }
    }
    
    updateUserRole(i) {
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken,
                'Content-Type': 'application/json'}
            
        };
        axios.put('/api/Users/updateRole/' + this.state.users[i].id, this.state.userRoles[i].value, config)
            .then( (response) => {
                console.log(response);
                var users = this.state.users;
                users[i].role = this.state.userRoles[i].value;
                this.setState({users: users, successRoleUpdate: true})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleRoleSelectChange(value, i)  {
        const userRoles = this.state.userRoles;
        userRoles[i] = {value: value, label: this.getRoleTitle(value)};

        // update state
        this.setState({
            userRoles: userRoles
        });
    };

    public render() {
        
        return <div className="container">
            <section className="content-header">
                <h1>
                    Vartotojų sąrašas
                </h1>
            </section>
            {this.state.users && this.state.user ? 
            <section className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Vartotojai</h3>

                                {/*<div className="box-tools">*/}
                                    {/*<div className="input-group input-group-sm" style={{width: '400px'}}>*/}
                                        {/*<input type="text" name="table_search" className="form-control pull-left"*/}
                                               {/*placeholder="Ieškoti pagal vardą"/>*/}
                                
                                            {/*<div className="input-group-btn">*/}
                                                {/*<button type="submit" className="btn btn-default"><i*/}
                                                    {/*className="fa fa-search"></i></button>*/}
                                            {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                            
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody>
                                    <tr>
                                        <th>Vartotojas</th>
                                        <th>Slapyvardis</th>
                                        <th>Rolė</th>
                                        <th></th>
                                    </tr>
                                    {this.state.users.map((user, i) => {
                                        if (this.state.user.id == user.id) return;
                                        return <tr key={user.id}>
                                            <td>{user.fullName}</td>
                                            <td>{user.nickname ? user.nickname : '-'}</td>
                                            <td>{this.getRoleSpan(user.role)}</td>
                                            <td><a style={{cursor: "pointer"}} onClick={this.openModal}>Redaguoti</a>
                                                <Modal
                                                    isOpen={this.state.modalIsOpen}
                                                    onRequestClose={this.closeModal}
                                                    style={customStyles}
                                                    contentLabel="Redaguoti"
                                                >
                                                    <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
                                                        {this.state.successRoleUpdate ? <div className="alert alert-success">
                                                            Sėkmingai atnaujinta vartotojo rolė
                                                        </div> : ''}
                                                    <div>Priskirti vartotojo rolę {user.fullName}:</div>
                                                    <Select
                                                        value={this.state.userRoles[i]}
                                                        onChange={(val)=> {this.handleRoleSelectChange(val.value, i)}}
                                                        options={roleOptions}
                                                    />
                                                        <button className="btn btn-default" style={{marginTop: "auto"}}  onClick={() => this.updateUserRole(i)}>Išsaugoti</button>
                                                    </div>
                                                </Modal></td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

            </section> : <h3> Palaukite... </h3>}
        </div>
    }
}