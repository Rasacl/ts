"use strict";
function printPoint(pt) {
    console.log(pt.x, pt.y);
}
printPoint({
    x: 100,
    y: 999
});
const bear = {
    name: 'winin',
    honey: true
};
console.log(bear.name);
console.log(bear.honey);
const tBear = {
    name: 'fewfe',
    honey: false
};
const w = {
    count: 100,
    title: 'defde'
};
//类型创建后是不能更改的
//  type window = {
//     title:string
//  }
//  type window = {
//     count:number
//  }
