// Test one
let test1 = magic_multiply(5,2);
console.log(test1);

// Test 2
let test2 = magic_multiply(0,0);
console.log(test2);

// Test 3
let test3 = magic_multiply([1,2,3],2);
console.log(test3);

// Test 4
let test4 = magic_multiply(7,"three");
console.log(test4);

//Test 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);

// Here the function
function magic_multiply(x,y){

    if(typeof x === 'string'){
        var ans = "";
        for(var i = 0; i < 3;i++){
            ans += x;
        }
        return ans;
    }
    if(typeof y === 'string'){
        var ans = "Error: Can not multiply by string";
        return ans;
    }
    if(x instanceof Array){
        var ans = [];
        for(var i = 0; i < x.length; i++){
            var temp = x[i]*y;
            ans.push(temp);
        }
        return ans;
    } else{
        var ans = x*y;
        return ans;
    }
}