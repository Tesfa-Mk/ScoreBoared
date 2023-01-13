let object = document.getElementById("left")
let objectTwo = document.getElementById("right")
let resultOfFirst = 0
let resultOfSecond = 0
function addOneFirst(){
    resultOfFirst += 1;
    object.innerHTML = resultOfFirst
}
function addTwoFirst(){
    resultOfFirst += 2;
    object.innerHTML = resultOfFirst
}
function addThreeFirst(){
    resultOfFirst += 3;
    object.textContent = resultOfFirst
}
function addOne(){
    resultOfSecond += 1
    objectTwo.textContent = resultOfSecond
}
function addTwo(){
    resultOfSecond += 2
    objectTwo.textContent = resultOfSecond
}
function addThree(){
    resultOfSecond += 3
    objectTwo.textContent = resultOfSecond
}
