type point = {
    x:number,
    y:number
}

function printCoords(pt:point){

}

printCoords({
    x:100,
    y:300

})


type ID = number | string
function printIds(id:ID){

}

printIds(100)
printIds('hello')


type userInputs = string

function userInput(str:string):userInputs{
    return str.slice(0.3)
}

userInput('hello')