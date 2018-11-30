import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Fetcher from 'request';
import { fetchCurrentUser } from "./UserFetcher";

export class Newgame extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        this.state = { user: null, admin: false };
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
        this.handledescriptionchange = this.handledescriptionchange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.phonenumberChange = this.phonenumberChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);

    }

    NewGameItem() {
        var config = {
            headers: { 'Authorization': "bearer " + window.localStorage.accessToken }
        };


    }


    /*Kategorijos pakeitimas duombazej*/
    categoryChange(event) {
        var state: any = this.state;
        state.Gamecategory = event.target.value;
        this.setState(state);
    }

    /*Aprasymo pakeitimas*/
    handledescriptionchange(event) {
        var state: any = this.state
        state.description = event.target.value
        this.setState(state);

    }

    priceChange(event) {
        var state: any = this.state;
        state.price = event.target.value;
        this.setState(state);
    }

   nameChange(event) {
        var state: any = this.state;
       state.name = event.target.value;
        this.setState(state);
    }

    locationChange(event) {
        var state: any = this.state;
        state.location = event.target.value;
        this.setState(state);
    }


    phonenumberChange(event) {
        var state: any = this.state;
        state.phonenumber = event.target.value;
        this.setState(state);
    }


    quantityChange(event) {
        var state: any = this.state;
        state.quantity = event.target.value;
        this.setState(state);
    }

    userAutentificationResponse(response) {
        if (response) {
            this.setState({ user: response, admin: response.role == 3 });
        }
    }
    componentDidMount() {
        console.log("parent");
        fetchCurrentUser(this.userAutentificationResponse);
    }

    public render() {

        return <div className="container">

            <div> Žaidimo kategorija</div>
                   <select value={this.state.category} onChange={this.categoryChange}>
                       <option value="ACTION">ACTION</option>
                       <option value="Adventure">Adventure</option>
                       <option value="Role_playing">Role_playing</option>
                       <option value="Simulation">Simulation</option>
                       <option value="Strategy">Strategy</option>
                       <option value="Sports">Sports</option>
            </select>
            <div>
                <div>Pavadinimas</div>
                <input onChange={this.nameChange} />
                
            </div>
            <div>
                <div>Aprašymas</div>
                <textarea className="message-input" onChange={this.handledescriptionchange}></textarea>
            </div>
            <p>
                <div>Kaina</div>
                <input onChange={this.priceChange} placeholder="Valiuta tik €" />
            </p>
            <p>
                <div>Miestas</div>
                <input onChange={this.locationChange} />
            </p>
            <p>
                <div> Telefono numeris</div>
                <input onChange={this.phonenumberChange} />
            </p>
            <p>
                <div>Prekiu kiekis</div>
                <input onChange={this.quantityChange} />
            </p>

            <p>
                <div>Išsaugoti Skelbima</div>

            </p>
               </div>
    }
}