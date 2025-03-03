import React from "react";

import Hero from './Hero';
// import Team from './Team';
import Brokerage from './Brokerage';
import OpenAccount from "../OpenAccount";
// import Footer from '../Footer';



import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage(){
    return (
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
    );
}

export default PricingPage;