﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AdminKonsoles extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            Konsoles: [],
            KonsolesLoaded: false,

        };
        this.getKonsole = this.getKonsole.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    getKonsole() {
        fetch(`http://localhost:56789/api/Konsole`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    Konsoles: res,
                    KonsolesLoaded: true
                });
            });
        console.log(this.state.post);
    }

    handleDelete(e) {
        e.preventDefault();
        fetch("api/Konsole/Delete", {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "bearer " + window.localStorage.accessToken
                },
                body: JSON.stringify(this.state.post)
            })
            .then(res => res.text())
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));
    }


    componentWillMount() {
        this.getKonsole();
    }

    public render() {

        var { Konsoles, KonsolesLoaded } = this.state;

        if (!KonsolesLoaded) {
            return <div>Loading Konsoles...</div>
        }

        return (
            <div>
                <label style={{ fontSize: 40 }}>Konsolės</label>



                <ul>
                    {Konsoles.map(konsole => (
                        <div className="box"
                            style={{
                                width: "50%",
                                borderWidth: 5,
                                borderRadius: 20,
                                padding: 5
                            }}
                            key={konsole.id}
                        >
                            <div className="box-body" style={{ fontSize: 20 }}>
                               Pavadinimas: {konsole.name}
                            </div>
                            <div className="box-body" style={{
                                fontSize: 15
                            }}>
                               Modelis Konsoles: {konsole.model}
                            </div>
                            <div className="box-body" style={{
                                fontSize: 15
                            }}>
                                Apibudinimas: {konsole.text}
                            </div>
                            <span className="label label-danger" onClick={this.handleDelete}>Ištrinti</span>



                        </div>
                    ))}
                </ul>

            </div>

        );
    }
}


// <table>Pavadinimas: {zaidimai.name}</table>
/*
     <ul>
                       {zaidimais.map(zaidimai => (
                    <li key={zaidimai.id}>
                      <table>Pavadinimas</table>
                    </li>
                    ))}
                   </ul>
 */