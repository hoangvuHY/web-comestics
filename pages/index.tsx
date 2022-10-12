import React from "react";

import styles from './styles.module.scss';

import Slider from "~/components/Home/Slider";
import NewsHomePage from "~/components/Home/NewsHomePage";
import AgentSystem from "~/components/Home/AgentSystem";
import Partner from "~/components/Home/Partner";
import Introduction from "~/components/Home/Introduction";
import Services from "~/components/Home/Services";
import Product from "~/components/Home/Product";
import Solution from "~/components/Home/Solution";
import Feedback from "~/components/Home/Feedback";

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Introduction />
      <Services />
      <Product />
      <Solution />
      <AgentSystem />
      <Partner />
      <NewsHomePage />
      <Feedback />
    </>
  );
};

export default Home;
