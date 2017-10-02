
let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
let target_id = "main";

appendList(students, target_id);
superAppend(students, "p", target_id);



function appendList(arr,id){
    for(var i = 0; i < arr.length; i++){
        let new_student = document.createElement("li");
        new_student.innerHTML = arr[i];
        document.getElementById(id).appendChild(new_student);
    }
}

function superAppend(arr, element,id){
    for(var i = 0; i < arr.length; i++){
        let new_student = document.createElement(element);
        new_student.innerHTML = arr[i];
        document.getElementById(id).appendChild(new_student);
    }
}