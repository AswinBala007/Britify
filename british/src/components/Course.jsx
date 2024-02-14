import React from "react";
import CustomNavBar from "./CustomNavBar";

const Course = ({ title, description, modules }) => {
  return (
    <div>
      <CustomNavBar />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Modules:</h3>
        <ul>
          {modules.map((module) => (
            <li key={module.id}>
              <h4>{module.title}</h4>
              <p>{module.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course;
