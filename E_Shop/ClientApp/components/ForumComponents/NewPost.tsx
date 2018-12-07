import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class NewPost extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Text: '',
            Category: '',
            PublishingDate: '',
            Edited: false,
            EditedDate: '',
            ForumID: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDate() {
        var today = new Date().toISOString().slice(0, 10)
        console.log(today);
        return today;
    }


    onChangeTitle = (e) => {
        var state: any = this.state;
        state.Title = e.target.value;
        this.setState(state);
    }

    onChangeText = (e) => {
        var state: any = this.state;
        state.Text = e.target.value;
        this.setState(state);
    }

    onChangeCategory = (e) => {
        var state: any = this.state;
        state.Category = e.target.value;
        this.setState(state);
    }

    handleSubmit(e) {

        e.preventDefault();

        var data = {
            Text: this.state.Text,
            Title: this.state.Title,
            PublishingDate: this.getDate(),
            Category: this.state.Category,
            Edited: false, 
            EditedDate: this.getDate()
        };
        console.log(data);
        fetch('/api/post/kurti', {
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
        const { Title, Text, Category } = this.state;
        return <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="box box-success" style={{
                marginTop: '5%',
                width: '70%',
                borderWidth: 5,
                borderRadius: 20,
                padding: 5
            }}>
                <div className="box-header with-border">
                    <h2><i><b><label>Temos pavadinimas</label>
                        <input
                            style={{ fontSize: 20 }}
                            className="form-control"
                            type="text"
                            id="tema"
                            placeholder="Įveskite temos pavadinimą ..."
                            value={Title}
                            onChange={this.onChangeTitle}
                        />
                    </b></i></h2>
                </div>
                <div className="box-body" style={{ fontSize: 20 }}>
                    <div className="form-group">
                        <label>Turinys</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            style={{ fontSize: 15 }}
                            placeholder="Rašykite komenstarą ..."
                            id="turinys"
                            value={Text}
                            onChange={this.onChangeText}>
                        </textarea>
                    </div>
                        <div className="form-group">
                        <label>Pasirinkti kategoriją</label>
                            <select className="form-control" id="kategorija"
                                value={Category} onChange={this.onChangeCategory}>
                            <option value="0">PC žaidimai</option>
                            <option value="1">Konsolių žaidimai</option>
                            <option value="2">Įranga</option>
                            <option value="3">Kita</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-block btn-success btn-lg">Kurti naują temą</button>
                  </div>
                </div>
                </form>
            <button type="button" className="btn btn-success btn-lg"><a href="/forum" style={{ color: 'white', textDecoration: 'none' }}>Atgal</a></button>

        </div>
    }
}