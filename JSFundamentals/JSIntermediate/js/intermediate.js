let stars = starString(8);
let x = [4, 6, 1, 3, 5, 7, 25];
let z = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

console.log(stars);
console.log("Now the second excersice")
console.log(drawStars(x));

document.getElementById('part1').innerHTML = stars;
document.getElementById('part2').innerHTML = arrayAsList(drawStars(x));
document.getElementById('part3').innerHTML = arrayAsList(drawStars(z));


function starString(num){
    newStr = "";
    for(var i = 0; i < num; i++){
        newStr += '*';
    }
    return newStr
}

function drawStars(arr){
    var allStars = [];
    for(var i = 0;i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            var letter = arr[i].charAt(0).toLowerCase();
            var count = arr[i].length;
            console.log("This is what I'm looking for: " + count);
            console.log(letter);
            var temp = "";
            for(var j = 0; j < count; j++){
                temp += letter;
            }
            allStars.push(temp);
        } else{
        console.log(starString(arr[i]));
        allStars.push(starString(arr[i]));
        }
    }
    return allStars;
}

function arrayAsList(arr){
    var ans = '<ul>';
    for(var i = 0; i < arr.length; i++){
        ans += "<p>" + arr[i] + "</p>";
        if(i === arr.length){
            ans += "</ul>";
        }
    }
    return ans;
}