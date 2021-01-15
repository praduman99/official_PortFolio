import React from 'react'
import {  Row, Heading, Col, ContactIcon, Icon } from './style'
export const ContactMe = () => {
    return (
        <div >

            <Row className="row justify-content-center  p-5">
                <Heading>REACH ME</Heading>
            </Row>
            <Row className="row p-5">
                <Col className="  col-md-6">
                    <Row className="row  justify-content-center p-2">
                        <ContactIcon className="fa fa-phone m-4"> Call</ContactIcon>
                        <ContactIcon className="fa fa-envelope m-4">Mail</ContactIcon>
                    </Row>
                    <Row>
                        <div className="container mt-4  d-flex justify-content-center">
                            <div className="row" >
                                <Icon className="fa fa-twitter"></Icon>
                                <Icon className="fa fa-facebook "></Icon>
                                <Icon className="fa fa-github "></Icon>
                                <Icon className="fa fa-linkedin "></Icon>

                            </div>

                        </div>
                    </Row>

                </Col>
                <Col className=" col-md-6">
                    <Row className="row  justify-content-center flex-column">
                        <textarea rows="8" placeholder=" Drops msg here ..." style={{ border: " solid 1px orangered", color: "orangered" }} cols="20"></textarea>
                        <button className="btn text-light" style={{ backgroundColor: "orangered" }}> SEND</button>
                    </Row>
                </Col>

                <div className="container  d-flex  justify-content-center" style={{ fontSize: "12px", marginTop: "5rem" }}>
                    added 11 packages from 9 contributors and audited 1958 packages in 19.977s
                            </div>
            </Row>




        </div>
    )
}
