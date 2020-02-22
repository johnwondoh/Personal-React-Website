import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class EachAward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImage: 'https://mymvta.ca/wp-content/uploads/2018/11/gold-trophy-862x690.jpg'
        }
    }
    
    render() {
        return (
            < Col lg={6}>
                <Container>
                    <Card border='light' 
                    className='text-center' 
                    //style={{ width: '35rem' }}
                    >
                        <Card.Img variant="top" src={this.state.defaultImage} />
                        <Card.Body>
                            <Card.Title>{this.props.award}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {this.props.institute}
                            </Card.Subtitle>
                            <Card.Text>
                                {this.props.note}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
        );
    }
}

export default EachAward;