import { createSignal, type Component } from "solid-js";

import { logo, menu, cheveron_down } from "../../icons";

const Nav: Component = () => {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <nav>
      <div class="flex justify-start align-center">
        <a href="/">{logo()}</a>
      </div>
      <div class="flex justify-between align-center">
        <div class="dropdown">
          <button>Programs {cheveron_down()}</button>
          <div class="gap"></div> {/*lazy*/}
          <div class="items">
            <a class="flex g-2 align-center" href="/ftc">
              <p class="txt-muted">FTC</p>
              <span class="badge secondary outline">Decode</span>
            </a>
            <a class="flex g-2 align-center" href="/frc">
              <p class="txt-muted">FRC</p>
              <span class="badge secondary outline">Rebuilt</span>
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button>Calenders {cheveron_down()}</button>
          <div class="gap"></div> {/*lazy*/}
          <div class="items">
            <a class="txt-muted" href="/calendars/club">Club Calendar</a>
            <a class="txt-muted" href="/calendars/ftc">FTC Calendar</a>
            <a class="txt-muted" href="/calendars/frc">FRC Calendar</a>
          </div>
        </div>
        <a href="/resources">Resources</a>
        <a href="/robocamp">Robocamp</a>
      </div>
      <div class="flex justify-end align-center">
        <button onclick={() => setShowModal(true)}>{menu()}</button>
      </div>
      {showModal() && (
        <div class="modal">
          <div class="content">
            <div class="flex justify-between">
              <div class="flex col g-2">
                <a href="/ftc">FTC</a>
                <a href="/frc">FRC</a>
                <a href="/robocamp">Robocamp</a>
                <a href="calendar">Calender</a>
              </div>
              <div>
                <button onclick={() => setShowModal(false)}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
