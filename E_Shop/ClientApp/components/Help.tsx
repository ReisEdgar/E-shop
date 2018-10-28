import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Help extends React.Component<RouteComponentProps<{  }>, any> {
    constructor(props: any) {
        super(props);
        this.state = { admin: false };
    }

    sendCode() {

    }

    public render() {
       
        return <div className="container">
            <section className="content-header">
                    <h1>
                        Pagalba
                        <small>Optional description</small>
                    </h1>
                </section>

                <section className="content container-fluid">
                {this.state.admin ?
                    <div>

                    </div >
                    :
                    <div>
                        <div>
                            <span>Iveskite taisomos įrangos kodą:</span>
                            <input id="code-input" />
                            <button onClick={() => { this.sendCode() }}> Pateikti</button>
                        </div>
                        <div>
                            <span>Parašykite laišką svetainės administracijai:</span>
                            <div>
                                <input id="message-input" />
                                <div>
                                    <span>Rašoma dėl brokuotos prekės (administracija greičiau atsakys į šią žinutę)</span>
                                    <input type="checkbox" />
                                    <button onClick={() => { this.sendCode() }}> Išsiųsti</button>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    }
}