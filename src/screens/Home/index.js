import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import Book from "./Book";
import About from "./About";
import Review from "../../components/Review";
import Quality from "./Quality";
import Services from "./Services";
import Sights from "./Sights";
import Faq from "./Faq";

/* import ValueProps from "../../components/ValueProps";
import Intro from "../../components/Intro";
import Team from "./Team";
import Advantages from "../../components/Advantages";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer"; */



const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Clients />
      <Book />
      <About />
      <Services />
      <Steps scrollToRef={scrollToRef} />
      <Quality />
      <Review className="section-pb" />
      <Sights />
      <Faq />

      {/* <Intro />
      <ValueProps className="section" />
      <Team />
      <Advantages />
      <Workouts />
      <Offer className="section-border-top" /> */}
    </>
  );
};

export default Home;
