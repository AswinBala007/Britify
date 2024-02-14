import React from "react";
import Course from "../components/Course";

const courses = [
  {
    id: 1,
    title: "Course 1",
    description: "This is the first course in the series.",
    modules: [
      {
        id: 1,
        title: "Lesson 1",
        description: "This is the first lesson in the course.",
      },
      {
        id: 2,
        title: "Lesson 2",
        description: "This is the second lesson in the course.",
      },
      {
        id: 3,
        title: "Lesson 3",
        description: "This is the third lesson in the course.",
      },
    ],
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is the second course in the series.",
    modules: [
      {
        id: 1,
        title: "Lesson 1",
        description: "This is the first lesson in the course.",
      },
      {
        id: 2,
        title: "Lesson 2",
        description: "This is the second lesson in the course.",
      },
      {
        id: 3,
        title: "Lesson 3",
        description: "This is the third lesson in the course.",
      },
    ],
  },
];

const Courses = () => {
  return (
    <div>
      {/* <CustomNavBar /> */}
      {courses.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          description={course.description}
          modules={course.modules}
        />
      ))}
    </div>
  );
};

export default Courses;
