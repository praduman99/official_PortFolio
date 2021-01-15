import React from 'react';
import { Container, Row, Col, HeadingText, Img, Icon } from './style';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { ContactMe } from './ContactMe';
import { Footer } from './Footer';
import { Education } from './Education';
import { CareerGoals } from './CareerGoals';


const Home = () => {
    return (
        <div>
            <Container className="container-fluid">
                <Row className="row" >
                    <Img className="col-md-6"></Img>
                    <Col className=" col-md-6 text-center">
                        <HeadingText>
                            <div className="font-weight-light" style={{ fontSize: "2rem", fontFamily: "verdana" }}>
                                Praduman sharma
                    </div>
                            <div className="" style={{ fontSize: "1rem", fontFamily: "verdana", color: "orangered" }}>
                                Software developer
                    </div>
                            <div className="" style={{ fontSize: "12px" }}>
                                added 11 packages from 9 contributors and audited 1958 packages in 19.977s
                    </div>
                            <div className="container   d-flex justify-content-center">
                                <div className="row" >
                                    <Icon className="fa fa-twitter "></Icon>
                                    <Icon className="fa fa-facebook "></Icon>
                                    <Icon className="fa fa-github "></Icon>
                                    <Icon className="fa fa-linkedin "></Icon>

                                </div>

                            </div>
                            <button  className="btn  text-light" style={{backgroundColor:"orangered"}}> Check My Resume</button>
                        </HeadingText>

                    </Col>
                </Row>
            </Container>
            <Container><AboutMe></AboutMe></Container>

            <Container ><Skills></Skills></Container>

            <Container ><CareerGoals></CareerGoals></Container>

            <Container ><Education></Education></Container>

            <Container ><ContactMe></ContactMe></Container>
            

            <Footer></Footer>




        </div>
    )
}

export default Home
