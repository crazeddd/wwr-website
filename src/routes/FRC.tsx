import type { Component } from "solid-js";

import disarm from '/assets/DISARM_SIDEWAYS.png';

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const FRC: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div
          id="hero-txt"
          class="flex align-center justify-center txt-center item-center g-4"
        >
          <div class="flex col g-4">
            <div class="flex">
              <h1 id="frc-bg-txt">2583</h1>
              <h1 class="title" id="frc-header">Orange Dynamite</h1>
            </div>
          </div>
          {/* <div>
            <img id="disarm" src={disarm}/>
          </div> */}
        </div>
      </section>
      <section class="bg-light">
        <div class="item-center">
            <p>
              Orange Dynamite (team 2583), our FRC (FIRST Robotics Competition)
              team at Westwood Robotics, is open to all students. We've
              participated in FRC since 2008, and have gone from working in a
              cramped garage to having our own workshop and class in Westwood
              High School. In the offseason, we host several local robotics
              tournaments at our high school such as FIRST Lego League and FIRST
              Tech Challenge competitions, as well as teaching engineering and
              Lego Robotics at elementary and middle schools around Round Rock
              ISD.
            </p> 
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FRC;
