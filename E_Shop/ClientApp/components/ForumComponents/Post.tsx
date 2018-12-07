import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Post extends React.Component<RouteComponentProps<{}>, {}> {


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
                    <h2><i><b>Neveikia ps4</b></i></h2>
                    <div className="box-tools pull-right">
                        <span className="label label-primary"><a href='/tema/redaguoti' style={{ color: 'white', textDecoration: 'none' }}>Redaguoti</a></span>
                        <span className="label label-warning">Užrakinti</span>
                      <span className="label label-danger">Ištrinti</span>
                    </div>
                  </div>
                <div className="box-body" style={{ fontSize: 20 }}>
                                    Sugedo playstation4, ką daryti?
                  </div>
                <div className="box-footer" style={{
                    textAlign: 'right'
                }}>
                                    <i>Marius 2018-12-04</i>
                  </div>
            </div>

            <div className="box" style={{
                width: '50%',
                borderWidth: 5,
                borderRadius: 20,
                padding: 5
            }}>
                <div className="box-header">
                    <div className="box-tools pull-right">
                        <span className="label label-primary"><a href='/komentaras/redaguoti' style={{ color: 'white', textDecoration: 'none' }}>Readaguoti</a></span>
                        <span className="label label-danger">Ištrinti</span>
                    </div>
                </div>
                <div className="box-body" style={{fontSize: 20}}>
                    Susitaisyk
                  </div>
                <div className="box-footer" style={{
                    textAlign: 'right'
                }}>
                    <i>Marius 2018-12-04</i>
                </div>
            </div>
            <div className="box" style={{
                width: '50%',
                borderWidth: 5,
                borderRadius: 20,
                padding: 5
            }}>
                <div className="box-header">
                    <div className="box-tools pull-right">
                        <span className="label label-primary"><a href='/komentaras/redaguoti' style={{ color: 'white', textDecoration: 'none' }}>Readaguoti</a></span>
                        <span className="label label-danger">Ištrinti</span>
                    </div>
                </div>
                <div className="box-body" style={{ fontSize: 20 }}>
                    Nzn
                  </div>
                <div className="box-footer" style={{
                    textAlign: 'right'
                }}>
                    <i>Marius 2018-12-04</i>
                </div>
            </div>

            <div className="box box-info" style={{
                width: `50%`,
                borderWidth: 5,
                borderRadius: 20
            }}>
                <div className="box-header with-border" style={{ fontSize: 20 }}>
                    <h3 className="box-title">Komentaro rašymo langas</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <div className="col-lg-12">
                                <textarea className="form-control" rows={3} style={{ fontSize: 20 }} placeholder="Rašykite komenstarą ..."></textarea>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right"
                                style={{borderWidth: 5, borderRadius: 20}}>Išsaugoti</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}