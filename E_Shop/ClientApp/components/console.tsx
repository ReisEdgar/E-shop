import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class console extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        this.state = { open1: false }
        this.state = { open2: false }
        this.state = { open3: false }
        this.state = { open4: false }
        this.state = { open4: false }
    }


    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Konsoles
                       </h1>
            </section>
            <section className="content container-fluid">
                <section className="row">
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open1: !this.state.open1 }) }} className="btn btn-default btn-block">Playstation 3</button>
                        {
                            this.state.open1

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Playstation 3 Fat</button>
                                        <button type="button" className="btn btn-default btn-block">Playstation 3 Slim</button>
                                        <button type="button" className="btn btn-default btn-block">Playstation 3 Ultra slim</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }

                    </div>
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open2: !this.state.open2 }) }} className="btn btn-default btn-block">Playstation 4</button>
                        {
                            this.state.open2

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Playstation 4 Fat</button>
                                        <button type="button" className="btn btn-default btn-block">Playstation 4 Slim</button>
                                        <button type="button" className="btn btn-default btn-block">Playstation 4 Pro</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }
                    </div>
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open3: !this.state.open3 }) }} className="btn btn-default btn-block">Xbox 360</button>
                        {
                            this.state.open3

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Xbox 360 Fat</button>
                                        <button type="button" className="btn btn-default btn-block">Xbox 360 Slim</button>
                                        <button type="button" className="btn btn-default btn-block">Xbox 360 super slim</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }
                    </div>
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open4: !this.state.open4 }) }} className="btn btn-default btn-block">Xbox one</button>
                        {
                            this.state.open4

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Xbox one Fat</button>
                                        <button type="button" className="btn btn-default btn-block">Xbox one slim</button>
                                        <button type="button" className="btn btn-default btn-block">Xbox one x</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }
                    </div>
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open5: !this.state.open5 }) }} className="btn btn-default btn-block">Nintendo 3ds</button>
                        {
                            this.state.open5

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Nintendo 3ds xl</button>
                                        <button type="button" className="btn btn-default btn-block">Nintendo 3ds xl new</button>
                                        <button type="button" className="btn btn-default btn-block">Nintendo 2ds</button>
                                        <button type="button" className="btn btn-default btn-block">Nintendo 2ds xl new</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }
                    </div>
                    <div className="col-sm-2">
                        <button type="button" onClick={() => { this.setState({ open6: !this.state.open6 }) }} className="btn btn-default btn-block">Nintendo switch</button>
                        {
                            this.state.open6

                                ? <section className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-default btn-block">Konsole</button>
                                        <button type="button" className="btn btn-default btn-block">Priedai</button>
                                    </div>

                                </section>

                                : <div> </div>



                        }
                    </div>
                </section>
            </section>


        </div>
    }
}