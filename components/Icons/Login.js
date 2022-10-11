import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 2.1 1 12h3v9h6v-6h4v6h6v-9h3L12 2.1z" />
  </svg>
);

export default SvgComponent;
