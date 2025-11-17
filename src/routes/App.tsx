import { createEffect, type Component } from "solid-js";

import disarm2 from "/assets/DISARM_ANGLED.png";

import archit from "/assets/officers/archit.webp";
import iris from "/assets/officers/iris.webp";
import arhaan from "/assets/officers/arhaan.webp";
import rayan from "/assets/officers/rayan.webp";
import jining from "/assets/officers/jining.webp";
import nerd from "/assets/officers/nerd.webp";
import shrika from "/assets/officers/shrika.webp";
import varun from "/assets/officers/varun.webp";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

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
      <section id="hero">
        <Nav />
        <button class="bottom-left outline txt-bg">Contact Us -{">"}</button>
        <div
          id="hero-txt"
          class="flex align-center justify-center txt-center item-center"
        >
          <div class="flex col align-center justify-center g-4">
            <div class="flex g-2">
              <span class="badge outline secondary">V 0.2.0</span>
              <span class="badge">Build 2.343</span>
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
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />
        </a>

        <a href="https://www.firstinspires.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        </a>
        <a href="https://www.baesystems.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        </a>
        <a href="https://www.ptc.com/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        </a>
        <a href="https://www.revrobotics.com/" target="_blank">
          <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />
        </a>
      </div>

      <section class="bg-light">
        <div class="bg-grid"></div>
        <div class="grid col center item-center g-5 z-1">
          <div class="flex col align-start g-4">
            <h1>
              We build <br></br>
              <span class="txt-primary typed-text">
                {word()}
              </span>
              .
            </h1>
            <p class="txt-muted">
              Westwood Robotics is a student-led organization dedicated to
              fostering innovation, teamwork, and a passion for STEM. We
              participate in competitions, build mediocre robots, and work to
              inspire the next generation of engineers and leaders.
            </p>
            <button class="outline">Our work -{">"}</button>
          </div>
          <div id="disarm2">
            <img src={disarm2}></img>
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

      <section class="bg-light">
        <div class="item-center flex col g-4">
          <h1>2026 <span class="txt-i txt-acc">Leadership</span></h1>
          <div id="officers-grid">
            <div class="card fill">
              <span class="badge outline">President</span>
              <img class="circle" src={iris} />
              <h5>Iris Chen</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">FRC Director</span>
              <img class="circle" src={archit} />
              <h5>Archit Garg</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">FTC Director</span>
              <img class="circle" src={nerd} />
              <h5>Aubrey Tipps</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Event Director</span>
              <img class="circle" src={varun} />
              <h5>Varun Sanghavi</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Director of Information</span>
              <img class="circle" src={jining} />
              <h5>Jining Liu</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Director of Finance</span>
              <img class="circle" src={arhaan} />
              <h5>Arhaan Jafri</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Director of Outreach</span>
              <img class="circle" src={rayan} />
              <h5>Rayan Dange</h5>
            </div>
            <div class="card">
              <span class="badge outline">FRC Assistant Director</span>
              <img class="circle" src={shrika} />
              <h5>Shrika Prakash</h5>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light">
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
      </section>
      <Footer />
    </>
  );
};

export default App;
