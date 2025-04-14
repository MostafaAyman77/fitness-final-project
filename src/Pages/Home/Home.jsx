import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Hero from "../../Components/Herosection/Hero";   

const Home = () => {
  return (
    <div>
  
      <Hero />
      {/* Add other components here */}
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />

    </div>
  );
};

export default Home;
