"use strict";
function greet(name) {
    console.log('hello,' + name.toUpperCase() + '!');
}
greet('fff');
function greet1() {
    return 23;
}
const names = ['ddd', 'dwsdw', 'ded'];
names.forEach(function (s) {
    console.log(s);
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
