import * as React from 'react';
import axios from "axios";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import HardwareItem from './HardwareItem';
export class AdminHardwareList extends React.Component<any,any> {
  constructor(props) {
      super(props);    
      this.state = {open: false, status:"Laukia", category:"PC", owner:"", date:"", items:null};
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
        console.log(event)
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

fetchData(){
    var config = {
        headers: {'Authorization': "bearer " + window.localStorage.accessToken}
   };



       axios.get('/api/Hardware', config)
        .then( (response) => {
            var state: any = this.state;

var statuses =['Laukia',
'Taisoma',
'Sutaisyta']
var cat = ['PC',
    'LAPTOP',
    'PLAYSTATION',
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

componentDidMount(){
    this.fetchData(); 
}

  render() {
    return (
        <div>  <div className="row">
        <div className="col-sm-2" ><label>Savininkas</label></div>
        <div className="col-sm-2" ><label>Įrangos kategorija</label></div>
        <div className="col-sm-2" ><label>Statusas</label></div>
        <div className="col-sm-2" ><label>Pridavimo data</label></div>
    
      </div> 
            {this.state.items ?
<div className="container">

     { this.state.items.map(req =>
                        <div  key={req.id}>
                            <HardwareItem refetch={this.fetchData()} id={req.id} owner={req.owner} startDate={req.startDate} status = {req.status} category = {req.category}  />
     </div>)}
</div>
                    :<div></div>
                }
            <button className="btn btn-primary" onClick={this.openCreationForm}> Pridėti naują įrašą </button>
            {
                this.state.open
                    ? <div className="form-group">
                        <p>
                            <label>Statusas</label>
                            <select className="form-control" onChange={this.statusChange}>
                                <option value = "Laukia">Laukia eilėje</option>
                                <option value = "Taisoma">Taisoma</option>         
                                <option value = "Sutaisyta">Sutaisyta</option>

                            </select>                        </p>
                        <p>
                            <label>Kategorija</label>
                            <select className="form-control" onChange={this.categoryChange}>
                            <option value = "PC">PC</option>                
                            <option value = "LAPTOP">LAPTOP</option>
                            <option value = "PS">PLAYSTATION</option>
                                <option value = "Xbox">Xbox</option>
                                <option value = "NINTENDO">NINTENDO</option>
                                <option value = "KINECT">KINECT</option>
                                <option value = "WII">PS3</option>
                                <option value = "PSP">PSP</option>

                                </select>
                        </p>                        <p>
                            <label>Savininkas</label>
                            <input type="text" className="form-control" onChange={this.ownerInputChange}/>
                        </p>                        <p>
                            <label>Pridavimo data</label>
                            <input type="text" className="form-control" onChange={this.dateInputChange} placeholder = "Pvz.: 2018-03-25"/>
                        </p>
                        <button className="btn btn-success" onClick={this.newHardwareItem}>Pridėti</button>
                    </div>
                    : <div> </div>


            }
            </div>
    );
  }
}

