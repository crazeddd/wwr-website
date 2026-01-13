import { createEffect, type Component } from "solid-js";

import disarm2 from "/imgs/DISARM_ANGLED.png";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Cover from "./components/Cover";

import { typeWriter } from "../utils/typeWriter";

const App: Component = () => {
  const wordList = ["Robots", "Memories", "Solutions"];
  const { word, typeWord, deleteWord, clearWord } = typeWriter(200, 150);

  createEffect(async () => {
    let i = 0;

    while (true) {
      await typeWord(wordList[i]);
      await deleteWord(wordList[i]);
      clearWord();
      i = i > 1 ? 0 : i + 1;
    }
  });

  return (
    <>
      {/* <Cover /> */}
      <section id="hero">
        <Nav />
        <div
          class="flex align-center justify-center txt-center item-center"
        >
          <div class="flex col align-center justify-center g-4 py-5">
            <div>
              <span class="badge primary">v0.1.0 -{">"}</span>
            </div>
            <h1>
              Bringing <span class="txt-ul txt-i txt-acc">ideas</span> to{" "}
              <span class="txt-ul txt-i txt-acc">life</span> with robotics.
            </h1>
            <p class="txt-light">
              Inspiring new{" "}
              <span class="txt-default">
                generations of engineers since 2008
              </span>{" "}
              <br class="desktop-only"></br> @ Westwood Highschool, Austin, TX.
            </p>
          </div>
        </div>
      </section>
      <div class="infinite-carousel">
        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a
          href="https://www.fabworks.com/"
          style="filter: invert(100%);"
          target="_blank"
        >
          <img src="/sponsors/fabworks.avif" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://image4.owler.com/logo/rev-robotics_owler_20160301_213233_original.png" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a
          href="https://www.fabworks.com/"
          style="filter: invert(100%);"
          target="_blank"
        >
          <img src="/sponsors/fabworks.avif" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://image4.owler.com/logo/rev-robotics_owler_20160301_213233_original.png" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a
          href="https://www.fabworks.com/"
          style="filter: invert(100%);"
          target="_blank"
        >
          <img src="/sponsors/fabworks.avif" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://image4.owler.com/logo/rev-robotics_owler_20160301_213233_original.png" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a
          href="https://www.fabworks.com/"
          style="filter: invert(100%);"
          target="_blank"
        >
          <img src="/sponsors/fabworks.avif" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://image4.owler.com/logo/rev-robotics_owler_20160301_213233_original.png" />
        </a>
      </div>
      <section>
        {/* <div class="bg-grid"></div> */}
        <div class="flex col g-3 item-center z-1">
          <div class="flex g-3 mobile-wrap">
            <div class="bg-secondary p-4 r-2 b-all">
              <div class="flex col g-4">
                <h2>
                  We build
                  <br />
                  <span class="txt-primary typed-text">{word()}</span>.
                </h2>
                <p class="txt-light">
                  Westwood Robotics is a student-led organization dedicated to
                  fostering innovation, teamwork, and a passion for STEM. We
                  participate in competitions, build mediocre robots, and work
                  to inspire the next generation of engineers and leaders.
                </p>
              </div>
            </div>
            <div class="flex p-4 r-2 b-all w-100">
            </div>
          </div>
          <div class="flex align-center justify-center p-4 r-2 b-all">
            <div class="bg-grid"></div>
            <div id="disarm2">
              <img src={disarm2}></img>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
          <div class="flex col g-4 item-center">
            <h1>Our awards:</h1>
            <div class="flex g-4">
              <div class="banner">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
                <div class="flex col align-center g-2">
                <p>2025, Waco</p>
                <h5>Impact Award</h5>
                </div>
              </div>
            </div>
          </div>
      </section>  */}

      {/* <section class="">
        <div class="item-center-left p-4">
          <hr></hr>
        </div>
        <div class="flex col g-4 item-center">
          <h1>Contact Us</h1>
          <p class="txt-muted">
            Interested in joining Westwood Robotics or sponsoring our org? Feel
            free to reach out to us at any of our socials!
          </p>
          <button class="primary">Get in Touch -{">"}</button>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default App;
