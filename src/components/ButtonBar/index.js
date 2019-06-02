/**
 * NPM
 */
import React from 'react';
/** 
 * LOCAL
 */
import './buttonbar.scss';
import { Button } from 'react-bootstrap';
/**
 * CODE
 */
const Buttonbar = () => (
    <div id="buttonbar">
        <Button variant="outline-danger">
            Pass
        </Button>
        <Button variant="outline-primary">
            Like
        </Button>
    </div>
);

/**
 * EXPORT
 */
export default Buttonbar;