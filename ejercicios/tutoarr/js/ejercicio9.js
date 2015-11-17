/**
 * Created by DavidPeralvoGomez on 17/11/15.
 */

function funcion(){
    var john = {name:"John Smith", age:23}
    var mary = {name:"Mary key", age:18}
    var bob = {name:"Bob-small", age:6}

    var people=[john,mary,bob];
    console.log(ageSort(people));


}

function ageSort(people){

    ages=[people[0].age,people[1].age,people[2].age];
    return ages.sort(test);

}
function test(a, b) {
    if (a > b){return 1;}
    else if (a < b){return -1;}
    else{return 0;}}

window.addEventListener("load",funcion);