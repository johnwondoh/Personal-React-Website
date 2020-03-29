import React, { Component } from 'react';
import EachEducation from './EachEducation'
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
            // color: 'white',
            width: '70%',
            margin: 'auto',
            ['@media (max-width:780px)']: {
                width: '85%'
            }
        }
        
    },
    sectionStyle: {
        // backgroundColor: 'black',
        // backgroundColor: '#e1e9ed',
        background: 'rgb(221,233,249)',
        background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(238,245,251,0.5) 50%, rgba(229,244,252,0.5) 80%, rgba(221,229,249,0.5) 100%)',
        '& Container': {
            paddingBottom: '10rem'
        },
        // marginTop: '2rem'
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
                    logo:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0004/4936/brand.gif?itok=KEeQBanq',
                    moreInfo: 'I did my PhD research in AI and Software Engineering Lab at UniSA. My research work focused on Business Process Optimisation under dynamic conditions.',
                },
                {
                    institution: 'University of Mines & Technology',
                    programme: 'Electrical & Electronic Engineering',
                    award: 'Bachelor of Science',
                    startYear: 2008,
                    endYear: 2012,
                    logo:'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/University_of_Mines_and_Technology_logo.jpg/240px-University_of_Mines_and_Technology_logo.jpg',
                    moreInfo: ''
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
                    moreInfo={e.moreInfo}
                    logo={e.logo} key={uuidv4()}/>)
        const { classes} = this.props
        return (
            <section id='education' className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Education</h2>
                    <div></div>
                    <p>I've had the opportunity to study in formal 
                        institution and have also made use of several online tools 
                        to acquire knowledge. Some of these platforms include edX, Udemy, Coursera, and youtube.
                        My formal education took place in the following institution...  
                    </p>
                </div>
                <div className={classes.container}>
                    {/* <Row> */}
                        {educations}
                    {/* </Row> */}
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Education);
