import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemExperience from './ItemExperience'
// import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Container from 'react-bootstrap/Container'

class EachExperience extends Component {
    constructor(props) {
        super(props);
        this.state = { showRes: true}
        this.showResponsibilities = this.showResponsibilities.bind(this)
    }

    showResponsibilities(){
        let newShow = !this.state.showRes
        this.setState({showRes: newShow})
    }
    
    render() {

        let responsibilityItems =this.state.showRes ? 
                                    this.props.responsibilities.map(item => 
                                    <ItemExperience 
                                    resItem={item}/>) :
                                    ''
                                    
        return (
            <Container>
                <p>experience</p>
                <Card style={{ width: '35rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title className='text-center'>{this.props.position}</Card.Title>
                        <Card.Subtitle className="mb-2 text-center">
                            {this.props.company}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted text-center">
                            {this.props.subTitle}
                        </Card.Subtitle>
                        <Card.Text className='text-center'>
                            {this.props.town} | {this.props.country}
                            
                        </Card.Text>
                        <ListGroup flush className='text-muted'>  
                                {responsibilityItems}
                        </ListGroup>
                        <Button variant="info" size="sm" block
                            onClick={this.showResponsibilities}
                            className='mt-2 text-center'>
                            {this.state.showRes ? 'Hide responsibilities' : 'Show responsibilities' }
                        </Button>
                        
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default EachExperience;