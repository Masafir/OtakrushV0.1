/**
 * NPM
 */
import React from 'react';
import { Card } from 'react-bootstrap';
/** 
 * LOCAL
 */
import './card.scss';
/**
 * CODE
 */
const Cardtype = ({ name,age,img }) => (
    <div>
        <Card>
          <Card.Img variant="top" src={`src/styles/img/${img}.png`}/>
          <Card.Title>{name},{age} ans</Card.Title>
        </Card>
        
    </div>
);

/**
 * EXPORT
 */
export default Cardtype;