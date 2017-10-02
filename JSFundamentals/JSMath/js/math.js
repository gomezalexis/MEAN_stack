arr1 = [6,-9,11];
arr2 = [0, 5, 13,8];
arr3 = [77,8,-2,0,4,-13,10];
num1 = -11;
num2 = 13;
num3 = 16;

console.log(zero_negativity(arr1));
console.log(zero_negativity(arr2));
console.log(is_even(num1));
console.log(is_even(num2));
console.log(is_even(num3));
console.log(how_many_even(arr1));
console.log(how_many_even(arr2));
console.log(create_dummy_array(num2));
console.log(random_choice(arr2));
console.log(random_choice(arr3));



//Math 1
function zero_negativity(arr){
    for(var i =0; i < arr.length; i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}
//Math 2
function is_even(num){
    if(num%2 === 0){
        return true;
    } else{
        return false;
    }
}

// Math 3
function how_many_even(arr){
    var num = 0;
    for(var i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            num += 1;
        }
    }
    return num;
}
// Math 4
function create_dummy_array(num){
    var arr = []
    for(var i = 0; i < num; i++){
        var new_random = Math.floor(Math.random()* (num + 1));
        arr.push(new_random);
    }
    return arr;
}

//Math 5
function random_choice(arr){
    var random_num = Math.floor(Math.random()* arr.length);
    var temp = arr[random_num];
    return temp;
}