import * as React from 'react';
import axios from "axios";
import { Row, Col } from 'react-simple-flex-grid';

class HardwareItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {open: false, status:this.props.status, category:this.props.category, owner:this.props.owner, date:this.props.startDate, items:null};
        this.newHardwareItem = this.newHardwareItem.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
        this.ownerInputChange = this.ownerInputChange.bind(this);
        this.dateInputChange = this.dateInputChange.bind(this);
        this.openCreationForm = this.openCreationForm.bind(this);
    }

    newHardwareItem(){
        var config = {
            headers: {'Authorization': "bearer " + window.localStorage.accessToken}
       };
       var hardware = {Id:this.props.id, Status: this.state.status, Category : this.state.category, Owner: this.state.owner, StartDate: this.state.date};
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
    openCreationForm(){
        var state: any = this.state;
        state.open = !this.state.open;       
    this.setState(state);    
     }



render() {   
    var myStyle = {
     width:'140px'
      };
    return (
      <div>       
               <Row>
                <Col span={2}>{this.props.owner}</Col>
                <Col span={2}>{this.props.category}</Col>
                <Col span={2}>{this.props.status}</Col>
                <Col span={2}>{this.props.startDate}</Col>
                <Col span={2}><button onClick={this.openCreationForm}>Modifikuoti</button></Col>

            </Row>  
            {this.state.open?
            
            <Row>
                                                <Col span={2}>
                            <span>Savininkas</span>
                            <input value={this.state.owner} onChange={this.ownerInputChange}/>
                            </Col>  
                                                        <Col span={2}>
                            <span>Kategorija</span>
                            <select value={this.state.category}  onChange={this.categoryChange} style={myStyle}>
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
                                </Col>    

            <Col span={2}>
            <span>Statusas</span>
            
                            <select onChange={this.statusChange}>
                                <option value = "WAITING">Laukia eilėje</option>
                                <option value = "REPARING">Taisoma</option>         
                                <option value = "REPAIRED">Sutaisyta</option>
                                <option value = "WAITING_FOR_PARTS_DELIVERY">Laukiama nauju detalių</option>                       
                            </select>         
                            </Col>                                                  
       
                            <Col span={2}>
  
                            <span>Pridavimo data</span>
                            <input value={this.state.startDate} onChange={this.dateInputChange} placeholder = "Pvz.: 2018-03-25"/>
                            </Col>               
                            <Col span={2}>
                            <button onClick={this.newHardwareItem}>Išsaugoti</button>
                            <button onClick={this.openCreationForm}>Uždaryti</button>
                            </Col>               
                            <Col span={2}>
                            </Col>               

            </Row>
            :<div></div>}
        </div>
    );
}
}

export default HardwareItem;
