let x11:undefined = undefined

let u:null = null

function dosSomeThing(x:string | null){
    if(x == null){

    }else{
        console.log('hello' + x.toUpperCase());
        
    }
}

function liveDanger(x?:number | null){
    console.log(x!.toFixed());
    
}