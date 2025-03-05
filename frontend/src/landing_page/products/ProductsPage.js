import React from "react";

import Hero from "./Hero";
// import Team from './Team';
// import Brokerage from './Brokerage';
// import OpenAccount from "../OpenAccount";
// import Footer from '../Footer';
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

// import Navbar from '../Navbar';
// import Footer from '../Footer';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship platform with streaming market data,advanced charts, an elegant UI,and more. Enjoy the Kite expereince seamlessly on your Android and IOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection />

      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivery directly to your Deamt account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection />

      <LeftSection
        imageURL="media\images\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy grasp, collection of stock market lesson with in-depth coverage and illustrations.Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      
      <RightSection />

      <Universe />
    </>
  );
}

export default ProductPage;
