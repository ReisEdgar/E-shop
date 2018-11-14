import * as React from 'react';
import axios from "axios";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import HardwareItem from './HardwareItem';
export class AdminHardwareList extends React.Component<any,any> {
  constructor(props) {
      super(props);    
      this.state = {open: false, status:"WAITING", category:"XBOX", owner:"", date:"", items:null};
      this.newHardwareItem = this.newHardwareItem.bind(this);
      this.statusChange = this.statusChange.bind(this);
      this.categoryChange = this.categoryChange.bind(this);
      this.ownerInputChange = this.ownerInputChange.bind(this);
      this.dateInputChange = this.dateInputChange.bind(this);
      this.openCreationForm = this.openCreationForm.bind(this);

    }

    openCreationForm(){
    var state: any = this.state;
    state.open = !this.state.open;       
this.setState(state);    
 }

    newHardwareItem(){
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken}
       };
       var hardware = {Status: this.state.status, Category : this.state.category, Owner: this.state.owner, StartDate: this.state.date};
     console.log(hardware);
       axios.post('/api/Hardware', hardware, config)
            .then( (response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });   
            this.openCreationForm();
           }

    statusChange(event){        
        var state: any = this.state;
            state.status = event.target.value;       
        this.setState(state);      
    }
    categoryChange(event){
        var state: any = this.state;
        state.category = event.target.value;       
    this.setState(state);       
    }

    ownerInputChange(event){    
        var state: any = this.state;
        state.owner = event.target.value;       
    this.setState(state);      
    }

    dateInputChange(event){
        var state: any = this.state;
        state.date = event.target.value;       
    this.setState(state);      
    }

componentDidMount(){
    var config = {
        headers: {'Authorization': "bearer " + window.localStorage.accessToken}
   };



       axios.get('/api/Hardware', config)
        .then( (response) => {
            var state: any = this.state;

var statuses =['WAITING',
'REPARING',
'REPAIRED',
'WAITING_FOR_PARTS_DELIVERY'];
var cat = ['PC',
    'LAPTOP',
    'PLAY_STATION',
    'XBOX',
    'NINTENDO',
    'KINECT',
    'WII',
    'PSP'];

for(var i = 0; i < response.data.length; i++){
    response.data[i].category = cat[ response.data[i].category];
    response.data[i].status = statuses[ response.data[i].status];

}

            state.items = response.data;      
        this.setState(state); 
        })
        .catch(function (error) {
            console.log(error);
        });   
}

  render() {
    return (
        <div><Row>
                                       <Col span={2}>ddd</Col>
                                       <Col span={2}>ddd</Col>
                                       <Col span={2}>ddd</Col>
                                       <Col span={2}>ddd</Col>
                       
                                   </Row>  
            {this.state.items ?
                                       
                            this.state.items.map(req =>
                        <div  key={req.id}>
                            <HardwareItem id={req.id} owner={req.owner} startDate={req.startDate} status = {req.status} category = {req.category}  />

                        </div>
                    )
                    :<div></div>
                }
            <button onClick={this.openCreationForm}> Pridėti naują įrašą </button>
            {
                this.state.open
                    ? <div>
                        <p>
                            <span>Statusas</span>
                            <select onChange={this.statusChange}>
                                <option value = "WAITING">Laukia eilėje</option>
                                <option value = "REPARING">Taisoma</option>         
                                <option value = "REPAIRED">Sutaisyta</option>
                                <option value = "WAITING_FOR_PARTS_DELIVERY">Laukiama nauju detalių</option>                       

                            </select>                        </p>
                        <p>
                            <span>Kategorija</span>
                            <select onChange={this.categoryChange}>
                            <option value = "PC">PC</option>                
                            <option value = "LAPTOP">LAPTOP</option>
                            <option value = "PLAY_STATION">PLAYSTATION</option>
                                <option value = "Xbox">Xbox</option>
                                <option value = "NINTENDO">NINTENDO</option>
                                <option value = "KINECT">KINECT</option>
                                <option value = "WII">PS3</option>
                                <option value = "PS4">PS4</option>
                                <option value = "PSP">PSP</option>

                                </select>
                        </p>                        <p>
                            <span>Savininkas</span>
                            <input onChange={this.ownerInputChange}/>
                        </p>                        <p>
                            <span>Pridavimo data</span>
                            <input onChange={this.dateInputChange} placeholder = "Pvz.: 2018-03-25"/>
                        </p>
                        <button onClick={this.newHardwareItem}>Pridėti</button>
                    </div>
                    : <div> </div>


            }
            </div>
    );
  }
}

