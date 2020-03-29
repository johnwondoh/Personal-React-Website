import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemExperience from './ItemExperience'
// import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FaCaretSquareDown } from 'react-icons/fa';
import { FaCaretSquareUp } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        fontFamily: 'Open Sans',
        margin: 'auto',
        marginTop: '0.7em'
    },
    button: {
        width: '50%',
        margin: '0 25%'
    },
    card: {
        width: '70%',
        margin: 'auto',
        marginBottom: '1em',
        background: 'rgb(221,233,249)',
        background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(249,249,250,1) 42%, rgba(112,183,244,0.1) 50%, rgba(241,248,251,1) 54%, rgba(237,246,251,1) 100%)',
        fontFamily: 'Open Sans',
    }
}
class EachExperience extends Component {
    constructor(props) {
        super(props);
        this.state = { showRes: false}
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
        
        const { classes } = this.props
        return (
            // <Col lg={6} className={classes.main}>
                <Card className={classes.card}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title className='text-center font-weight-bold'>{this.props.position}</Card.Title>
                        <Card.Subtitle className="mb-3 text-center">
                            {this.props.company}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted text-center font-weight-bold">
                            {this.props.subTitle}
                        </Card.Subtitle>
                        <Card.Text className='text-center'>
                            {this.props.town} | {this.props.country}
                            
                        </Card.Text>
                        <ListGroup flush className='text-muted'>  
                                {responsibilityItems}
                        </ListGroup>
                        <Button variant="info" 
                            onClick={this.showResponsibilities}
                            className={classes.button}>
                            {this.state.showRes ? 'Hide responsibilities ' : 'Show responsibilities ' }
                            {this.state.showRes ? <FaCaretSquareUp/> : <FaCaretSquareDown/> }
                        </Button>
                        
                    </Card.Body>
                </Card>
            // </Col>
        );
    }
}

export default withStyles(styles)(EachExperience);