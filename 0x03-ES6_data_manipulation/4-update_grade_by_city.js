export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  // Update grades for filtered students
  const updatedStudents = filteredStudents.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchedGrade) {
      return { ...student, grade: matchedGrade.grade >= 60 ? matchedGrade.grade : 'N/A' };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
