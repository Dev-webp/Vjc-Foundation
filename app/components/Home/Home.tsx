import React from "react";
import { Form } from "../Form/Form";
import { FormLeft } from "../FormLeft/FormLeft";
import Statistics from "../Statistics/Statistics";
import Causes from "../Causes/Causes"
import Charity from "../Charity/Charity"
import Volunteer from "../Volunteer/Volunteer"
import Testimonal from "../Testimonal/Testimonal"
import Children  from "../Children/Children";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col mb-10 lg:flex-row-reverse min-h-screen bg-[#faf6f0] text-[#2e2a18] font-sans mx-3 lg:mx-auto lg:px-10 xl:px-20 2xl:px-32">
        <Form />
        <FormLeft />
      </div>
      <>
        <Statistics />
        <Causes></Causes>
        <Charity></Charity>
       <Volunteer></Volunteer>
       <Testimonal></Testimonal>
       <Children></Children>
      </>
    </main>
  );
};

export default Home;
