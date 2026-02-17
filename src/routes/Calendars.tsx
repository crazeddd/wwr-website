import { Component } from "solid-js";
import { useLocation } from "@solidjs/router";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { club_calendar_url, frc_calendar_url, ftc_calendar_url } from "../../config.json";

const Calendars: Component = () => {
  const location = useLocation();

  return (
    <>
      <section id="hero" class="vw-100 vh-100">
        <Nav />
        <div class="flex col align-center justify-center txt-center item-center g-4">
          {location.pathname == "/calendars/club" && (
            <iframe
              class="r-1"
              src={club_calendar_url}
            ></iframe>
          )}
          {location.pathname == "/calendars/frc" && (
            <iframe
              class="r-1"
              src={frc_calendar_url}
            ></iframe>
          )}
          {location.pathname == "/calendars/ftc" && (
            <iframe
              class="r-1"
              src={ftc_calendar_url}
            ></iframe>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Calendars;
