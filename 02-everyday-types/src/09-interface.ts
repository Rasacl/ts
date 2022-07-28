interface Point{
    x:number,
    y:number
}

function printPoint(pt:Point){
    console.log(pt.x,pt.y);
    
}

printPoint({
    x:100,
    y:999
})


//扩展接口

interface animal{
    name:string
}

interface Bear extends animal{
    honey:boolean
}

const bear:Bear = {
    name:'winin',
    honey:true
}

console.log(bear.name);
console.log(bear.honey);


type Animal = {
    name:string
}

type bear = Animal & {
    honey:boolean
}

const tBear: bear = {
    name:'fewfe',
    honey:false
}

//向现有的类型添加字段

interface myWindow{
    count:number
}
interface myWindow{
    title:string
}

const w:myWindow = {
    count:100,
    title:'defde'
}

//类型创建后是不能更改的
//  type window = {
//     title:string
//  }

//  type window = {
//     count:number
//  }

