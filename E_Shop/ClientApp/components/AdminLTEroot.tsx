import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header } from './AdminLTEComponents/Header';
import { Sidebar } from './UnusedComponents/Sidebar';
import { Footer } from './AdminLTEComponents/Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class AdminLTEroot extends React.Component<LayoutProps, {}> {
     
    public render() {
        var minHeight = {
            minHeight: '868px',
        };
        return <div id="modalRoot" className="wrapper">
            <Header />
            <div className="content-wrapper" style={minHeight}>  
                {this.props.children}
            </div>
            <Footer/>
            </div>
    }
}
