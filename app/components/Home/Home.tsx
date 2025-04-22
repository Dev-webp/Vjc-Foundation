import React from "react";
import { Form } from "../Form/Form";
import { FormLeft } from "../FormLeft/FormLeft";

const Home = () => {
  return (
    <main className="flex flex-col lg:flex-row-reverse min-h-screen bg-[#faf6f0] text-[#2e2a18] font-sans mx-3 lg:mx-auto lg:px-10 xl:px-20 2xl:px-32">
      <Form />
      <FormLeft />
    </main>
  );
};

export default Home;
