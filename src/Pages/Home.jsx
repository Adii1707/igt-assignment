import React from 'react';
import { Navbar } from '../Components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SimpleSlider from '../Components/Slider';
import { Banner } from '../Components/Banner';
import Section from '../Components/Section';
import { Accordian } from '../Components/Accordian';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SimpleSlider />
      <Section />
      <Accordian />
    </>
  );
};
