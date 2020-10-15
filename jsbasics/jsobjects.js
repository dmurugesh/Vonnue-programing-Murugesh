
// Write a function to create a user object from the arguments given.
// ** subject names are  english, maths, computer, physics, chemistry

let Btech = {
    "name": "class A",
    "teachername": "Anu",
    "students": [
        {
            "name": "Appu",
            "id": "01",
            "marks": [
                { "subject": "English", "mark": 42 },
                { "subject": "Maths", "mark": 27 },
                { "subject": "Physics", "mark": 33 },
                { "subject": "Computer", "mark": 40 }
            ]
        },
        {
            "name": "Tom",
            "id": "02",
            "marks": [
                { "subject": "English", "mark": 28 },
                { "subject": "Maths", "mark": 47 },
                { "subject": "Physics", "mark": 45 },
                { "subject": "Computer", "mark": 43 }
            ]
        },
        {
            "name": "Ram",
            "id": "03",
            "marks": [
                { "subject": "English", "mark": 38 },
                { "subject": "Maths", "mark": 42 },
                { "subject": "Physics", "mark": 25 },
                { "subject": "Computer", "mark": 29 }
            ]
        }
    ]
}

//  1. Add student
// 1.1 It should accept name, id

addStudent = (studentname, studentid) => {
    objectStudent = { name: studentname, id: studentid, marks: [] };
    Btech.students.push(objectStudent);
    console.log(Btech);
}

// 2. Enter mark for a student

enterMark = (studentid, subjectname, subjectmark) => {
    let objectMark = {subject: subjectname, mark: subjectmark};
    for (let i = 0; i < Btech.students.length; i++) {
            if (Btech.students[i].id === studentid) {
                Btech.students[i].marks.push(objectMark);
                return Btech.students[i];
            }
        }   
    }

// 3. Enter mark for a subject for multiple students
// we can use 4 program and call the function multiple times to with students name.
// 4. Edit mark for a particular subject of a student

 editMark = (studentid, subjectname, markofsubject) => {
     for (let i = 0; i < Btech.students.length; i++) {
         if (Btech.students[i].id === studentid) {
                 for (let j = 0; j < Btech.students[i].marks.length; j++) {
                    if (Btech.students[i].marks[j].subject === subjectname) {
                        Btech.students[i].marks[j].mark = markofsubject;
                        return Btech.students[i];
                 }
                }
             }

         }
         return "Not found";
        }



// 5. Change the class teacher of a class

changeClassTeacher = (newClassTeacherName) => {
    Btech.teachername = newClassTeacherName;
    return Btech;
}

// 6. Remove a student from a class

removeStudent = (studentName) => {
    for (let i = 0; i < Btech.students.length; i++) {
        if (Btech.students[i].name === studentName) { 
            Btech.students.splice(i, 1);
            return Btech;
        }
    }

}

// 7. Delete a subject entry from every students.

removeSubject = (subjectName) => {
    for (let i = 0; i < Btech.students.length; i++) {
        for (let j = 0; j < Btech.students[i].marks.length; j++) {
            if (Btech.students[i].marks[j].subject === subjectName) {
                Btech.students[i].marks.splice(j, 1);                 
            }   
        }  
        console.log(Btech.students[i].marks);    
    }
    console.log(Btech.students);    
}

// 8.  Find the topper of a class given a subject

topperClass = (subjectName) => {
    let valueArray = [];
    for (let i = 0; i < Btech.students.length; i++) {
        studentsNo = Btech.students.length;
        for (let j = 0; j < Btech.students[i].marks.length; j++) {
            if (Btech.students[i].marks[j].subject === subjectName) {
                valueArray.push(Btech.students[i].marks[j].mark);
            }
        }        
    }
    let maxMark = Math.max(...valueArray);
    for (let l = 0; l < Btech.students.length; l++) {
        for (let m = 0; m < Btech.students[l].marks.length; m++) {
          if (Btech.students[l].marks[m].subject === subjectName && Btech.students[l].marks[m].mark === maxMark) {
            return [Btech.students[l].name, Btech.students[l].id, Btech.students[l].marks[m].subject, Btech.students[l].marks[m].mark];
          }
        }
      }
}

// 9. Find the average mark for a given subject
//Topper class 

averageSubjectMark = (subjectName) => {
    let  totalMark = 0;
    let average = 0;
    let studentsNo = 0;
    for (let i = 0; i < Btech.students.length; i++) {
        for (let j = 0; j < Btech.students[i].marks.length; j++) {
           if (Btech.students[i].marks[j].subject === subjectName) {
              totalMark += Btech.students[i].marks[j].mark                  
           }   
        }
    }
    studentsNo = Btech.students.length;
    average = parseFloat(totalMark / studentsNo);
    return ("The average Mark of " + subjectName + " is : " + average);
}

// 10. Sort and display the list of students in any order - ordered by name, mark etc    

// below code is used to print the name in ascending or desending order 

sortByName = (name, option) => {
    let nameArray = [];
    let sortedArray = [];
      for (let i = 0; i < Btech.students.length; i++) {
       nameArray.push(Btech.students[i].name)
       }
       if (option === "ascending") {
       sortedArray = nameArray.sort();
       } else {
        sortedArray = nameArray.sort((a, b) => {return b - a});
       }
    for (let k = 0; k < sortedArray.length; k++) {
    for (let j = 0; j < Btech.students.length; j++) {
           if (sortedArray[k] === Btech.students[j].name) {
               console.log(Btech.students[j]);
           }
        }
        }
    }

// below code is used to print the mark in ascending or desending order 

sortByMark = (subjectName, option) => {
      let nameArray = [];
      let sortedArray = [];
    for (let i = 0; i < Btech.students.length; i++) {
        for (let j = 0; j < Btech.students[i].marks.length; j++) {
            if (Btech.students[i].marks[j].subject === subjectName) {
               nameArray.push(Btech.students[i].marks[j].mark);
            }
        }
    }
    if(option === 'descending') {
        sortedArray = nameArray.sort((a, b) => {return b - a})
        } else {
                sortedArray = nameArray.sort();
        }
    // Below code is used to print name of student and sorted mark.
    for (let m = 0; m < sortedArray.length; m++) {
    for (let k = 0; k < Btech.students.length; k++) {    
      for (let l = 0; l < Btech.students[k].marks.length; l++) {        
        if (Btech.students[k].marks[l].subject === subjectName && sortedArray[m]  === Btech.students[k].marks[l].mark) {
            console.log([Btech.students[k].name, Btech.students[k].id,  Btech.students[k].marks[l]]);
             } 
        }

      }

    }
}

//  enter input 
// sortby enter either name or subject name.  
// if you want to sort by name enter input as "name";
// preference is used to make either asecending or descending order.

sortBy = (sortby, preference) => {
    if (sortby === "name") {
        return sortByName(sortby, preference);
    } else {
        return sortByMark(sortby, preference);
    }
}



// addStudent("Raju", "04");
// console.log(enterMark("04", "English", 41));
// console.log(editMark("03", "Maths", 40));
// console.log(changeClassTeacher("Mary"));
// console.log(removeStudent("Tom"));
// removeSubject("Computer");
// console.log(topperClass("Maths"));
// console.log(averageSubjectMark("Physics"));
// sortBy("Maths", "descending");



