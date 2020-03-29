import React, { Component } from 'react';
import { FaLinkedin, FaFacebookSquare, FaGithub, FaStackOverflow, FaInstagram, } from 'react-icons/fa'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { withStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        '& h2': {
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '3em',
            color: '#edf5e1'
            // color: '#2488ed'
        },
        // '& div': {
        //     backgroundColor: 'red',
        //     height: '2px',
        //     width: '5rem',
        //     margin: 'auto'
        // },
        '& p': {
            paddingTop: '1.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em'
        }
    
        
    },
    sectionStyle: {
        // height: '20em',
        // backgroundColor: 'rgb(47, 47, 162, 0.5)'
        // backgroundColor: 'rgb(101, 157, 189)'
        // backgroundColor: 'black'
        background: '#0F2027',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // ['@media (max-width:780px)']: {
        //     padding: '2em auto'
        // },
        '& h3': {
            color: 'yellow',
            fontStyle: 'italic' 
        }
    },
    formStyle: {
        fontFamily: 'Open Sans',
        // m: '2em'
        // width: '85%'
        
    },
    connectIcon: {
        border: '2px solid white',
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em',
        textAlign: 'center',
        

        '& a': {
            color: 'white',
            margin: 'auto',
            fontSize: '2.5em',
            paddingBottom: '0.2em',
            '&:hover, :visited':{
                color: 'green'
            }
            // textAlign: 'center',
            // verticalAlign: 'middle'
        }
    },
    contactInfo: {
        paddingBottom:'1.5em',
        paddingTop:'1.5em',
        borderBottom: '1px solid white',
        width: '80%',
        margin: 'auto',
        marginBottom: '1em',
        '& a': {
            color: 'white',
            fontSize: '1.3em'
        }
    }
}

class Contact extends Component {
    render() {
        const { classes } = this.props
        return (
            <section id='contact' className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Contact me</h2>
                    <Row>
                        <Col md={6}>
                            <h3>Get in touch</h3>
                            <div className={ classes.contactInfo}>
                                <div>
                                    <a href='mailto: john.wondoh@mymail.unisa.edu.au' title='john.wondoh@mymail.unisa.edu.au'>
                                        < MdEmail /> john.wondoh@mymail.unisa.edu.au
                                    </a>
                                </div>
                                <div>
                                    <a href='tel:+61450027156'>
                                        < MdLocalPhone /> +61 45 002 7156
                                    </a>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.linkedin.com/in/john-wondoh-aaa85337/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.facebook.com/wonzy' target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://github.com/johnwondoh' target='_blank' rel="noopener noreferrer">< FaGithub /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://stackoverflow.com/users/3559143/john' target='_blank' rel="noopener noreferrer"><FaStackOverflow /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.instagram.com/jaywonzy/' target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div>
                        <h3>Send me a message</h3>
                            <form className={classes.formStyle + "mx-sm-3 mb-3 mt-3"}>
                                
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='name' className="col-sm-4 labelStyle">Name *</label>
                                    <input type='text' id='name' 
                                    required minLength='2' maxLength='20'
                                    className="form-control col-sm-8" placeholder='enter your name' />
                                </div>
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='email' className="col-sm-4 labelStyle">Email *</label>
                                    <input type='text' id='email' className="form-control col-sm-8" placeholder='enter your email address' />
                                </div>
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='phone' className="col-sm-4 labelStyle">Phone Number </label>
                                    <input type='tel' id='phone' 
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    maxLength='15'
                                    minLength='9'
                                    className="form-control col-sm-8" 
                                    placeholder='enter your phone number' />
                                </div>
                                {/* <div className="form-group row mx-sm-3 mb-2">
                                    <label htmlFor='phone' class="col-sm-4 labelStyle">Phone Number </label>
                                    <input type='tel' id='phone' className="form-control col-sm-8" placeholder='enter your phone number' />
                                </div> */}
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='message' className="col-sm-4 labelStyle">Message</label>
                                    <textarea type='textarea' id='message' className="form-control col-sm-8" 
                                        rows='5'> 
                                    </textarea>
                                    {/* <input type='textarea' id='message' className="form-control col-sm-10" placeholder='write your message here' /> */}
                                </div>
                                <div className="form-group mx-3 mb-2">
                                <input className="btn btn-secondary w-25 mr-3" type='reset' value='Cancel'/>
                                <input className="btn btn-success w-50" type='submit' value='Send'/>
                                </div>
                                {/* <button>Cancel</button>
                                <button>Send</button> */}
                            </form>
                        </div>
                        </Col>
                    </Row>
                    
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Contact);