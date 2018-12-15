import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class games extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            games: [],
            
        };
        this.getgames = this.getgames.bind(this);

    }

    
    getgames() {
        this.setState({
            postsLoader: true
        });
        const { id } = this.props.match.params;
        fetch(`http://localhost:56789/api/Zaidimai/bycategory?id=${id}`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    post: res,
                    postsLoader: false
                });
            });
        console.log(this.state.post);
    }

    componentWillMount() {
        this.getgames();
    }

    public render() {

        const zaidimais = this.state;

        return <div className="container">
                   <section className="content-header">
                       <h1>
                           Žaidimai
                          
                       </h1>
                   </section>

                   <section className="content container-fluid">
                       <div className="col-sm-2">
                    
                    <button type="button" className="btn btn-success btn-lg"><a href="/ActionGames" style={{ color: 'white', textDecoration: 'none' }}>Action</a></button>
                   
                       </div>
                       <div className="col-sm-2">
                   
                    <button type="button" className="btn btn-success btn-lg"><a href="/AdventureGames" style={{ color: 'white', textDecoration: 'none' }}>Adventure</a></button>
                       </div>
                       <div className="col-sm-2">
                   
                    <button type="button" className="btn btn-success btn-lg"><a href="/RolePlayingGames" style={{ color: 'white', textDecoration: 'none' }}>Role Playing</a></button>
                       </div>
                       <div className="col-sm-2">
                   
                    <button type="button" className="btn btn-success btn-lg"><a href="/SimulationGames" style={{ color: 'white', textDecoration: 'none' }}>Simulation</a></button>
                       </div>
                       <div className="col-sm-2">
                    
                    <button type="button" className="btn btn-success btn-lg"><a href="/StrategyGames" style={{ color: 'white', textDecoration: 'none' }}>Strategy</a></button>
                       </div>
                       <div className="col-sm-2">
                   
                    <button type="button" className="btn btn-success btn-lg"><a href="/SportsGames" style={{ color: 'white', textDecoration: 'none' }}>Sports</a></button>
                       </div>

                   </section>
               </div>
    }
}