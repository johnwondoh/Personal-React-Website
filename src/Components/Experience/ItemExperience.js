import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'


class ItemExperience extends Component {
    render() {
        // console.log('printing responsibility item')
        // console.log(this.props.resItem)
        return (
            <div>
                <ListGroupItem>{this.props.resItem}</ListGroupItem>
                {/* <li>{this.props.resItem}</li> */}
            </div>
        );
    }
}

export default ItemExperience;