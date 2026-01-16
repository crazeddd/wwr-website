import { Component } from "solid-js";
import { useLocation } from "@solidjs/router";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Calendars: Component = () => {
  const location = useLocation();

  return (
    <>
      <section class="vw-100 vh-100">
        <Nav />
        <div class="flex col align-center justify-center txt-center item-center g-4">
          {location.pathname == "/calendars/club" && (
            <iframe
              class="r-1"
              src="https://calendar.google.com/calendar/embed?src=c_1597c83b340a3d01850cd43807cb5ad75e885fec85a898105ab1428bc63e94c9%40group.calendar.google.com&ctz=America%2FChicago"
            ></iframe>
          )}
          {location.pathname == "/calendars/frc" && (
            <iframe
              class="r-1"
              src="https://calendar.google.com/calendar/embed?src=westwood_robotics%40roundrockisd.org&ctz=America%2FChicago"
            ></iframe>
          )}
          {location.pathname == "/calendars/ftc" && (
            <iframe
              class="r-1"
              src="https://calendar.google.com/calendar/embed?src=westwood_robotics%40roundrockisd.org&ctz=America%2FChicago"
            ></iframe>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Calendars;
