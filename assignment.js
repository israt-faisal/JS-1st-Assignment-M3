

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;

}
var result = feetToMile(26400);
console.log(result);




function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}
var woodResult = woodCalculator(10, 15, 18);
console.log(woodResult);





function brickCalculator(firstTenFloor, secondTenFloor, restFloors){
    const brickPerFeet = 1000
    var firstTenFloor = brickPerFeet * 15 * firstTenFloor;
    var secondTenFloor = brickPerFeet * 12 * secondTenFloor;
    var restFloors = brickPerFeet * 10 * restFloors;
    var totalBrick = firstTenFloor + secondTenFloor + restFloors;
    return totalBrick;
}
var brickResult = brickCalculator(10 , 20, 21);
console.log(brickResult);





function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < smallest.length; i++) {
        var currentName = names[i];
        if (currentName < smallest) {
            smallest = currentName;
        }

    }
    return smallest;

}
var smallestName = tinyFriend(['shazzad', 'eti', 'faisal', 'israt', 'mumu']);
console.log(smallestName);




