import React, { Component } from 'react';
import EachFramework from './EachFramework'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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

class Frameworks extends Component {
    constructor(props){
        super(props)
        this.state = {
            skills: [
                {
                    title: 'Javascript',
                    rate: 4.5,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
                },
                {
                    title: 'HTML 5',
                    rate: 4.5,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
                },
                {
                    title: 'CSS 3',
                    rate: 4.5,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png'
                },
                {
                    title: 'Python',
                    rate: 4.5,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
                },
                {
                    title: 'React',
                    rate: 4,
                    imageUrl: 'data:image/png;base64,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'
                },
                {
                    title: 'HTML 5',
                    rate: 4.5,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
                },
                {
                    title: 'MongoDB',
                    rate: 5, 
                    imageUrl: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png'   
                },
                {
                    title: 'Bootstrap',
                    rate: 5, 
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'   
                }
            ]
        }
    }

    render() {
        let skills = this.state.skills.map(
            s => <EachFramework title={s.title} 
            imageUrl={s.imageUrl} 
            rate={s.rate}/>
            )
        const {classes} = this.props
        return (
            <Container>
                <div className={classes.sectionHeader}>
                    <h2>Skills & Tools</h2>
                    <div></div>
                    <p>
                        I've gained some skills spanning over 
                        several disciplines. These include Web development,
                        Business Process Management, Data Science, and Systems Analysis. 
                        Some of the tools I use are: 
                    </p>
                </div>
                <Row>
                    {skills}
                    {/* <EachFramework title={this.state.title} 
                    imageUrl={this.state.imageUrl}/> */}
                </Row>
            </Container>
        );
    }
}

export default withStyles(styles)(Frameworks);