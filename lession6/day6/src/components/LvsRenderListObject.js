import React, { useState } from "react";
import "./LvsRenderListObject.css";
const LvsRenderListObject = () => {
  const [students, setStudents] = useState([
    { lvsid: 1, name: "Lục Văn Sơn", age: 20, course: "ReactJS" },
    { lvsid: 2, name: "Hà Văn Shady", age: 21, course: "Html" },
    { lvsid: 3, name: "Cú Có Ca", age: 22, course: "Css" },
  ]);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedAge, setEditedAge] = useState("");
  const [editedCourse, setEditedCourse] = useState("");

  const handleEdit = (student) => {
    setEditingStudentId(student.lvsid);
    setEditedName(student.name);
    setEditedAge(student.age);
    setEditedCourse(student.course);
  };

  const handleSave = () => {
    const updatedStudents = students.map((student) =>
      student.lvsid === editingStudentId
        ? { ...student, name: editedName, age: editedAge, course: editedCourse }
        : student
    );
    setStudents(updatedStudents);
    setEditingStudentId(null);
  };

  const handleDelete = (lvsid) => {
    const updatedStudents = students.filter(
      (student) => student.lvsid !== lvsid
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>LvsRenderListObject</h1>
      <h2>Thông Tin Sinh Viên</h2>
      <hr />
      <table className="student-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.lvsid}>
              <td>{index + 1}</td>
              <td>
                {editingStudentId === student.lvsid ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editingStudentId === student.lvsid ? (
                  <input
                    type="number"
                    value={editedAge}
                    onChange={(e) => setEditedAge(Number(e.target.value))}
                  />
                ) : (
                  student.age
                )}
              </td>
              <td>
                {editingStudentId === student.lvsid ? (
                  <input
                    type="text"
                    value={editedCourse}
                    onChange={(e) => setEditedCourse(e.target.value)}
                  />
                ) : (
                  student.course
                )}
              </td>
              <td>
                {editingStudentId === student.lvsid ? (
                  <button className="save-btn" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.lvsid)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LvsRenderListObject;
