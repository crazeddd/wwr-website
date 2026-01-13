import type { Component } from "solid-js";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Robocamp: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="item-center flex col txt-center align-center justify-center g-4 py-5">
            <div>
              <h1>Robocamp 2026</h1>
              <p class="txt-light">Our fun robotics and STEM course.</p>
            </div>
            <div class="flex col g-3">
            <button class="outline">Applications closed</button>
            <small>Applications will reopen in late <br/> Spring of 2026.</small>
            </div>
          {/* <div>
            <img src="/imgs/robocamp.webp" class="r-2" alt="Robocamp 2024"/>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Robocamp;
