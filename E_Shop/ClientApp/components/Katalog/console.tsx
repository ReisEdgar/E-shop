import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class console extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        
    }


    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Konsoles
                       </h1>
            </section>
           
                   <section className="content container-fluid">
                       <div className="col-sm-4">
                    <button type="button" className="btn btn-success btn-lg"><a href="/PlaystationKonsoles" style={{ color: 'white', textDecoration: 'none' }}>Playstation</a></button>
                       </div>
                       <div className="col-sm-4">
                    <button type="button" className="btn btn-success btn-lg"><a href="/MicrosoftKonsoles" style={{ color: 'white', textDecoration: 'none' }}>Microsoft</a></button>
                       </div>
                       <div className="col-sm-4">
                    <button type="button" className="btn btn-success btn-lg"><a href="/NintendoKonsoles" style={{ color: 'white', textDecoration: 'none' }}>Nintendo</a></button>
                       </div>
                      

                   </section>


        </div>
    }
}