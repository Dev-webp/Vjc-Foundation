import React from "react";
import { Form } from "../Form/Form";
import { FormLeft } from "../FormLeft/FormLeft";
import Statistics from "../Statistics/Statistics";
import Causes from "../Causes/Causes";
import Charity from "../Charity/Charity";
import Volunteer from "../Volunteer/Volunteer";
import Testimonal from "../Testimonal/Testimonal";
import Children from "../Children/Children";
import Blogcomp from "../Blogcomp/Blogcomp";
import FadeInOnView from "../FadeInOnView/FadeInOnView"; // adjust path if needed
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <main>
      <div className="flex flex-col mb-10 lg:flex-row-reverse min-h-screen bg-[#faf6f0] text-[#2e2a18] font-sans mx-3 lg:mx-auto lg:px-10 xl:px-20 2xl:px-32">
        <Form />
        <FormLeft />
      </div>

      {/* Animate each section as it scrolls into view */}
      <FadeInOnView>
        <Statistics />
      </FadeInOnView>
      <FadeInOnView delay={0.1}>
        <Causes />
      </FadeInOnView>
      <FadeInOnView delay={0.2}>
        <Charity />
      </FadeInOnView>
      <FadeInOnView delay={0.3}>
        <Volunteer />
      </FadeInOnView>
      <FadeInOnView delay={0.4}>
        <Testimonal />
      </FadeInOnView>
      <FadeInOnView delay={0.5}>
        <Children />
      </FadeInOnView>
      <FadeInOnView delay={0.6}>
        <Blogcomp />
      </FadeInOnView>
      <FadeInOnView delay={0.7}>
        <Footer />
      </FadeInOnView>
    </main>
  );
};

export default Home;
