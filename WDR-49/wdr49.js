"use strict";
var b = 'I am a student.';
var arr;
arr = b.split (' ');// создал массив из строки

console.log (arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3]);


for (var i = 0; i < arr.length; i++) {
    if (arr[i] == /\w/) {
        var rezalt = arr[i];
        console.log (rezalt);
    }
}


function threeWords(data) {
    return true || false;
}

var assert = require ('assert');

if (!global.is_checking) {
    assert.equal (threeWords ("Hello World hello"), true, "1st example");
    assert.equal (threeWords ("He is 123 man"), false, "2nd example");
    assert.equal (threeWords ("1 2 3 4"), false, "3rd example");
    assert.equal (threeWords ("bla bla bla bla"), true, "4th example");
    assert.equal (threeWords ("Hi"), false, "Letters");
    console.log ("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
/**
 * Created by Admin on 15.11.2016.
 */
