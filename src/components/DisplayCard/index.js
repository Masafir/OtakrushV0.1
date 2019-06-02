/**
 * NPM
 */
import React from 'react';
import { Container, Col } from 'react-bootstrap';
/** 
 * LOCAL
 */
import './displaycard.scss';
import Card from '../Card';
import Buttonbar from '../ButtonBar';
/**
 * CODE
 */
const Display = () => (
    <div>
        Display Otakruch
        <Container>
            <Col md={4} xs={12}>
                <Card name="Aurélieng" age="18" img="shoto"/>
            </Col>
            <Col md={4} xs={12}>
                <Card name="Marie-Christine-chan" age="21" img="himiko"/>
            </Col>
            <Col md={4} xs={12}>
                <Card name="Dark-XxX-SaSuKe-XxX" age="27" img="allmight"/>
            </Col>
            <Buttonbar />
        </Container>
    </div>
);

/**
 * EXPORT
 */
export default Display;