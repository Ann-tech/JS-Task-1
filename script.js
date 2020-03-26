//stores name in a variable and courses in an array
let name = "Ann-tech";
let courses = ["HTML","css","js","UI/UX"];

//This displays the name and courses
console.log("My name is "+name);

//This is a loop that displays the courses
for(let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

//to find and display all even number from 1-200 (inclusive)
if(courses.length % 2 === 0){
    for(let i = 1; i<=200; i++){
        if(i % 2 === 0){
            console.log(i+",");
        }
    }
}