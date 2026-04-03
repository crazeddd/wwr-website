import type { Component } from "solid-js";

import { instagram_url, youtube_url } from "../../config.json";
import { insta, youtube } from "../icons";

const Footer: Component = () => {
  return (
    <footer>
      <div class="flex g-3">
        <a href={instagram_url} target="_blank">{insta()}</a>
        <a href={youtube_url} target="_blank">{youtube()}</a>
      </div>
      <small>©2026 Westwood Robotics</small>
      <small class="txt-light">All rights reserved.</small>
    </footer>
  );
};

export default Footer;
