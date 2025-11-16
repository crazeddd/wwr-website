// @ts-nocheck
import type { Component } from "solid-js";

// https://fluffy-space-memory-46xwrx49q44fjw9-3000.app.github.dev/

import disarm from '/assets/DISARM_SIDEWAYS.png';
import disarm2 from '/assets/DISARM_ANGLED.png';
// import aboutImage from '../assets/about2.jpg';

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const code = `
    let members = 138,
    years = 24;
`

const App: Component = () => {
  return (
    <>
      <Nav />
      <section id="hero">
        <div class="container">
          <div class="flex align-end b-bottom">
            {/* <div>
              <img src={disarm}></img>
            </div>*/}
          </div>
          <div class="b-bottom"></div>
          <div></div>
        </div>
        <div class="container">
          <div class="flex col align-center justify-center txt-center g-4 b-left b-right b-bottom p-5">
            <div class="flex g-2">
              <span class="badge outline">V 0.2.0</span>
              <span class="badge secondary">Stable</span>
            </div>
            <h1 class="title">Westwood Robotics</h1>
            <p class="txt-muted">Inspiring new <span class="txt-normal">generations of engineers since 2008</span> <br></br> @ Westwood Highschool, Austin, TX.</p>
          </div>
          <div class="flex align-center justify-center g-3 b-bottom b-right b-left">
            <button class="primary">Join Us</button>
            <button class="outline">Learn More</button>
          </div>
          <div class="flex align-center justify-center p-5 b-left b-right">
          </div>
        </div>
        <div class="container">
          <div class="flex align-end b-bottom">
            {/* <div id="disarm2">
              <img src={disarm2}></img>
            </div>  */}
          </div>
          <div class="b-bottom">
          </div>
          <div></div>
        </div>
      </section>
      <div class="infinite-carousel">
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />

        <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />

        <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />

        <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" />
        <img src="https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw" />
      </div>
      <section class="grid col g-4 bg-light py-5">
        <div>
          <h1>We build robots</h1>
          <p>Here at Westwood Robotics we're only good at a few things, and robotics is not one of them. Although we sure do seem to act like we know what we're doing.</p>
        </div>
        <div class="code">
          <pre>
            {code}
          </pre>
        </div>
      </section>

      {/*<section class="about">
          <div class="about-img">
            <img src="" />
          </div>
          <div class="about-main">
            <h2>About Us</h2>
            <p>
              Westwood Robotics is a student-led organization dedicated to fostering innovation, teamwork, and a passion for STEM.
              We participate in competitions, build cutting-edge robots, and inspire the next generation of engineers and leaders.
            </p>
          </div>
        </section>

        <section class="officers">
          <h2>2026 Leadership</h2>
          <div class="officer-grid">
            <div class="officer-card">
              <tag>President</tag>
              <img src={aboutImage} />
              <p>Iris Chen</p>
            </div>
            <div class="officer-card">
              <tag>FRC Director</tag>
              <img src={aboutImage} />
              <p>Archit Garg</p>
            </div>
            <div class="officer-card">
              <tag>FTC Director</tag>
              <img src={aboutImage} />
              <p></p>
            </div>
            <div class="officer-card">
              <tag></tag>
              <img src={aboutImage} />
              <h5></h5>
            </div>
            <div class="officer-card">
              <tag></tag>
              <img src={aboutImage} />
              <h5></h5>
            </div>
            <div class="officer-card">
              <tag></tag>
              <img src={aboutImage} />
              <h5></h5>
            </div>
            <div class="officer-card">
              <tag></tag>
              <img src={aboutImage} />
              <h5></h5>
            </div>
            <div class="officer-card">
              <tag></tag>
              <img src={aboutImage} />
              <h5></h5>
            </div>
          </div>

        </section> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
