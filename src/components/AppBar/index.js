/**
 * NPM
 */
import React from 'react';
import { GiHeartBottle } from "react-icons/gi";
/** 
 * LOCAL
 */
import './appbar.scss';
/**
 * CODE
 */
const Appbar = () => (
    <div id="appbar">
        {/* GiCherish,GiEternalLove,GiLoveMystery,GiHeartWings,GiHeartBeats,GiHeartBattery,GiHeartBottle,GiMineralHeart */}
        <div id="brand"><GiHeartBottle />OtaKrush</div>
    </div>
);

/**
 * EXPORT
 */
export default Appbar;