// first problem
var x = [];
console.log(x);
x.push('Coding','Dojo','Rocks');
console.log(x);
x.pop();
console.log(x);


document.getElementById('first').innerHTML = arrayAsList(x);

console.log('hola');

// second problem
const y = [];

y.push(88);
console.log(y);
document.getElementById('second').innerHTML = arrayAsList(y);
// It took the new push value

// third problem
var z = [9, 10, 6, 5, -1, 20, 13, 2];
var zz = [];
for(var i = 0; i < z.length; i++){
    console.log(z[i]);
}

for(var i = 0; i < z.length-1; i++){
    zz.push(z[i]);
}

document.getElementById('third').innerHTML = zz;

// fourth problem
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log("The length of names is: " + names.length);

for(var i = 0; i < names.length; i++){
    if(names[i].length === 5){
        console.log(names[i]);
    }
}

document.getElementById('fourth').innerHTML = lengthFiveAsList(names);

// fifth problem
function yell(string){
    
    return string.toUpperCase();
}

console.log(yell("alexis"));
document.getElementById('fifth').innerHTML = yell('alexis')

// below the functions used above
function arrayAsList(arr){
    var ans = '<ul>';
    for(var i = 0; i < arr.length; i++){
        ans += "<li>" + arr[i] + "</li>";
        if(i === arr.length){
            ans += "</ul>";
        }
    }
    return ans;
}

function lengthFiveAsList(arr){
    var ans = '<ul>';
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length === 5){
            ans += "<li>" + arr[i] + "</li>";
        }
        if(i === arr.length){
            ans += "</ul>";
        }
    }
    return ans;
}