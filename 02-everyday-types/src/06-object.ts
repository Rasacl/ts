function printCoord(pt:{x:number;y:number}){
    console.log(pt.x,pt.y)
}

printCoord({
    x:3,
    y:7
})


function printName(obj:{first:string,last?:string}){
    console.log(obj.first,obj.last);
    // if(obj.last !== undefined){
    //     console.log(obj.last.toUpperCase)
    // }
    console.log(obj.last?.toUpperCase());
    
    
}

printName({
    first:'fff'
})

printName({
    first:'fff',
    last:'444'
})