import { createSignal, type Component } from "solid-js";

import { logo, menu, cheveron_down, close } from "../icons";

const Nav: Component = () => {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <nav>
      <div class="flex justify-start align-center">
        <a href="/">{logo()}</a>
      </div>
      <div class="flex justify-between align-center desktop-only">
        <div class="dropdown">
          <button>Programs {cheveron_down()}</button>
          <div class="gap"></div> {/*lazy*/}
          <div class="items">
            <a class="flex g-2 align-center" href="/ftc">
              <p class="txt-light">FTC</p>
              <span class="badge secondary outline">Decode</span>
            </a>
            <a class="flex g-2 align-center" href="/frc">
              <p class="txt-light">FRC</p>
              <span class="badge secondary outline">Rebuilt</span>
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button>Calenders {cheveron_down()}</button>
          <div class="gap"></div> {/*lazy*/}
          <div class="items">
            <a class="txt-light" href="/calendars/club">
              Club Calendar
            </a>
            <a class="txt-light" href="/calendars/ftc">
              FTC Calendar
            </a>{" "}
            {/* unknown if we need 2 diff calendar pages */}
            <a class="txt-light" href="/calendars/frc">
              FRC Calendar
            </a>
          </div>
        </div>
        <a href="/our-team">Our Team</a>
        <a href="/robocamp">Robocamp</a>
      </div>
      <div class="flex justify-end align-center">
        <button onclick={() => setShowModal(true)}>{menu()}</button>
      </div>
      {showModal() && (
        <div class="modal">
          <div class="content">
            <div class="flex justify-between">
              <div class="flex col g-3">
                <p>Misc</p>
                <div class="flex col g-1 txt-light">
                  <a href="/">Home</a>
                  <a href="/our-team">Our Team</a>
                  <a href="/resources">Resources</a>
                </div>

                <p>Programs</p>
                <div class="flex col g-1 txt-light">
                  <a href="/ftc">FTC</a>
                  <a href="/frc">FRC</a>
                  <a href="/robocamp">Robocamp</a>
                </div>

                <p>Calendars</p>
                <div class="flex col g-1 txt-light">
                  <a href="/calendars/club">Club Calendar</a>
                  <a href="/calendars/ftc">FTC Calendar</a>
                  <a href="/calendars/frc">FRC Calendar</a>
                </div>
              </div>
              <div>
                <button onclick={() => setShowModal(false)}>{close}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
