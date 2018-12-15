import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Fetcher from 'request';
//import { fetchCurrentUser } from "./components/UserFetcher";
import axios from "axios";

export class Newgame extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            text: '',
            category: ''
        }

    }

    onChangename = (e) => {
        var state: any = this.state;
        state.name = e.target.value;
        this.setState(state);
    }

    onChangetext = (e) => {
        var state: any = this.state;
        state.text = e.target.value;
        this.setState(state);
    }

    onChangecategory = (e) => {
        var state: any = this.state;
        state.category = e.target.value;
        this.setState(state);

    }

    handleadd(e) {
        e.preventDefault();

        var data = {
            text: this.state.text,
            name: this.state.name,
            category: this.state.category
        };
        console.log(data);
        fetch('api/Zaidimai/Add',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': "bearer " + window.localStorage.accessToken
                },
                body: JSON.stringify(data)
            }).then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }
   
   

    public render() {
        const { name, text, category } = this.state;
        return <div className="container">
            <form onSubmit={this.handleadd}>
                <div className="box-header with-border">
                    <label>Pavadinimas</label>
                    <input
                        style={{ fontSize: 20 }}
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="Iveskite Skelbimo pavadinima..."
                        value={name}
                        onChange={this.onChangename}
                    />
                </div>
                <div className="form-group">
                    <label>Turinys</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        style={{ fontSize: 15 }}
                        placeholder="Rašykite komenstarą ..."
                        id="text"
                        value={text}
                        onChange={this.onChangetext}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label>Pasirinkti kategoriją</label>
                    <select className="form-control" id="category"
                            value={category} onChange={this.onChangecategory}>
                        <option value="0">Action</option>
                        <option value="1">Adventure</option>
                        <option value="2">Role Playing</option>
                        <option value="3">Simulation</option>
                        <option value="4">Strategy</option>
                        <option value="5">Sports</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-block btn-success btn-lg">Kurti naują Skelbima</button>
                </div>
            </form>
               </div>
    }
}