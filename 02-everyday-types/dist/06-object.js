"use strict";
function printCoord(pt) {
    console.log(pt.x, pt.y);
}
printCoord({
    x: 3,
    y: 7
});
function printName(obj) {
    var _a;
    console.log(obj.first, obj.last);
    // if(obj.last !== undefined){
    //     console.log(obj.last.toUpperCase)
    // }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({
    first: 'fff'
});
printName({
    first: 'fff',
    last: '444'
});
