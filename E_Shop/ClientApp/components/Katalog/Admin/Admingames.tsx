import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AdminGames extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            zaidimais: [],
            zaidimaisLoaded: false,
            

        };
        this.getzaidimai = this.getzaidimai.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

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

    handleDelete(e) {
        e.preventDefault();
        fetch("api/Zaidimai/Delete", {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "bearer " + window.localStorage.accessToken
                },
                body: JSON.stringify(this.state.post)
            })
            .then(res => res.text())
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));
    }

    public render() {

        var { zaidimais, zaidimaisLoaded, Konsoles, KonsolesLoaded } = this.state;

        if (!zaidimaisLoaded) {
            return <div>Loading Games...</div>
        }

        return (
            <div>
                <label style={{ fontSize: 40 }}>Žaidimai</label>

  

                <ul>
                    {zaidimais.map(zaidimai => (
                        <div className="box"
                            style={{
                                width: "50%",
                                borderWidth: 5,
                                borderRadius: 20,
                                padding: 5
                            }}
                            key={zaidimai.id}
                        >
                           
                            <div className="box-body" style={{ fontSize: 20 }}>
                               Pavadinimas: {zaidimai.name}
                            </div>
                            <div className="box-body" style={{ fontSize: 10
                            }}>
                                Apibudinimas:  {zaidimai.text}
                               
                            </div>
                            <div
                                className="box-footer"
                                style={{
                                    textAlign: "right"
                                }}
                            >
                                
                            </div>
                            <span className="label label-danger" onClick={this.handleDelete}>Ištrinti</span>


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