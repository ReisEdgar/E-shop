import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Fetcher from 'request';
import { fetchCurrentUser } from "./UserFetcher";
import axios from "axios";

export class Newgame extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { open: false, id:this.props.id, name: this.props.name, description: this.props.description, price: this.props.price, location: this.props.location, Gamecategory: this.props.Gamecategory, phonenumber: this.props.phonenumber, quantity: this.props.quantity,};
        this.userAutentificationResponse = this.userAutentificationResponse.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
        this.handledescriptionchange = this.handledescriptionchange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.phonenumberChange = this.phonenumberChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.NewGameItem = this.NewGameItem.bind(this);
    }

    NewGameItem() {
        var config = {
            headers: { 'Authorization': "bearer " + window.localStorage.accessToken }
        };
        var games = { Id: this.props.id, name: this.state.name, description: this.state.description, price: this.state.price, location: this.state.location, Gamecategory: this.state.Gamecategory, phonenumber: this.state.phonenumber, quantity: this.state.quantity };
        console.log(games);
        axios.post('/api/games', games, config)
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.openCreationForm();
    }

    openCreationForm() {
        var state: any = this.state;
        state.open = !this.state.open;
        this.setState(state);
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

            <label> Žaidimo kategorija</label>
                 <div> <select value={this.state.category} onChange={this.categoryChange}>
                       <option value="ACTION">ACTION</option>
                       <option value="Adventure">Adventure</option>
                       <option value="Role_playing">Role_playing</option>
                       <option value="Simulation">Simulation</option>
                       <option value="Strategy">Strategy</option>
                       <option value="Sports">Sports</option>
            </select>
            </div> 
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
            <button className="btn btn-success" onClick={this.NewGameItem}>Išsaugoti</button>
               </div>
    }
}