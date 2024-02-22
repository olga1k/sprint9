import Header from "../components/Header";
import HomeCategories from "../components/HomeCategories";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  
  return (
    <div>
      <Header />
      <main >
        <Intro/>
      <HomeCategories/>
      </main>
    </div>
  );
}
