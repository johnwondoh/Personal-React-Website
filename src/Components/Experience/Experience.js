import React, { Component } from 'react';
import EachExperience from './EachExperience'
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
    sectionStyle: {
        // backgroundColor: 'black',
        // backgroundColor: '#e1e9ed',
        background: 'rgb(221,233,249)',
        background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(238,245,251,0.5) 50%, rgba(229,244,252,0.5) 80%, rgba(221,229,249,0.5) 100%)',
        paddingBottom: '3em'
        // marginTop: '2rem'
    },
    // experiences: {
    //     width: '85%',
    //     margin: 'auto'
    // }
}

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience : [
                {
                    position: 'Web Development Course Coordinator',
                    subTitle: 'Information Technology Bachelor Degrees',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                        'I lecture Information Technology undergraduate students with specialisation in Software Engineering and Networking and Cybersecurity on web security and web development tools, principles, and design architectures such as HTML5, CSS3, JavaScript, C#, ASP.NET, AngularJS, MVC, MVVM, Separation of Concerns, among others.',
                        'I prepare new materials for the course and update existing materials to ensure that they meet modern web development standards.',
                        'I handle hands-on practical sessions for web development students. During these sessions, students are required to practice the knowledge acquired during class. I also prepare the teaching materials for the weekly practical sessions.',
                        'I manage the teaching team responsible for various academic activities including tutoring, marking, etc.'
                        ]
                },
                {
                    position: 'Web Development Course Coordinator',
                    subTitle: 'Information Technology Bachelor Degrees',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                        'I lecture Information Technology undergraduate students with specialisation in Software Engineering and Networking and Cybersecurity on web security and web development tools, principles, and design architectures such as HTML5, CSS3, JavaScript, C#, ASP.NET, AngularJS, MVC, MVVM, Separation of Concerns, among others.',
                        'I prepare new materials for the course and update existing materials to ensure that they meet modern web development standards.',
                        'I handle hands-on practical sessions for web development students. During these sessions, students are required to practice the knowledge acquired during class. I also prepare the teaching materials for the weekly practical sessions.',
                        'I manage the teaching team responsible for various academic activities including tutoring, marking, etc.'
                        ]
                }
            ]
        }
    }
    
    render() {
        let experience = this.state.experience.map(e => <EachExperience 
                    position={e.position} subTitle={e.subTitle}
                    company={e.company} town={e.town}
                    country={e.country} responsibilities={e.responsibilities}
                    key={uuidv4()}/>)
        
        const { classes } = this.props
        return (
            <section className={classes.sectionStyle} id='experience'>
                <div className={classes.sectionHeader}>
                    <h2>Work Experience</h2>
                    <div></div>
                    <p>I've had quite some experience in diverse areas within the domain 
                        of Computer Science and Information Systems. Some notable experiences 
                        include the following ...
                    </p>
                </div>
                {/* <Row className={classes.experiences}> */}
                    {experience}
                {/* </Row> */}
            </section>
        );
    }
}

export default withStyles(styles)(Experience);