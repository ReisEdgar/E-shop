import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Catalog extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
       
        return <div className="container">
            <section className="content-header">
                    <h1>
                        Katalogas
                        <small>Optional description</small>
                    </h1>
                </section>

                <section className="content container-fluid">
                    {/*/**/}
                    {/*| Your Page Content Here |*/}

            </section>
        </div>
    }
}