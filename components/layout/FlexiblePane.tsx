import React from "react";

const FlexiblePane: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div> Flexible Pane {props.children}</div>;
};

export default FlexiblePane;
