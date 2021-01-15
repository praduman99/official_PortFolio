import React from 'react'
import {Container ,Row,Heading} from './style'
export const AboutMe = () => {
    return (
        <div >
            <Container className="container-fluid mb-5 ">

                <Row className="row   justify-content-center p-5"> 
                    <Heading>ABOUT ME</Heading>
                </Row>

                <Row className="row text-center  mt-5 mb-5">
                A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                </Row>

            </Container>
        </div>
    )
}
