import type { Component } from "solid-js";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Outreach: Component = () => {
  return (
    <>
      <section id="hero">
        <Nav />
        <div class="flex align-center justify-center txt-center item-center b-all r-2">
          <div class="flex col g-4 py-5 px-2">
            <h1>Outreach</h1>
            <p class="txt-light">
              Giving back to the community through robotics
            </p>
          </div>
        </div>
      </section>

      <section>
        <div class="flex col g-4 item-center">
          <div class="grid col g-4">
            <img
              src="/imgs/raccoon-bot.jpg"
              alt="Raccoon Bot"
              class="r-2"
            />
            <div class="flex col g-3">
              <h3>Raccoon Bot (FRC)</h3>
              <p class="txt-light">
                The Raccoon Bot is an FRC project hosted by Team 2583 - Orange
                Dynamite that helps us give back to our community. The Raccoon
                Bot is a trash can on wheels that can help litter collection in
                our community, as the issues of plastic pollution and littering
                has become more prominent. To create the Raccoon Bot in an
                environmental friendly way, we used compressed cardboard and other
                recycled parts from our previous FRC and FTC seasons.
              </p>
            </div>
          </div>

          <div class="grid col g-4">
            <img
              src="/imgs/ProjectArtemis.jpeg"
              alt="Minibots Workshop"
              class="r-2"
            />
            <div class="flex col g-3">
              <h3>Minibots Workshop (FRC)</h3>
              <p class="txt-light">
                Led by female Westwood Robotics students, attendees will be able
                to build a car-like robot out of basic parts, wire together the
                different components of the robot, and finally program the robot
                to do various tasks. After the workshop participants will get to
                take home the robot they build and do even more with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Outreach;
