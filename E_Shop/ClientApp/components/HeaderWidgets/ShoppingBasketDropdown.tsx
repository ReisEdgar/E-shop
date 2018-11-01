import * as React from 'react';
import Fetcher from 'request';
import User from '../../Classes/User'


export class ShoppingBasketDropdown extends React.Component<{}, {}> {
    constructor(){
        super();
        this.state = {};
    }

    public render() {

        return <li className="dropdown tasks-menu">
            {/*<!-- Menu Toggle Button -->*/}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
               aria-expanded="false">
                <i className="fa fa-shopping-cart"></i>
                <span className="label label-danger">9</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">Krepšelis</li>
                <li>
                    {/*<!-- Inner menu: contains the tasks -->*/}
                    <ul className="menu">
                        <li>{/*<!-- Task item -->*/}
                            <a href="#">
                                {/*<!-- Task title and progress text -->*/}
                                <h3>
                                    Design some buttons
                                    <small className="pull-right">20%</small>
                                </h3>
                                {/*<!-- The progress bar -->*/}
                                <div className="progress xs">
                                    {/*<!-- Change the css width attribute to simulate progress -->*/}

                                </div>
                            </a>
                        </li>
                        {/*<!-- end task item -->*/}
                    </ul>
                </li>
                <li className="footer">
                    <a href="#">View all tasks</a>
                </li>
            </ul>
        </li>
    }
}