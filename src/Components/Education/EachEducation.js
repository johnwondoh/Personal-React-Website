import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        // margin: 'auto',
        // backgroundColor: '#f2f4f5',
        // height: '18rem',
        '& img' : {
            width: '8rem',
            margin: 'auto'
        },
        // border: '2px solid #1f8dc4',
        borderRadius: '5%',
        // marginBottom: '2rem',
        padding: '0.5rem',
        fontFamily: 'Open Sans',
        // margin: '10px 5px'
        // color: 'white'
        width: '70%',
        ['@media (max-width:992px)']: {
            width: '85%'
        },
        ['@media (max-width:780px)']: {
            width: '85%'
        },
        ['@media (max-width:576px)']: {
            width: '95%'
        },
        margin: 'auto',
        textAlign: 'center'
    },
    card: {
        // backgroundColor: '#f2f4f5',
        // backgroundColor: '#fcfcfc',
        background: 'rgb(221,233,249)',
        background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(249,249,250,1) 42%, rgba(112,183,244,0.1) 50%, rgba(241,248,251,1) 54%, rgba(237,246,251,1) 100%)',
        fontFamily: 'Open Sans',
        border: 'none',
        margin: '0 0.5em',
        paddingTop: '1em',
        paddingBottom: '2em',
        marginBottom: '1em',
        boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        border: '3px solid #dfe1eb',
        // backgroundColor: 'transparent'
        '& p': {
            fontSize: '0.9em',
            fontStyle: 'italic',
            lineHeight: '1.5em',
            width: '65%',
            margin: 'auto'
            // paddingTop: '1em',
            // backgroundColor: 'red'

        },
        '& div': {
            paddingBottom: '1em'
        }
        // '& small': {
        //     fontSize: '1em'
        // }
    }
}

class EachEducation extends Component {

    render() {
        const { classes } = this.props
        return (
            // <Col md={6} className={classes.main} >
            <div className={classes.main} >
                <Card className={classes.card}>
                    <Card.Img variant="left" src={this.props.logo}/>
                    <Card.Body className='mx-0' >
                        <Card.Title>{this.props.institution}</Card.Title>
                        <Card.Subtitle className='text-uppercase font-weight-bold text-monospace'>
                            {this.props.award} 
                        </Card.Subtitle>
                        <Card.Subtitle className="font-weight-bold">
                            {this.props.programme} 
                        </Card.Subtitle>
                        <Card.Subtitle className="text-muted">
                            {this.props.startYear} - {this.props.endYear}
                        </Card.Subtitle>
                        <Card.Text>
                            {/* <small className="text-muted">
                                {this.props.startYear} - {this.props.endYear}
                            </small> <br/> */}
                            
                            <span>
                                {this.props.moreInfo}
                            </span>
                                
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            // </div>
        );
    }
}

export default withStyles(styles)(EachEducation);