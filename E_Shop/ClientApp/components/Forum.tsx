import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Forum extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Forumas
                    </h1>
            </section>

            <section className="content container-fluid">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Forumų kategorijos</h3>
                    </div>
                    <div className="box-body">
                        <table className="table table-bordered">
                            <tbody><tr>
                                <th>Kategorija</th>
                                <th style={{ width: "150px" }}>Temų skaičius</th>
                            </tr>
                                <tr>
                                    <td><Link to='/forum/konsoles'>Konsolės žaidimai</Link></td>
                                    <td><span className="badge bg-red">12</span></td>
                                </tr>
                                <tr>
                                    <td><Link to='/forum/pc'>PC žaidimai</Link></td>
                                    <td><span className="badge bg-yellow">15</span></td>
                                </tr>
                                <tr>
                                    <td><Link to='/forum/iranga'>Įranga</Link></td>
                                    <td><span className="badge bg-light-blue">7</span></td>
                                </tr>
                                <tr>
                                    <td><Link to='/forum/kita'>Kita</Link></td>
                                    <td><span className="badge bg-green">25</span></td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
            <button type="button" className="btn btn-success btn-lg"><a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Atgal</a></button>
        </div>
    }
}