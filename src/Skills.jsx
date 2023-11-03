import React from "react";

const Skills = (props) => {
  return (
    <ol>
      {props.items.map((skill) => (
        <li>{skill}</li>
      ))}
    </ol>
  );
};

export default Skills;
