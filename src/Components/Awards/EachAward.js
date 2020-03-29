import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faChevronSquareDown } from '@fortawesome/free-solid-svg-icons'
import { FaCaretSquareDown } from 'react-icons/fa';
import { FaCaretSquareUp } from 'react-icons/fa';


const styles = {
    main: {
        fontFamily: 'Open Sans',
        width: '70%',
        margin: 'auto',
        ['@media (max-width:992px)']: {
            width:'80%'
        },
        ['@media (max-width:768px)']: {
            width:'95%'
        },
        marginBottom: '2em'
    },
    card: {
        // backgroundColor: 'red',
        // border: '3px solid green',
        textAlign: 'center',
        // width: '80%',
        margin: 'auto',
        marginBottom: '1em',
        paddingBottom: '1em',
        backgroundColor: '#f0f3f5',
        '& button': {
            width: '30%',
            margin: 'auto',
            ['@media (max-width:992px)']: {
                width:'60%'
            },
        }
        
    },
    imgStyle: {
        width: '20rem',
        margin: 'auto'
    }
}

class EachAward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImage: 'https://mymvta.ca/wp-content/uploads/2018/11/gold-trophy-862x690.jpg',
            showAward: false
        }
        this.showAwardImg = this.showAwardImg.bind(this)
    }

    showAwardImg(){
        let showImg = !this.state.showAward
        console.log(showImg)
        this.setState({showAward: showImg})
    }
    
    render() {
        const imgPath = process.env.PUBLIC_URL + '/images/awards/' + this.props.image
        const { classes } = this.props
        // console.log(this.state.showAward)
        let awardImg = this.state.showAward ? 
                <Card.Img variant="top" className={classes.imgStyle} src={ imgPath } alt='Image'/>
                : <span></span>
        let button = this.props.image ? 
                <Button variant="info" size="sm"
                    onClick={this.showAwardImg}
                    className=' text-center'>
                    {this.state.showAward ? 'Hide image  ' :'Image available  ' }
                    {this.state.showAward ? <FaCaretSquareUp/> :<FaCaretSquareDown/> }
                </Button>
                : <span></span>
        return (
            // < Col lg={6}>
                <Container className={classes.main}>
                    <Card border='light' className={classes.card} >

                        <Card.Body>
                            <Card.Title className='mb-3'>{this.props.award}</Card.Title>
                            <Card.Subtitle className='font-weight-bold mb-2' >
                                {this.props.institute}
                            </Card.Subtitle>
                            <Card.Text className="mb-2 text-muted">
                                {this.props.note} 
                            </Card.Text>
                        </Card.Body>
                        { awardImg }
                        { button }
                    </Card>
                </Container>
            // </Col>
        );
    }
}

export default withStyles(styles)(EachAward);