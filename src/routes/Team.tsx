import { Component } from "solid-js";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import { cheveron_down } from "../icons";

import archit from "/imgs/officers/archit.webp";
import iris from "/imgs/officers/iris.webp";
import arhaan from "/imgs/officers/arhaan.webp";
import rayan from "/imgs/officers/rayan.webp";
import jining from "/imgs/officers/jining.webp";
import nerd from "/imgs/officers/nerd.webp";
import shrika from "/imgs/officers/shrika.webp";
import varun from "/imgs/officers/varun.webp";

import manisha from "/imgs/booster/manisha.webp";
import meha from "/imgs/booster/meha.webp";
import sheri from "/imgs/booster/sheri.webp";
import shilpa from "/imgs/booster/shilpa.webp";
import sridevi from "/imgs/booster/sridevi.webp";

const Team: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="flex align-center justify-center txt-center item-center">
          <div class="flex col txt-center g-2 py-5">
            <h1>Our Team</h1>
            <p class="txt-light">Meet the members of Westwood Robotics.</p>
          </div>
        </div>
      </section>
      <section>
        <div class="item-top-center flex justify-between align-center w-100">
          <h2>
            2026 <span class="txt-i txt-acc">Officers</span>
          </h2>
          <div class="dropdown">
            <button class="outline">2026 {cheveron_down()}</button>
            <div class="gap"></div>
            <div class="items">
              <p class="txt-light">2025</p>
              <p class="txt-light">2024</p>
              <p class="txt-light">2023</p>
              <p class="txt-light">2022</p>
              <p class="txt-light">2021</p>
              <p class="txt-light">2020</p>
            </div>
          </div>
        </div>
        <div class="item-center flex col g-4">
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
      <section class="py-5">
        <div class="item-top-center flex justify-between align-center w-100">
          <h2>
            2026 <span class="txt-i txt-acc">Booster Club</span>
          </h2>
          <div class="dropdown">
            <button class="outline">2026 {cheveron_down()}</button>
            <div class="gap"></div>
            <div class="items">
              <p class="txt-light">2025</p>
              <p class="txt-light">2024</p>
              <p class="txt-light">2023</p>
              <p class="txt-light">2022</p>
              <p class="txt-light">2021</p>
              <p class="txt-light">2020</p>
            </div>
          </div>
        </div>
        <div class="item-center flex col g-4">
          <div id="officers-grid">
            <div class="card fill">
              <span class="badge outline">President</span>
              <img class="circle" src={manisha} />
              <h5>Manisha Gupta</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Vice President</span>
              <img class="circle" src={sridevi} />
              <h5>Sridevi Thambi</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Treasurer</span>
              <img class="circle" src={shilpa} />
              <h5>Shilpa Malpani</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">Secretary</span>
              <img class="circle" src={meha} />
              <h5>Meha Parikh</h5>
            </div>
            <div class="card fill">
              <span class="badge outline">FTC Coordinator</span>
              <img class="circle" src={sheri} />
              <h5>Sheri Sundstrom</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
