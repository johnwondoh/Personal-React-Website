import React, { Component } from 'react';
import EachAward from './EachAward'
import Row from 'react-bootstrap/Row'
import { withStyles } from '@material-ui/styles'

const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        '& h2': {
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '3em',
            color: '#2488ed'
        },
        '& div': {
            backgroundColor: 'red',
            height: '2px',
            width: '5rem',
            margin: 'auto'
        },
        '& p': {
            paddingTop: '1.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em'
        }
        
    }
}

class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awards : [
                {
                    award: 'High Commendation',
                    institute: 'The Mike Miller Medal - University of South Australia',
                    note: 'Received in recognition of the contributions present in my PhD Thesis',
                    image: ''
                },
                {
                    award: 'High Commendation',
                    institute: 'The Mike Miller Medal - University of South Australia',
                    note: 'Received in recognition of the contributions present in my PhD Thesis',
                    image: ''
                }
            ]
        }
    }
    
    render() {
        let awards = this.state.awards.map(a => <EachAward 
        award={a.award} institute={a.institute}
        note={a.note} image={a.image}
        />)
        const { classes } = this.props
        return (
            <div>
                <div className={classes.sectionHeader}>
                    <h2>Awards & Scholarships</h2>
                    <div></div>
                    <p>
                        My Awards and Scholarships
                </p>
                </div>
                
                <Row>
                    {awards}
                </Row>
            </div>
        );
    }
}

export default withStyles(styles)(Awards);