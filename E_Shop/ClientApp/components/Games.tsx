import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class games extends React.Component<RouteComponentProps<{}>, any> {

    public render() {

        return <div className="container">
                   <section className="content-header">
                       <h1>
                           Žaidimai
                           <small>Optional description</small>
                       </h1>
                   </section>

                   <section className="content container-fluid">
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Action</button>

                       </div>
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Adventure</button>
                       </div>
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Role-playing</button>
                       </div>
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Simulation</button>
                       </div>
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Strategy</button>
                       </div>
                       <div className="col-sm-2">
                           <button type="button" className="btn btn-default btn-block">Sports</button>
                       </div>

                   </section>
               </div>
    }
}