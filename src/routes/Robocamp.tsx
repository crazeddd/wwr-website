import type { Component } from "solid-js";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Robocamp: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div
          class="flex align-center justify-center item-center g-4"
        >
          <div class="flex col justify-start g-4">
            <div>
              <h1>Robocamp 2026</h1>
              <p class="txt-light">Our fun robotics and STEM course.</p>
            </div>

            <button class="primary">Apply Now!</button>
          </div>
          {/* <div>
            <img id="disarm" src={disarm}/>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Robocamp;