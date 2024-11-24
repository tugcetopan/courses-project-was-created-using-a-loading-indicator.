import Course from "./Course";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Courses({ courses, removeCourse }: any) {
  console.log(courses);
  return (
    <div className="courseMainDiv">
      <div>
        <h2> Kurslarım </h2>
      </div>
      <div className="cardDiv">
        {courses.map((course, index) => {
          return (
            <Course
              key={index}
              course={course}
              removeOneCourse={removeCourse}
            ></Course>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
