/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./styles/index.css";

import NotFound from "./routes/NotFound";
import App from "./routes/App";
import FRC from "./routes/FRC";
import FTC from "./routes/FTC";
import Robocamp from "./routes/Robocamp";
import Resources from "./routes/Resources";
import Calendars from "./routes/Calendars";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/frc" component={FRC} />
      <Route path="/ftc" component={FTC} />
      <Route path="/robocamp" component={Robocamp} />
      <Route path="/resources" component={Resources} />
      <Route path="/calendars/club" component={Calendars} />
      <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  root!
);