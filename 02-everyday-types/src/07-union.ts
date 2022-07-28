function printId(id:number | string){
    console.log('you ID is' + id)
    
}

printId(101)
printId('222')

function welcomePeople(x:string[] | string){
    if(Array.isArray(x)){
        console.log('Hello' + x.join('and'));
    }else
    {
        console.log('Hello' + x);
        
    }
    
}


welcomePeople('A')
welcomePeople(['a','v'])

function getFirstTree(x:number[] | string){
    return x.slice(0,3)
}

getFirstTree('adedfwefew')
getFirstTree([1,3,5])