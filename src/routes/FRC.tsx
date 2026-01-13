import type { Component } from "solid-js";

import disarm from "/imgs/DISARM_SIDEWAYS.png";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const FRC: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div
          class="flex align-center justify-center txt-center item-center b-all r-2 g-4"
        >
          <div class="bg-grid"></div>
          <div class="flex col g-4">
            <div class="flex col py-5">
              <h1 class="xl">2583</h1>
              <small>Orange Dynamite</small>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="item-center txt-center">
          <p>
            Orange Dynamite (team 2583), is our FRC (FIRST Robotics Competition)
            team at Westwood Robotics. We've participated in FRC since 2008, and
            have gone from working in a cramped garage to having our own
            workshop and class in Westwood High School. In the offseason, we
            host several local robotics tournaments at our high school such as
            FIRST Lego League and FIRST Tech Challenge competitions, as well as
            teaching engineering and Lego Robotics at elementary and middle
            schools around Round Rock ISD.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FRC;
