import * as React from 'react';

export class UserSupport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    sendCode() {

    }

    public render() {

        return <div >
                                  <div>
                            <span>Iveskite taisomos įrangos kodą:</span>
                            <input id="code-input" />
                            <button onClick={() => { this.sendCode() }}> Pateikti</button>
                        </div>
                        <div>
                            <span>Parašykite laišką svetainės administracijai:</span>
                            <div>
                    <textarea className="message-input" >
                    </textarea>
                                <div>
                                    <span>Rašoma dėl brokuotos prekės (administracija greičiau atsakys į šią žinutę)</span>
                                    <input type="checkbox" />
                                    <button onClick={() => { this.sendCode() }}> Išsiųsti</button>
                                </div>

                            </div>
                        </div>
                    </div>

    }
}