import * as React from 'react';

class HardwareItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

render() {   
    return (
      <div>       
    <p>
        <span>Kategorija:</span>
    <span>{this.props.category}</span>
</p>
<p>
    <span>Statusas:</span>
    <span>{this.props.status}</span>
</p>            <p>
    <span>Pridavimo data:</span>
    <span>{this.props.startDate}</span>
</p>            <p>
    <span>Galima atsiimti nuo:</span>
    <span>{this.props.endDate}</span>
</p>            <p>
    <span>Papildoma informacija:</span>
    <span>{this.props.additionalInfo}</span>
</p> 
        </div>
    );
}
}

export default HardwareItem;
