import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class NewKonsole extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Text: '',
            model: '',
            Category: ''
        }

    }

    onChangename = (e) => {
        var state: any = this.state;
        state.name = e.target.value;
        this.setState(state);
    }

    onChangeText = (e) => {
        var state: any = this.state;
        state.Text = e.target.value;
        this.setState(state);
    }

    onChangemodel = (e) => {
        var state: any = this.state;
        state.model = e.target.value;
        this.setState(state);
    }

    onChangecategory = (e) => {
        var state: any = this.state;
        state.Category = e.target.value;
        this.setState(state);
    }

    handleaddkonsole(e) {
        e.preventDefault();

        var data = {
            name: this.state.name,
            Text: this.state.Text,
            model: this.state.model,
            Category: this.state.Category
        };
        console.log(data);
        fetch('eddit', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': "bearer " + window.localStorage.accessToken
                },
                body: JSON.stringify(data)
            }).then(res => res.text())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    public render() {
        const { name, Text, model, Category } = this.state;
        return <div className="container">
            <form onSubmit={this.handleaddkonsole}>
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
                        id="Text"
                        value={Text}
                        onChange={this.onChangeText}>
                    </textarea>
                </div>
                <div className="box-header with-border">
                    <label>Modelis</label>
                    <input
                        style={{ fontSize: 20 }}
                        className="form-control"
                        type="text"
                        id="model"
                        placeholder="Iveskite Konsoles Modeli..."
                        value={model}
                        onChange={this.onChangemodel}
                    />
                </div>
                <div className="form-group">
                    <label>Pasirinkti kategoriją</label>
                    <select className="form-control" id="category"
                            value={Category} onChange={this.onChangecategory}>
                        <option value="0">Playstation</option>
                        <option value="1">Microsoft</option>
                        <option value="2">Nintendo</option>

                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-block btn-success btn-lg">Kurti naują Skelbima</button>
                </div>
            </form>
               </div>
    }
}