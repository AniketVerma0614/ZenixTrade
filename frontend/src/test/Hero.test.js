import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// Test Suite
describe('Hero Component', ()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });
});

/*
 PASS  src/test/Hero.test.js
  Hero Component
    √ render hero image (82 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.425 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
*/