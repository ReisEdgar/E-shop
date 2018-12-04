﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class EditPost extends React.Component<RouteComponentProps<{}>, {}> {


    public render() {

        return <div className="container">
            <div className="box box-success" style={{
                marginTop: '5%',
                width: '70%',
                borderWidth: 5,
                borderRadius: 20,
                padding: 5
            }}>
                <div className="box-header with-border">
                    <h2><i><b><label>Temos pavadinimas</label>
                        <input type="text" className="form-control" placeholder="Įveskite temos pavadinimą ..." /></b></i></h2>
                </div>
                <div className="box-body" style={{ fontSize: 20 }}>
                    <div className="form-group">
                        <label>Turinys</label>
                        <textarea className="form-control" rows={3} style={{ fontSize: 20 }} placeholder="Rašykite komenstarą ...">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Pasirinkti kategoriją</label>
                        <select className="form-control">
                            <option>PC žaidimai</option>
                            <option>Konsolių žaidimai</option>
                            <option>Įranga</option>
                            <option>Kita</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-block btn-success btn-lg">Išsaugoti</button>
                  </div>
                <div className="box-footer" style={{
                    textAlign: 'right'
                }}>
                    <i>Marius 2018-12-04<br></br></i>
                    <i> Redaguota Admin 2018-12-05</i>
                </div>
            </div>
            <button type="button" className="btn btn-success btn-lg"><a href="/forum" style={{ color: 'white', textDecoration: 'none' }}>Atgal</a></button>

        </div>
    }
}