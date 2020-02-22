import React, { Component } from 'react';
import EachEducation from './EachEducation'
import Container from 'react-bootstrap/Container'
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
            lineHeight: '1.7em',
            color: 'white'
        }
        
    },
    sectionStyle: {
        backgroundColor: 'black',
        '& Container': {
            paddingBottom: '10rem'
        },
        marginTop: '2rem'
    },
    container: {
        // background: 'blue',
        width: '95%',
        margin: 'auto',
        paddingBottom: '2rem'
    }
}

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education : [
                {
                    institution: 'University of South Australia',
                    programme: 'Computer and Information Science',
                    award: 'Doctor of Philosophy',
                    startYear: 2014,
                    endYear: 2018,
                    logo:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0004/4936/brand.gif?itok=KEeQBanq'
                },
                {
                    institution: 'University of Mines & Technology',
                    programme: 'Electrical & Electronic Engineering',
                    award: 'Bachelor of Science',
                    startYear: 2008,
                    endYear: 2012,
                    logo:'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/University_of_Mines_and_Technology_logo.jpg/240px-University_of_Mines_and_Technology_logo.jpg'
                }
            ]
        }
    }
    
    render() {
        let educations = this.state.education.map(
            e => <EachEducation institution={e.institution}
                    programme={e.programme}
                    award={e.award}
                    startYear={e.startYear}
                    endYear={e.endYear}
                    logo={e.logo}/>)
        const { classes} = this.props
        return (
            <section className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Education</h2>
                    <div></div>
                    <p>institutions</p>
                </div>
                <div className={classes.container}>
                    <Row>
                        {educations}
                    </Row>
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Education);
