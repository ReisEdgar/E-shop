import * as React from 'react';
import Fetcher from 'request';
import User from '../../Classes/User'


export class MessagesDropdown extends React.Component<{}, {}> {
    constructor(){
        super();
        this.state = {};
    }
    
    public render() {
        
        return <li className="dropdown messages-menu">
            {/*<!-- Menu toggle button -->*/}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
               aria-expanded="false">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                    {/*<!-- inner menu: contains the messages -->*/}
                    <ul className="menu">
                        <li>{/*<!-- start message -->*/}
                            <a href="#">
                                <div className="pull-left">
                                    {/*<!-- User Image -->*/}
                                    <img src="../../dist/img/user2-160x160.jpg"
                                         className="img-circle"
                                         alt="User Image"/>
                                </div>
                                {/*<!-- Message title and timestamp -->*/}
                                <h4>
                                    Support Team
                                    <small><i className="fa fa-clock-o"></i> 5
                                        mins
                                    </small>
                                </h4>
                                {/*<!-- The message -->*/}
                                <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li>
                        {/*<!-- end message -->*/}
                    </ul>
                    {/*<!-- /.menu -->*/}
                </li>
                <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
        </li>         
    }
}