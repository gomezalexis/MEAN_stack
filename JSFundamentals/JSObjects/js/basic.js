// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


for(var i = 0; i < students.length; i++){
    var student = students[i];
    console.log("Name: " + student['name']+ ", Cohort: " + student['cohort']);
}

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(user in users){
     console.log(user.toUpperCase());
     for(var i = 0; i < users[user].length; i++){
         var key = users[user][i];
         var num = i + 1;
         var totalChar = key['last_name'].length + key['first_name'].length;
        console.log(num + ' - '+ key['last_name'] + ', ' + key['first_name'] + ' - ' + totalChar );
     }
 }

 