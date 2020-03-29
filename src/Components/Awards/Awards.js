import React, { Component } from 'react';
import EachAward from './EachAward'
import Row from 'react-bootstrap/Row'
import { withStyles } from '@material-ui/styles'
import { v4 as uuidv4 } from 'uuid'

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
            lineHeight: '1.7em',
            width: '70%',
            margin: 'auto',
            ['@media (max-width:780px)']: {
                width: '85%'
            }
        }
        
    },
    // awards: {
    //     // backgroundColor: 'blue',
    //     width: '85%',
    //     margin: 'auto'
    // }
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
                    image: 'highcommendation.jpg'
                },
                {
                    award: 'High Commendation',
                    institute: 'The Mike Miller Medal - University of South Australia',
                    note: 'Received in recognition of the contributions present in my PhD Thesis',
                    image: 'Best-Paper-APCCM-Certificate-001.jpg'
                },
                {
                    award: "University President's Scholarship (UPS)",
                    institute: 'University of South Australia',
                    note: 'Scholarship awarded for my Ph.D. sponsorship'
                },
                {
                    award: "Data to Decision (D2D) CRC Scholarship",
                    institute: 'PhD Industry Partner - University of South Australia',
                    note: 'Ph.D. sponsorship for contributions to D2D CRC'
                }
            ]
        }
    }
    
    render() {
        let awards = this.state.awards.map(a => <EachAward 
        award={a.award} institute={a.institute}
        note={a.note} image={a.image} key={uuidv4()}
        />)
        const { classes } = this.props
        return (
            <section id='awards'>
                <div className={classes.sectionHeader}>
                    <h2>Awards & Scholarships</h2>
                    <div></div>
                    <p>
                        I've received some awards and scholarships during and after 
                        my education. Here are a few notable ones. 
                    </p>
                </div>
                
                <div className={classes.awards}>
                    {/* <Row> */}
                        {awards}
                    {/* </Row> */}
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Awards);