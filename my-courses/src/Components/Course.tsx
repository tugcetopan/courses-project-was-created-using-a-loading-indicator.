// import axios from "axios";
// import { useState } from "react";

function Course({ course, removeOneCourse }) {
  const handleDeleteClick = () => {
    removeOneCourse(course.id);
  };
  return (
    <div className="card">
      <div className="cardTitlePrice">
            <h2 className="cardTitle">{course.title}</h2>
            <h4 className="cardPrice">{course.price}TL</h4>
        </div>
        <p>{ course.content}</p>

      <button className="cardDeleteBtn" onClick={handleDeleteClick}>
        Sil
      </button>
    </div>
  );
}

export default Course;
