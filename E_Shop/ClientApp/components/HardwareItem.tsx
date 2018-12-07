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
                this.props.refetch();
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

  <div className="row">
    <div className="col-sm-2" ><label>{this.props.owner}</label></div>
    <div className="col-sm-2" ><label>{this.props.category}</label></div>
    <div className="col-sm-2" ><label>{this.props.status}</label></div>
    <div className="col-sm-2" ><label>{this.props.startDate}</label></div>
    <div className="col-sm-2" ><button className="btn btn-primary" onClick={this.openCreationForm}>Modifikuoti</button></div>
  </div>

            {this.state.open?
            
            <div><Row><div className="form-group">
                                                <Col span={2}>
                                                

                            <label>Savininkas</label>
                            <input type="text" className="form-control" value={this.state.owner} onChange={this.ownerInputChange}/>
                            </Col>  

                                                        <Col span={2}>

                            <label>Kategorija</label>
                            <select className="form-control" value={this.state.category}  onChange={this.categoryChange} style={myStyle}>
                            <option value = "PC">PC</option>                
                            <option value = "LAPTOP">LAPTOP</option>
                            <option value = "PS">PLAYSTATION</option>
                                <option value = "Xbox">Xbox</option>
                                <option value = "NINTENDO">NINTENDO</option>
                                <option value = "KINECT">KINECT</option>
                                <option value = "WII">PS3</option>
                                <option value = "PSP">PSP</option>

                                </select>
                                </Col>   
 
            <Col span={2}>
            <label>Statusas</label>
            
                            <select className="form-control" value={this.state.status} onChange={this.statusChange}>
                                <option value = "Laukia">Laukia</option>
                                <option value = "Taisoma">Taisoma</option>         
                                <option value = "Sutaisyta">Sutaisyta</option>
                            </select>         
                            </Col>                                                  
       
                            <Col span={2}>
  
                            <label>Pridavimo data</label>
                            <input type="text" className="form-control" value={this.state.startDate} onChange={this.dateInputChange} placeholder = "Pvz.: 2018-03-25"/>
                            </Col>               
                       
                            <Col span={2}>
                            </Col>               

           </div> </Row>
                            <button className="btn btn-success" onClick={this.newHardwareItem}>Išsaugoti</button>
                            <button className="btn btn-danger" onClick={this.openCreationForm}>Uždaryti</button>
           </div>
            :<div></div>}
        </div>
    );
}
}

export default HardwareItem;
