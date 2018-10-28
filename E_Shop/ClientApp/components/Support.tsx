import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Support extends React.Component<RouteComponentProps<{admin : any}>, any> {
    constructor(props:any) {
        super(props);
     }
 sendCode() {
    // var code = 
    }

    public render() {
        return <div>
            {this.props.route.admin} ? 
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
                            <input type="checkbox"/>
                            <button onClick={() => { this.sendCode() }}> Išsiųsti</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>;
    }
}

