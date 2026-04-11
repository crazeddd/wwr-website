import type { Component } from "solid-js";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import { ref } from "../icons";

const Resources: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="flex align-center justify-center txt-center item-center b-all r-2">
          <div class="flex col g-4 py-5 px-2">
            <h1>Resources</h1>
          </div>
        </div>
      </section>
      <section class="item-center">
        <div class="flex wrap justify-left align-baseline item-center g-4">
          <div class="flex col g-4">
            <div class="card fill">
              <h5>FRC: REBUILT™</h5>
              <p class="txt-light">
                In REBUILT™ presented by Haas, a new challenge releasing
                January 10, 2026, <i>FIRST</i>® Robotics Competition teams
                will use engineering skills and re-imagine the past.
              </p>
              <a href="https://www.firstinspires.org/robotics/frc/game-and-season" target="_blank" rel="noopener noreferrer" class="txt-primary">
                REBUILT™ Season Information {ref()}
              </a>
            </div>

            <div class="card fill">
              <h5>FTC: DECODE™</h5>
              <p class="txt-light">
                Starting September 6, 2025, <i>FIRST</i> Tech Challenge
                teams will investigate the power of the world's
                artifacts and unlock mysteries in a new challenge,
                DECODE™ presented by RTX.
              </p>
              <a href="https://www.firstinspires.org/robotics/ftc/game-and-season" target="_blank" rel="noopener noreferrer" class="txt-primary">
                DECODE™ Season Information {ref()}
              </a>
            </div>
          </div>

          <div class="card fill">
            <h5>Season Resources</h5>
            <div class="flex col g-2">
              <p><a href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system" target="_blank" rel="noopener noreferrer" class="txt-primary">FRC Resources {ref()}</a></p>
              <p><a href="https://www.firstinspires.org/resource-library/ftc/game-and-season-info" target="_blank" rel="noopener noreferrer" class="txt-primary">FTC Resources {ref()}</a></p>
            </div>
          </div>
          <div class="card fill">
            <h5>Club Resources</h5>
            <div class="flex col g-2">
              <p><a href="https://hours.westwoodrobots.org" class="txt-primary">Member Hours {ref()}</a></p>
              <p><a href="https://hours.westwoodrobots.org/download" class="txt-primary">Member App {ref()}</a></p>
              <p><a href="https://docs.google.com/document/d/1IGRDd2RpdR-6tV3P0GpvYNiU6dOPqS1iNHSolf2WWAY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="txt-primary">Club Handbook {ref()}</a></p>
              <p><a href="https://drive.google.com/drive/folders/1J_amZiwQxTVSo3g7J0m41J8czyn-gJdV?usp=sharing" target="_blank" rel="noopener noreferrer" class="txt-primary">Club Documents {ref()}</a></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resources;
