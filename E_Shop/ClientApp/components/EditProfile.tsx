import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class EditProfile extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Profilio redagavimas
                    <small>Optional description</small>
                </h1>
            </section>

            <section className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Redaguoti profilį</h3>
                            </div>
                            <form role="form">
                                <div className="box-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">E. paštas</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Slaptažodis</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputFile">Avataras</label>
                                        <input type="file" id="exampleInputFile"/>

                                            <p className="help-block">Maksimalus leistinas failo dydis 10 MB</p>
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary">Išsaugoti</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    }
}