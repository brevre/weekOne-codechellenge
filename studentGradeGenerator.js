function gradeGenerator(studentMarks) {
    let studentGrade;
    if (studentMarks < 0 || studentMarks > 100) {
        console.log("Invalid marks");
    } else if (studentMarks < 40) {
        studentGrade = "E";
    } else if (studentMarks < 50) {
        studentGrade = "D";
    } else if (studentMarks < 60) {
        studentGrade = "C";
    } else if (studentMarks < 70) {
        studentGrade = "B";
    } else {
        studentGrade = "A";
    }
    console.log(studentGrade);
}
gradeGenerator(39);

