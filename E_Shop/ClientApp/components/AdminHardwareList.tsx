import * as React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
export class AdminHardwareList extends React.Component<any,any> {
  constructor(props) {
      super(props);    
      this.state = {open: false};
    }

    

  render() {
    return (
        <div>
       <Row>
                <Col span={2}>Statusas</Col>
                <Col span={2}>Kategorija</Col>
                <Col span={2}>Savininkas</Col>
                <Col span={2}>Pridavimo data</Col>
            </Row>
            <Row>
                <Col span={2}>Laukia eilėje</Col>
                <Col span={2}>Xbox</Col>
                <Col span={2}>Jonas Petrauskas</Col>
                <Col span={2}>2018-09-01</Col>
                <Col span={2}>Modifikuoti</Col>

            </Row>       <Row>
                <Col span={2}>Sutaisytas</Col>
                <Col span={2}>PSP</Col>
                <Col span={2}>Antanas Petrauskas</Col>
                <Col span={2}>2018-09-01</Col>
                <Col span={2}>Modifikuoti</Col>

            </Row>
            <button onClick={() => { this.setState({ open: !this.state.open }) }}> Pridėti naują įrašą </button>
            {
                this.state.open
                    ? <div>
                        <p>
                            <span>Statusas</span>
                            <select>
                                <option>Laukia eilėje</option>
                                <option>Taisoma</option>                       

                            </select>                        </p>
                        <p>
                            <span>Kategorija</span>
                            <select>
                                <option>Xbox</option>
                                <option>XboxOne</option>
                                <option>PS3</option>
                                <option>PS4</option>
                                <option>PSP</option>

                                </select>
                        </p>                        <p>
                            <span>Savininkas</span>
                            <input />
                        </p>                        <p>
                            <span>Pridavimo data</span>
                            <input />
                        </p>
                        <button onClick={() => { this.setState({ open: !this.state.open }) }}>Pridėti</button>
                    </div>
                    : <div> </div>


            }
            </div>
    );
  }
}

