import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Components/Courses";
import Loading from "./Components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = async (id) => {
    const afterDeletingCourses = courses.filter((course) => {
      return course.id !== id;
    });

    setCourses(afterDeletingCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refleshDiv">
              <h2>Kursların hepsini sildin!</h2>
              <button className="cardDeleteBtn" onClick={fetchCourses}>
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse}></Courses>
          )}
        </>
      )}
    </div>
  );
}

export default App;
