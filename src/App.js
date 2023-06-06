import React from "react";
import "./App.css";
import Header from "./components/Home/icon-bar/bar";
import Banner from "./components/Home/banner/banner";
import Services from "./components/Services/services";
import About from "./components/About/about";
import About2 from "./components/More-About/about2";
import Testimonial from "./components/Testimonials/testimonial";
import Case from "./components/Case-Study/case";
import FormSection from "./components/Form/form";
import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <About2 />
      <Testimonial />
      <Case />
      <FormSection />
      <Blogs />
      <Footer />
    </>
  );
};
export default App;
