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
            paddingTop: '1.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em',
            width: '70%',
            margin: 'auto'
        },
        '& img': {
            marginTop: '2em',
            width: '15%',
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
        return (
            <section id='about'>
                <div className={classes.sectionHeader}>
                <h2>About me</h2>
                <div></div>
                <img src={imgPath} alt="John's profile picture"/>
                <p>
                    I am a computer scientist with a Ph.D. in Computer and Information Science 
                    from the University of South Australia (UniSA). I have advanced research experience, 
                    a problem-solving mentality, and practical programming skills. With regards to my 
                    research experience, I have worked on research problems in computer science and authored 
                    several peer-reviewed research publications in top-ranked conferences. 

                    I am proficient in data science and its relating technologies including 
                    SAS OnDemand (enterprise miner) and RapidMiner, as well as, data science modules in 
                    Python such as Numpy, Pandas, TensorFlow etc. In Addition, I am familiar with Machine 
                    Learning concepts such as Decision Trees, KNN, Rule-based Classifiers, Bayes Network, 
                    Artificial Neural Network, Support Vector Machines, Logistic Regression among others. 
                    
                    I also worked to develop my interest as a full-stack web/mobile developer. In this regard, 
                    I have advanced my skills in HTML, CSS, JavaScript (front-end), NodeJS (backend) and important 
                    libraries such as jQuery and Bootstrap. I am also proficient in the Python programming language 
                    and have tutored it in an online course at the University of South Australia. I also have knowledge 
                    in both SQL databases, such as PostgreSQL and NoSQL databases such as Mongo DB.
                </p>
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(About);