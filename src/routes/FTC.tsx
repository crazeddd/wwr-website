import { type Component } from "solid-js";

import ftc from "/assets/ftc_2026.webp";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const FTC: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="flex wrap align-center txt-center item-center g-4 py-5">
          <div class="flex col g-4">
            <h1>FTC</h1>
            <p class="txt-light">
              <a class="txt-ul">FIRST Tech Challenge</a>, or FTC, is one of the
              programs we offer at Westwood Robotics. Our FTC program began in
              2019, and currently fosters 4 different teams.
            </p>
          </div>
          {/* <div class="bg-light p-3 r-2">
            <img src={ftc}/>
          </div> */}
        </div>
      </section>

      <section>
        <div class="item-top-center">
          <h1>
            <span class="txt-i txt-acc">2026</span> Teams
          </h1>
        </div>
        <div class="flex col g-5 item-center">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
            <h2>Slingshot</h2>
            <p>20240</p>
          </div>
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
            <h2>Tomahawk</h2>
            <p>17315</p>
          </div>
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
            <h2>Hunga Munga</h2>
            <p>17113</p>
          </div>
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
            <h2>Boomerang</h2>
            <p>18884</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FTC;
