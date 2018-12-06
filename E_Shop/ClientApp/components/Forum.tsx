import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Forum extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { forums: [] }
        //orumLoader: false
        this.getForums = this.getForums.bind(this);
    }

    getForums() {
        this.setState({
            forumLoader: true
        });
        fetch('http://localhost:56147/api/forum')
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    console: console.log(res),
                    forums: res,
                    forumLoader: false
                });
            });
    }

    componentDidMount(){
        this.getForums();
    }

    /*public render() {

        return (
            <table className="table table-bordered">
                <tr><th>name</th><th>year</th></tr>
                {
                    this.state.forums.map((dynamicData) =>
                        <tr className="trow"> <td>  {dynamicData.title}
                        </td>
                        </tr>
                    )}
            </table>


        )
    }*/


    public render() {

        return <div className="container">
            <section className="content-header">
                <h1>
                    Forumas
                    </h1>
            </section>

            <section className="content container-fluid">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Forumų kategorijos</h3>
                    </div>
                    <div className="box-body">
                        <table className="table table-bordered">
                            <tbody><tr>
                                <th>Kategorija</th>
                                <th style={{ width: "150px" }}>Temų skaičius</th>
                            </tr>
                                {
                                    this.state.forums.map((dynamicData) =>
                                        <tr className="trow" key={dynamicData.id} >
                                            <td>
                                                <a href={"forum/"+ dynamicData.link}>{dynamicData.title}</a>
                                            </td>
                                            <td>
                                                <span className="badge bg-red">neveikia</span>
                                            </td>
                                        </tr>
                                )}
                            </tbody></table>
                    </div>
                </div>
            </section>
            <button type="button" className="btn btn-success btn-lg"><a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Atgal</a></button>
        </div>
    }
}