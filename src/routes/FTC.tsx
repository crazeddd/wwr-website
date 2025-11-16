import { createEffect, type Component } from "solid-js";

import ftc from "/assets/ftc_2026.webp";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const FTC: Component = () => {
  return (
    <>
      <section class="vh-100">
        <Nav />
        <div class="flex wrap align-center txt-center item-center g-4">
          <div class="flex col g-4">
            <h1 class="title">F T C</h1>
            <p class="txt-muted">
              <a class="txt-ul">FIRST Tech Challenge</a>, or FTC, is one of the
              programs we offer at Westwood Robotics, open to all students. Our FTC
              program began in 2019, and currently fosters 4 different teams.
            </p>
          </div>
          {/* <div class="bg-light p-3 r-2">
            <img src={ftc}/>
          </div> */}
        </div>
      </section>
{/* 
      <section>
        <div class="item-top-center">
          <h1>Info</h1>
        </div>
        <div class="item-center">
          <h5>Meeting Times:</h5>
          <div class="flex g-2">
            <div class="b-all p-2 r-1 w-100">
              <p>Mon</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Tue</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Wed</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Thu</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Fri</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Sat</p>
            </div>
            <div class="b-all p-2 r-1 w-100">
              <p>Sun</p>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div class="item-top-center">
          <h1><span class="txt-i txt-acc">2026</span> Teams</h1>
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
      {/* <Footer/> */}
    </>
  );
};

//Ignore the type errors for now
/*const App: Component = () => {
    return (
        <>
            <Nav />
            <section class="flex py-5">
                <div >
                    <h1 class="title">FTC</h1>
                    <p><a class="txt-ul">FIRST Tech Challenge</a>, or FTC, is one of our programs at Westwood Robotics, open to all students. Our FTC program began in 2019, and currently fosters 4 different teams.</p>
                </div>
                <div class="flex col g-4 b-all r-2 p-4">
                    <h5>Meeting times (<strong>4:20 - 6:30</strong>)</h5>
                    <div class="flex wrap g-2">
                        <div class="b-all r-2 p-4">Mon</div>
                        <div class="r-2 p-4 bg-primary">Tue</div>
                        <div class="b-all r-2 p-4">Wed</div>
                        <div class="r-2 p-4 bg-primary">Thu</div>
                        <div class="r-2 p-4 bg-primary">Fri</div>
                    </div>
                    <small>Tuesday, Thursday and Friday*</small>
                </div>
            </section>
            <section class="flex">
                <div class="team slingshot">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
                    <h2>Slingshot</h2>
                    <p>20240</p>
                </div>
                <div class="team tomahawk">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
                    <h2>Tomahawk</h2>
                    <p>17315</p>
                </div>
                <div class="team hunga-munga">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
                    <h2>Hunga Munga</h2>
                    <p>17113</p>
                </div>
                <div class="team boomerang">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
                    <h2>Boomerang</h2>
                    <p>18884</p>
                </div>
            </section>
            <Footer />
        </>
    );
};*/

export default FTC;
