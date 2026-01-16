import type { Component } from "solid-js";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import { ref } from "../icons";

const Resources: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
      </section>
      <section>
        <div class="flex wrap justify-left align-baseline item-center g-4">
          <div class="card fill">
            Season Resources
            <div class="flex col g-2">
              <p><a class="txt-primary">FRC Resources {ref()}</a></p>
              <p><a class="txt-primary">FTC Resources {ref()}</a></p>
            </div>
          </div>
           <div class="card fill">
            Club Resources
            <div class="flex col g-2">
              <p><a class="txt-primary">Member Hours {ref()}</a></p>
              <p><a class="txt-primary">Member App {ref()}</a></p>
              <p><a class="txt-primary">Club Handbook {ref()}</a></p>
              <p><a class="txt-primary">Club Documents {ref()}</a></p>
            </div>
          </div>
           <div class="card fill">
            More Resources
            <div class="flex col g-2">
              <p><a class="txt-primary">Another resource {ref()}</a></p>
              <p><a class="txt-primary">A third resource {ref()}</a></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resources;
