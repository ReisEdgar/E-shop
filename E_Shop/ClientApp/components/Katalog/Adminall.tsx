import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Adminall extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            zaidimais: [],
            zaidimaisLoaded: false,
            Konsoles: [],
            KonsolesLoaded: false,

        };
        this.getzaidimai = this.getzaidimai.bind(this);
 
    }

    getzaidimai() {
        fetch(`http://localhost:56789/api/zaidimai`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    zaidimais: res,
                    zaidimaisLoaded: true
                });
            });
        console.log(this.state.post);
    }

    componentWillMount() {
        this.getzaidimai();
    }

    public render() {

        var { zaidimais, zaidimaisLoaded, Konsoles, KonsolesLoaded } = this.state;

        if (!zaidimaisLoaded) {
            return <div>Loading Games...</div>
        }

        return (
            <div>
                <label>Žaidimai</label>

                <div className="row">
                    <div className="col-sm-2" ><label>Pavadinimas</label></div>
                    <div className="col-sm-2" ><label>Apibudinimas</label></div>
                    <div className="col-sm-2" ><label>Kategorija</label></div>
                </div>

                <ul>
                    {zaidimais.map(zaidimai => (
                    <li key={zaidimai.id}>
                            <table>Pavadinimas: {zaidimai.name}</table>
                    </li>
                    ))}
                </ul>

            </div>
            
            
            
            
            
            
            
            );
    }
}

/*
     <ul>
                       {zaidimais.map(zaidimai => (
                    <li key={zaidimai.id}>
                      <table>Pavadinimas</table>
                    </li>
                    ))}
                   </ul>
 */