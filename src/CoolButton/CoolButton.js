import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

function CoolButton({isSmall, isDanger, isSuccess}) {
  return (
<div class="buttons">
  <button class="button is-primary is-light">Primary</button>
  <button class="button is-link is-light">Link</button>
</div>
  );
};

export default CoolButton;