//Object

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

// Extra Problem 
// 1. Find the total mark for a student and save it in the user object

totalMarks = (studentName) => {
    let total = [];
    for (let i = 0; i < Btech.students.length; i++) {
        for (let j = 0; j < Btech.students[i].marks.length; j++) {
            if (Btech.students[i].name === studentName) {
                total.push(Btech.students[i].marks[j].mark);
            }
        }
    }
    console.log(total);
    let sum = total.reduce((a, b) => { return a + b; }, 0)
    console.log(sum);
    let totalMark = { totalmark: sum };
    for (let k = 0; k < Btech.students.length; k++) {
        if (Btech.students[k].name === studentName) {
            Btech.students[k].marks.push(totalMark);
            console.log(Btech.students[k]);
        }
    }
}

totalMarks("Ram");
