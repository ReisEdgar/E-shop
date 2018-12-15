import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MicrosoftKonsoles extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            Konsoles: [],
            KonsolesLoaded: false,

        };
        this.getKonsole = this.getKonsole.bind(this);

    }

    getKonsole() {
        fetch(`http://localhost:56789/api/Konsole/1/Category`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    Konsoles: res,
                    KonsolesLoaded: true
                });
            });
        console.log(this.state.post);
    }

    componentWillMount() {
        this.getKonsole();
    }

    public render() {

        var { Konsoles, KonsolesLoaded } = this.state;

        if (!KonsolesLoaded) {
            return <div>Loading Konsoles...</div>
        }

        return (
            <div>
                <label style={{ fontSize: 40 }}>Konsolės</label>



                <ul>
                    {Konsoles.map(konsole => (
                        <div className="box"
                            style={{
                                width: "50%",
                                borderWidth: 5,
                                borderRadius: 20,
                                padding: 5
                            }}
                            key={konsole.id}
                        >
                            <div className="box-body" style={{ fontSize: 20 }}>
                                Pavadinimas: {konsole.name}
                            </div>
                            <div className="box-body" style={{
                                fontSize: 15
                            }}>
                                Modelis Konsoles: {konsole.model}
                            </div>
                            <div className="box-body" style={{
                                fontSize: 10
                            }}>
                                Apibudinimas: {konsole.text}
                            </div>




                        </div>
                    ))}
                </ul>

            </div>

        );
    }
}


// <table>Pavadinimas: {zaidimai.name}</table>
/*
     <ul>
                       {zaidimais.map(zaidimai => (
                    <li key={zaidimai.id}>
                      <table>Pavadinimas</table>
                    </li>
                    ))}
                   </ul>
 */