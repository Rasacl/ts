let x1 = 'fdwfddw'
x1 = 'dqwedfe2d'

const f = 'sds'
// f = ''

let r:'hello' = 'hello'
// x = 'word'

function printText(x:string,alignment:'left' | 'right' | 'center'){

}

printText('world','left')
// printText('hello','center2')


function compare(a:string,b:string):-1 | 0 | 1{
    return a === b ? 0 : a > b ? 1: -1
}

interface Option{
    width:number
}

function configure(x:Option | 'auto'){

}

configure({
    width:100
})

configure('auto')

let b1:true = true

let b2:false = false

const obj1 = {
    count:1
}

if(true){
    obj1.count = 1
}

function handleRequest(url:string,method:'GET' | 'POST' | 'GUESS'){

}

const req = {
    url:'http://baidu.com',
    method:'GET'
} as const

// handleRequest(req.url,req.method as 'GET')
handleRequest(req.url,req.method)
