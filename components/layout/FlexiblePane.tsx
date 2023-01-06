import React from "react";

const FlexiblePane: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div> {props.children}</div>;
};

export default FlexiblePane;
