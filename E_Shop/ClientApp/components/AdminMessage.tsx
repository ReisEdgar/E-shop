import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AdminMessage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {showMessage : false};
    }

    public render() {
        return <div>
                <div>
                    <p>
                    <span>Siuntėjas:</span>
                    </p>
                    <p>
                        <span>{this.props.sender}</span>
                </p>
                {this.state.showMessage}?
                <div>
                    <span>{this.props.message}</span>

                    </div>
                :
                                <div>

                </div>
                <button onClick={() => { this.setState({ showMessage: !this.state.showMessage }) }}> {this.state.showMessage}? Suskleisti : Išskeilsti</button>
            </div>
        </div>;
    }
}

