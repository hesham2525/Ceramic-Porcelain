import React from "react";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Products from "../ProductsHome/Products";
import Testimonials from "../Testimonials/Testimonials";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      <Projects />
    </>
  );
}
