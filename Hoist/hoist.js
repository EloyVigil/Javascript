1
console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello) // logs undefined
// hello = 'world'

2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
//  test(); // test is not a function
// var needle = 'magnet';
//  console.log(needle) // logs magnet in the console

3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';// global variable
// function print(){
// brendan = 'only okay';// local variable in the function scope is declared
// console.log(brendan);// console logged 'only okay'from local var from within function scope
// console.log(brendan);// console logs global variable 'super cool'

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';// global variable food is declared as 'chicken'
// console.log(food);// logs to console global variable 'chicken'
// eat();// 
// function eat(){ // function gets hoisted
// food = 'half-chicken';// local variable food is declared inside functions scope
// var food; // another local variable food is declared
// console.log(food);// logs 'half-chicken' to console
// food = 'gone';// reassigns local variable food to 'gone'

5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;// hoisted variable
// mean(); error cant invoke a function before its assigned to the variable
// console.log(food);// undefined food variable has not been declared
// var mean = function() { // function is assigned to mean variable
// var food; // local variable is declared without assignment
// food = "chicken";// food variable is declared locally in the scope of the function
// console.log(food);// logs "chicken" to console
// food = "fish"; // assigns food variable to "fish"
// console.log(food);// logs "fish" to console
// console.log(food);// undefined

6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;// hoisted var
// console.log(genre)// undefined
// genre = "disco" // global variable genre is assigned "disco"
// rewind();// error cannot invoke function that has not been declared yet
// var genre; // genre declared as local variable in the scope of the function not assigned yet
// genre = "rock" // genre variable is aggisned "rock"
// console.log(genre);// logs "rock" to console from local variable genre
// genre = "r&b"// reassign "r&b" to local variable genre
// console.log(genre)// logs "r&b" to console
// console.log(genre);// global variable genre is logged to console as "disco"

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";// global variable dojo is declared and assigned "san jose"
// console.log(dojo);// logs global variable dojo to console as "san jose"
// learn(); error cannnot invoke function that has not been created yet
// function learn(){// declaring new function called learn
// var dojo;// local variable is declared inside the scope of the function
// dojo = "seattle"; local variable dojo is assigned "seattle"
// console.log(dojo)// "seattle" is logged in the console 
// dojo = "burbank"; // local dojo variable is reassigned "burbank"
// console.log(dojo); // burbank is logged in the console
// console.log(dojo); // san jose is logged in the console from the global variable dojo



















