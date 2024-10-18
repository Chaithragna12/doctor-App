// import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"hero.webp"}
      />
      <Biography imageUrl={"/about.jpg"} />
      <Biography imageUrl={"/whoweare.avif"} />

    </>
  );
};

export default AboutUs;
