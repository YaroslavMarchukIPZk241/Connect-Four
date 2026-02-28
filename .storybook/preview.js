/** @type { import('@storybook/react-webpack5').Preview } */

import React from "react";
import "../src/index.css";

/*
  Ensure modal-root exists BEFORE stories render
*/
if (typeof document !== "undefined") {
  let modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }
}

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;