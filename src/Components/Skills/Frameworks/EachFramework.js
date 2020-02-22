import React, { Component } from 'react';
import './EachFramework.css'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { withStyles} from '@material-ui/styles'

const styles = {
    skill: {
        // backgroundColor: 'red',
        // border: '3px solid green'
        '& img': {
            height: '8rem'
        },
        '& h4': {
            fontSize: '1.2rem',
            paddingTop: '0.7rem',
            fontFamily: 'Open Sans'
        }
    }
}

class EachFramework extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultImage: ''
        }
    }
    
    render() {
        const {classes} = this.props
        const bigLogo = ['MongoDB']
        console.log(bigLogo.includes(this.props.title))
        let rangeArray = bigLogo.includes(this.props.title) ?
            [8, 12] : [4, 6]
        return (
            <Col md={rangeArray[0]} sm={rangeArray[1]} className={classes.skill}>
                <div className='p-2 text-center'>
                    <img src={this.props.imageUrl} />
                    <h4 className='text-center'>{this.props.title}</h4>
                    {/* <p>{this.props.rate}</p> */}
                </div>
            </Col>
        );
    }
}

export default withStyles(styles)(EachFramework);