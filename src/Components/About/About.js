import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'

const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        // backgroundColor: 'blue',
        // background: '#abbaab',  /* fallback for old browsers */
        // background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',  /* Chrome 10-25, Safari 5.1-6 */
        // background: 'linear-gradient(to right, #ffffff, #abbaab)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: '#E0EAFC',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
            padding: '0.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em',
            width: '55%',
            ['@media (max-width:992px)']: {
                width: '65%'
            },
            ['@media (max-width:780px)']: {
                width: '75%'
            },
            ['@media (max-width:576px)']: {
                width: '90%'
            },
            margin: 'auto',
            // boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 -12px 30px 0px rgba(0,0,0,0.075)',
            // color: 'white',
            textAlign: 'left',
            // marginBottom: '0.5em'
            '& hr': {
                border: '0',
                height: '1.5px',
                width: '50px',
                marginBottom: '0',
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
            }
        },
        '& img': {
            marginTop: '2em',
            marginBottom: '1em',
            width: '15em',
            borderRadius: '15%',
            boxShadow: '5px 5px 5px 2px rgba(0, 0, 0,0.5)'
        }
        
    },
    awards: {
        // backgroundColor: 'blue',
        width: '85%',
        margin: 'auto'
    }
}

class About extends Component {

    render() {
        const { classes } = this.props
        let imgPath = process.env.PUBLIC_URL + '/images/Lap_Photo.jpg'

        const leftBorderStyle = {
            // borderLeft: '9px ridge rgb(13, 117, 212)',
            // backgroundColor: 'rgba(215, 231, 245, 1)',
        }
        const rightBorderStyle = {
            // borderRight: '9px ridge rgb(13, 117, 212)',
        }
        return (
            <section id='about'>
                <div className={classes.sectionHeader}>
                <h2>About me</h2>
                <div></div>
                <img src={imgPath} alt="John's profile picture"/>
                <p style={leftBorderStyle}>
                    I am a computer scientist with a Ph.D. in Computer and Information Science 
                    from the University of South Australia (UniSA). I have advanced research experience, 
                    a problem-solving mentality, and practical programming skills.
                    {/* <hr /> */}
                </p>
                
                <p style={rightBorderStyle}>
                    I am a Data Scientist and Machine Learning expert with experiences using ML and analytics
                    techniques in several projects for organisations such as the Data-to-Decision CRC, 
                    Defence Science and Technology (DST), Australian Federal Police (AFP), and UniSA.
                </p>
                <p style={leftBorderStyle}>
                    I am an educator and I am the Lecturer and Course Coordinator for Database Fundamentals
                    and Web Development at UniSA.
                </p>
                <p style={rightBorderStyle}>
                    I am a developer, with experience full-stack developing Web, Mobile, and Desktop 
                    applications.
                </p>
                {/* <p>
                    I am a computer scientist with a Ph.D. in Computer and Information Science 
                    from the University of South Australia (UniSA). I have advanced research experience, 
                    a problem-solving mentality, and practical programming skills. With regards to my 
                    research experience, I have worked on research problems in computer science and authored 
                    several peer-reviewed research publications in top-ranked conferences. 
                </p>
                <p>
                    I am proficient in data science and its relating technologies including 
                    SAS OnDemand (enterprise miner) and RapidMiner, as well as, data science modules in 
                    Python such as Numpy, Pandas, TensorFlow etc. In Addition, I am familiar with Machine 
                    Learning concepts such as Decision Trees, KNN, Rule-based Classifiers, Bayes Network, 
                    Artificial Neural Network, Support Vector Machines, Logistic Regression among others. 
                </p>
                <p>    
                    I also worked to develop my interest as a full-stack web/mobile developer. In this regard, 
                    I have advanced my skills in HTML, CSS, JavaScript (front-end), NodeJS (backend) and important 
                    libraries such as jQuery and Bootstrap. I am also proficient in the Python programming language 
                    and have tutored it in an online course at the University of South Australia. I also have knowledge 
                    in both SQL databases, such as PostgreSQL and NoSQL databases such as Mongo DB.
                </p> */}
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(About);