import React from 'react'
import { Container, Row, Heading, Col, ProgressText } from './style'
export const Skills = () => {
    return (
        <div>
            <Container className="container-fluid mb-5 ">

                <Row className="row   justify-content-center p-5">
                    <Heading>SKILLS</Heading>
                </Row>

                <Row className="row text-center  mt-5 mb-5">
                    A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
</Row>

                <Row className="row">
                    <Col className="col d-flex justify-content-center flex-column">
                        <Row className="row-fluid d-flex">
                            <img  alt="name" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png" style={{ width: "150px" ,height:"150px"}} />
                            <ProgressText>React Js</ProgressText>

                        </Row>
                        <Row>
                            <div class="progress  border 1 border-danger">

                                <div class="progress-bar" style={{ backgroundColor: "orangered", width: "55%" }} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Row>
                        

<Row className="row-fluid d-flex">
                            <img  alt="name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdRgoa7tpugU2cXc1wJcDXHo6SvurQMzpsA&usqp=CAU" style={{ width: "150px",height:"150px" }} />
                            <ProgressText>Mongo DB</ProgressText>

                        </Row>
                        <Row>
                            <div class="progress  border 1 border-danger">

                                <div class="progress-bar" style={{ backgroundColor: "orangered", width: "60%" }} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Row>
                        


                    </Col>
                    <Col className="col d-flex justify-content-center flex-column">
                        <Row className="row-fluid d-flex">
                            <img  alt="name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKizMJVPSIWmaokko5x-zxtxku0fkBTJbDA&usqp=CAU" style={{ width: "150px",height:"150px" }} />
                            <ProgressText>React Native</ProgressText>

                        </Row>
                        <Row>
                            <div class="progress   border 1 border-danger">

                                <div class="progress-bar" style={{ backgroundColor: "orangered", width: "75%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Row>
                        <Row className="row-fluid d-flex">
                            <img  alt="name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5P5iDlPs4ssX7GlWPhLmFRmY4NZw4KN0fdg&usqp=CAU" style={{ width: "150px",height:"150px" }} />
                            <ProgressText>Express Js</ProgressText>

                        </Row>
                        <Row>
                            <div class="progress   border 1 border-danger">

                                <div class="progress-bar" style={{ backgroundColor: "orangered", width: "55%" }} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Row>
                    </Col>
                    



                </Row>




            </Container>
        </div>
    )
}
