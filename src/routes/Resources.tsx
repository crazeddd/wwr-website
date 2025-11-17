import type { Component } from "solid-js";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { ref } from "../icons";

const Robocamp: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="flex align-center justify-center item-center g-4">
          <div class="flex col justify-start txt-center g-4">
            <div>
              <h1>
               Resouces
              </h1>
              <p class="txt-light">
                Uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
              </p>
            </div>
          </div>
          {/* <div>
            <img id="disarm" src={disarm}/>
          </div> */}
        </div>
      </section>
      <section class="bg-light">
        <div class="flex wrap justify-left align-baseline item-center g-4">
          <div class="card fill">
            Season Resources
            <div class="flex col g-2">
              <a class="txt-primary">FRC Resources {ref()}</a>
              <a class="txt-primary">FTC Resources {ref()}</a>
            </div>
          </div>
           <div class="card fill">
            Club Resources
            <div class="flex col g-2">
              <a class="txt-primary">Member Hours {ref()}</a>
              <a class="txt-primary">Member App {ref()}</a>
              <a class="txt-primary">Club Handbook {ref()}</a>
              <a class="txt-primary">Club Documents {ref()}</a>
            </div>
          </div>
           <div class="card fill">
            More Resources
            <div class="flex col g-2">
              <a class="txt-primary">Another resource {ref()}</a>
              <a class="txt-primary">A third resource {ref()}</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Robocamp;
