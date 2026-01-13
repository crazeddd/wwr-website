import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";

const NotFound: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="flex align-center justify-center vh-100 vw-100 p-4">
      <div class="flex col txt-center align-center g-3">
        <h1 class="xl">404</h1>
        <button onclick={() => navigate("/")} class="secondary">
          {"<"}- Take me home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
