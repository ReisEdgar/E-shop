import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Link} from "react-router-dom";

export class UserList extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Vartotojų sąrašas
                    <small>Optional description</small>
                </h1>
            </section>

            <section className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Vartotojai</h3>

                                <div className="box-tools">
                                    <div className="input-group input-group-sm" style={{width: '400px'}}>
                                        <input type="text" name="table_search" className="form-control pull-left"
                                               placeholder="Ieškoti pagal vardą"/>

                                            <div className="input-group-btn">
                                                <button type="submit" className="btn btn-default"><i
                                                    className="fa fa-search"></i></button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody>
                                    <tr>
                                        <th>Vartotojas</th>
                                        <th>Narys nuo</th>
                                        <th>Rolė</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>11-7-2014</td>
                                        <td><span className="label label-success">Vartotojas</span></td>
                                        <td><Link to={'edit-profile'}>Redaguoti</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Alexander Pierce</td>
                                        <td>11-7-2014</td>
                                        <td><span className="label label-warning">Administratorius</span></td>
                                        <td><Link to={'edit-profile'}>Redaguoti</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Bob Doe</td>
                                        <td>11-7-2014</td>
                                        <td><span className="label label-success">Vartotojas</span></td>
                                        <td><Link to={'edit-profile'}>Redaguoti</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Mike Doe</td>
                                        <td>11-7-2014</td>
                                        <td><span className="label label-success">Vartotojas</span></td>
                                        <td><Link to={'edit-profile'}>Redaguoti</Link></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    }
}