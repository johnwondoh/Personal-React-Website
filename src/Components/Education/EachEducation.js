import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        margin: 'auto',
        backgroundColor: '#f2f4f5',
        height: '18rem',
        '& img' : {
            width: '8rem',
            margin: 'auto'
        },
        border: '2px solid #1f8dc4',
        borderRadius: '5%',
        marginBottom: '2rem',
        padding: '0.5rem'
        // color: 'white'
    },
    card: {
        border: 'none',
        backgroundColor: 'transparent'
    }
}

class EachEducation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props
        return (
            <div class={classes.main}>
                <Card className={classes.card}>
                    <Card.Img variant="left" src={this.props.logo}/>
                    <Card.Body className='mx-0' >
                        <Card.Title>{this.props.institution}</Card.Title>
                        <Card.Subtitle>
                            {this.props.programme} | {this.props.award}
                        </Card.Subtitle>
                        <Card.Text>
                            <small class="text-muted">
                                {this.props.startYear} - {this.props.endYear}
                            </small>
                            <div>
                                brief information about what I learned here
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            // </div>
        );
    }
}

export default withStyles(styles)(EachEducation);