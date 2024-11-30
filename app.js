//q#01
//exp # 01
var  num1 = 1
var exp1 = ((4+5)&& "abc" || false + "test") * (num1-- || num1--) || (false && (++num1 + 1)) * "end"; 
                      ("abc") * (1) || (false) * "end" ; 
console.log(exp1);
// var exp1 = ((4+5)&& "abc" || false + "test") * (num1-- || num1--) || (false && (++num1 + 1)) * "end"; 
//NaN


//exp #02
// let num2 = 6
// let exp2 = 10 * ("fool" && 5 + (++num2) || "bar") &&  ("bar") && (false + --"test") || 0 && true;
let test = 10;
exp2 = 10 * ("fool" && 5 + (++6) || "bar") && ("bar") && (false + --test) || 0 && true;
console.log(exp2);
//syntax error



//exp#03

let exp3 = 3 + (1-- || "start") * 4 && (--0 + "value") * (1+2) + "result"; 
console.log(exp3);
//The expression 2 * 4 equals 8. So, the expression becomes:
//(--0 + "value") 
//The expression "0value" is a string, and multiplying a string by a number results in NaN (Not a Number).
//3 + 8 && NaN + "result"
//The expression 8 && NaN equals NaN (because NaN is a falsy value). So, the expression becomes:
//The final answer is: NaNresult

// exp #04

let exp4 = "hello" * (++0 + true) || (2+3 * "abc") *(0+1) + "xyz" && 0;
console.log(exp4);
//The expression "hello" * 2 equals NaN (because you cannot multiply a string by a number).
//The expression 3 * "abc" equals NaN (because you cannot multiply a number by a string). The expression 2 + NaN equals NaN.
//The expression 0+1 equals 1. The expression NaN * 1 equals NaN.
//NaN || NaN + "xyz" && 0;
//The expression NaN || NaN equals NaN (because both sides are NaN). The expression "xyz" && 0 equals 0 (because 0 is a falsy value).
// the final answer is 0.



//exp #05

let exp5 = (true || (0+1) * "test" && 4) || (false && 3 + "value") * 1-- + 2;
console.log(exp5);
//(true || (0+1) * "test" && 4)
//Since true is a truthy value, the expression short-circuits to true.
//true || (false && 3 + "value") * 1-- + 2.
// the answer is true.



//exp #06
let exp6 = ++2 + "abc" && (4*2) + 3 || (0+1) && (3 * "hello") || 5--;
console.log(exp6);
//++2 + "abc"
//The expression ++2 equals 3. The expression 3 + "abc" equals "3abc".
//"3abc" && (4*2) + 3
// since the exp will be 3abc . and its a truely value.
//(4*2) + 3
//The expression 4*2 equals 8. The expression 8 + 3 equals 11.
// since the 3abc is a truely value and the 11 is also a turly value the equation equalate to 11.
//11 || (0+1) && (3 * "hello") || 5--
// the final answer is 11.





//exp #07
let exp7 = ("foo" + 5) * (++0 + true) || 2 * 3 + (true + 2) || 'result';
console.log(exp7);
//The expression "foo" + 5 equals "foo5"
//("foo5") * (++0 + true)
//The expression ++0 equals 1. The expression 1 + true equals 2. The expression "foo5" * 2 equals NaN (because you cannot multiply a string by a number).
//NaN || 2 * 3 + (true + 2) || 'result'
//Since NaN is a falsy value, the expression will evaluate the next
//2 * 3 + (true + 2)
// since 2 * 3 is qual to 6. and (true + 1) is equal to 3 .its sum up  and the 
//final answer is 6 + 3 = 9.






//exp #08

let exp8 = (0 + 1) && (true+0) || (false + "test") * 4 && 3 + 2 || ++"value";
console.log(exp8);
 //(0 + 1) && (true+0)
//The expression 0 + 1 equals 1. The expression true + 0 equals 1. Since both expressions are truthy values, the expression evaluates to 1.
// 1 is a truely value the final answer of the above equation is 1 .







//exp # 09 
let exp9 = 3 * "abc" + (true + 1) || (++0 + "test") && (3 + "result") || null;
console.log(exp9);

// the expression 3 * abc is equal to NaN bcz you can't multiply the number with string.
// as same true + 1 is = 2 . the expression NaN + 2 is equal to NaN .
//NaN || (++0 + "test") && (3 + "result") || null
//Since NaN is a falsy value, the expression will evaluate the next part:
//(++0 + "test") && (3 + "result")
//The expression ++0 equals 1. The expression 1 + "test" equals "1test". Since "1test" is a truthy value, the expression will evaluate the next part:
//(3 + "result")
//The expression 3 + "result" equals "3result".
//"1test" && "3result"
//Since both expressions are truthy values, the expression evaluates to "3result".
// the final answer is "3result".



//exp #10
let exp10 = (++6 + false) && "start" || 0 + 1 && "value" || 5 * "end" && ++3;
console.log(exp10);
//(++6 + false)
//The expression ++6 equals 7. The expression 7 + false equals 7 (because false is converted to 0).
//7 && "start"
//Since 7 is a truthy value and "start" is also a truthy value, the expression evaluates to "start".
//"start" || 0 + 1 && "value" || 5 * "end" && ++3
//Since "start" is a truthy value, the expression short-circuits to "start". The rest of the expression is not evaluated.



//exp #11
let exp11 = (false && "hello") + (3++ || 3 + "test") * 4 || 5 * "abc" && 0;
console.log(exp11);
//(false && "hello")
//Since false is a falsy value, the expression short-circuits to false.
//(3++ || 3 + "test")
// The expression 3 || 3 + "test" equals 3 (because 3 is a truthy value and the expression short-circuits).
//false + 3 * 4
//The expression 3 * 4 equals 12. The expression false + 12 equals 12 (because false is converted to 0).
//The final answer is: 12.




//exp #12
let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
console.log(exp12);
//"hello" * (true + 0)
//The expression true + 0 equals 1. The expression "hello" * 1 equals NaN (because you cannot multiply a string by a number).
//NaN + 2
// this is equal to NaN.
//(false + 1) * 3
//The expression false + 1 equals 1. The expression 1 * 3 equals 3.
//3 && "result"
//Since 3 is a truthy value and "result" is also a truthy value, the expression evaluates to "result".
// the final answer is "result".




//exp # 13
let exp13 = 5 * (3++ || false) + 2 && (false + "test") || 3 * "end" && 4;
console.log(exp13);
//(3++ || false)
//The expression 3++ equals 3. Since 3 is a truthy value, the expression short-circuits to 3.
//5 * 3
//The expression 5 * 3 equals 15.
//15 + 2
//The expression 15 + 2 equals 17.
//17 && (false + "test")
//Since 17 is a truthy value, the expression will evaluate the next part:
//(false + "test") is equal to "test" bcz false is converted into 0.
//"test" || 3 * "end" && 4 since the "test" is truely value than the final ans is "test".



//exp # 14
let exp14 = (false+ "abc") * 2 || (--4 + 1) * "start" + 3 && 4 || "end";
console.log(exp14);
// (false + "abc")
// The expression false + "abc" equals "abc" (because false is converted to 0).
// "abc" * 2
// The expression "abc" * 2 equals NaN (because you cannot multiply a string by a number).
// NaN || (--4 + 1) * "start" + 3 && 4 || "end"
// Since NaN is a falsy value, the expression will evaluate the next part:
// (--4 + 1)
// The expression --4 equals -4 (because the decrement operator decreases the value). The expression -4 + 1 equals -3.
// (-3) * "start"
// The expression (-3) * "start" equals NaN (because you cannot multiply a number by a string).
// NaN + 3
// The expression NaN + 3 equals NaN.
// NaN && 4
// Since NaN is a falsy value, the expression short-circuits to NaN.
// NaN || "end"
// Since NaN is a falsy value, the expression evaluates to "end".
// The final answer is: "end"


//exp #15
let exp15 = (0+ "foo") * 3 + (true && "result") || "start" + (++0 +1) * 4;
console.log(exp15);
// the expression foo * 3 is equal to NaN .
// NaN + (true && "result")
// Since NaN is a falsy value, but we need to evaluate the expression inside the parentheses:
// (true && "result")
// The expression true && "result" equals "result" (because both expressions are truthy values).
// NaN + "result"
// The expression NaN + "result" equals NaN.
// NaN || "start" + (++0 +1) * 4
// Since NaN is a falsy value, the expression will evaluate the next part:
// (++0 +1)
// The expression ++0 equals 1. The expression 1 + 1 equals 2.
// "start" + 2 * 4
// The expression 2 * 4 equals 8. The expression "start" + 8 equals "start8".
// NaN || "start8"
// Since NaN is a falsy value, the expression evaluates to "start8".
// The final answer is: "start8"




//exp 16
let exp16 = 2 * "end" || (false && true ) || "start" + (--4 +2) * 5 && null;
console.log(exp16);
// The expression 2 * "end" equals NaN (because you cannot multiply a number by a string).
// NaN || (false && true )
// Since NaN is a falsy value, the expression will evaluate the next part:
// (false && true )
// The expression false && true equals false (because false is a falsy value).
// The expression -4 + 2 equals -2.
// "start" + (-2) * 5
// The expression (-2) * 5 equals -10. The expression "start" + (-10) equals "start-10".
// "start-10" && null
// Since null is a falsy value, the final answer is null.








//exp 17
let exp17 = 3 + 2 * ("test" + 1--) && (false + 3) * 5 || 0 + "value" && 4;
console.log(exp17);
// 2 * ("test" + 1--)
// The expression 1-- equals 1 . The expression "test" + 1 equals "test1". The expression 2 * "test1" equals NaN (because you cannot multiply a number by a string).
//3 + NaN is equal to null.
//NaN && (false + 3) * 5 its also a null.
//0 + "value" equals "value".
//"value" && 4 in above expression the answer is 4.
//since null is a false value so the final answer is 4.


//exp18
let exp18 = "start" && (false || 2 * "end") (++1 + 1) *3 + "result" && 0;
console.log(exp18);
// "start" && (false || 2 * "end")
// Since "start" is a truthy value, the expression will evaluate the next part:
// (false || 2 * "end")
// The expression 2 * "end" equals NaN (because you cannot multiply a number by a string). Since false is a falsy value and NaN is also a falsy value, the expression evaluates to NaN.
//NaN (++1 + 1)
// This expression is invalid due to syntax error. The correct syntax would be:
// NaN * (++1 + 1) Assuming the correct syntax:
// (++1 + 1) The expression ++1 equals 2. The expression 2 + 1 equals 3.
// NaN * 3 The expression NaN * 3 equals NaN.
// NaN + "result" The expression NaN + "result" equals "NaNresult".
// "NaNresult" && 0
// Since 0 is a falsy value.
// The final answer is: 0

//exp 19 
let exp19 = ((15 + 1) && "foo" ) || (++1 + 2) * (false + 3) + "test" && 7;
console.log(exp19);
// The expression 15 + 1 equals 16.
// 16 && "foo"
// Since both expressions are truthy values, the expression evaluates to "foo".
// "foo" || (++1 + 2) * (false + 3) + "test" && 7
// Since "foo" is a truthy value, the expression short-circuits to "foo". The rest of the expression is not evaluated.
// The final answer is: "foo"

//exp 20
let exp20 =  2* 3 + "hello" && (fasle + ++1) * "result" || "end" + 5 || 0;
console.log(exp20);
// The expression 2* 3 equals 6.
// 6 + "hello"
// The expression 6 + "hello" equals "6hello".
// "6hello" && (false + ++1) * "result"
// Since "6hello" is a truthy value, the expression will evaluate the next part
// (false + ++1)
// The expression ++1 equals 2 (because the increment operator increases the value). The expression false + 2 equals 2.
// 2 * "result"
// The expression 2 * "result" equals NaN (because you cannot multiply a number by a string).
// "6hello" && NaN
// Since NaN is a falsy value, the expression short-circuits to NaN.
// NaN || "end" + 5 || 0
// Since NaN is a falsy value, the expression will evaluate the next part:
// The expression "end" + 5 equals "end5".
// NaN || "end5" || 0
// Since "end5" is a truthy value, the expression evaluates to "end5".
// The final answer is: "end5"


//exp 21v
let exp21 = 5 * ( true + ++1 ) && ("test" + fasle) || 7 * (true + 2) + "value";
console.log(exp21);
// The expression ++1 equals 2. The expression true + 2 equals 3 (because true is converted to 1).
// The expression 5 * 3 equals 15.
// 15 && ("test" + false)
// Since 15 is a truthy value, the expression will evaluate the next part:
// ("test" + false)
// The expression false is converted to 0. The expression "test" + 0 equals "test0".
// 15 && "test0"
// Since both expressions are truthy values, the expression evaluates to "test0".
// "test0" || 7 * (true + 2) + "value"
// Since "test0" is a truthy value..
// The final answer is: "test0"

//exp 22 
let exp22 = "foo" + 4 && (++1 + 1) * "start" || 5 + 6 * ( false + true ) && "test";
console.log(exp22);
// The expression "foo" + 4 equals "foo4".
// "foo4" && (++1 + 1) * "start"
// Since "foo4" is a truthy value, the expression will evaluate the next part:
// (++1 + 1)
// The expression ++1 equals 2. The expression 2 + 1 equals 3.
// The expression 3 * "start" equals NaN (because you cannot multiply a number by a string).
// "foo4" && NaN
// Since NaN is a falsy value, the expression short-circuits to NaN.
// NaN || 5 + 6 * (false + true) && "test"
// Since NaN is a falsy value, the expression will evaluate the next part:
// (false + true)
// The expression false + true equals 1 (because false is converted to 0 and true is converted to 1).
// The expression 6 * 1 equals 6.
// The expression 5 + 6 equals 11.
// 11 && "test"
// Since both expressions are truthy values, the expression evaluates to "test".
// NaN || "test"
// Since "test" is a truthy value, the expression evaluates to "test".
// The final answer is: "test"

//exp 23
let exp23 = (fasle && 2) || (++1 + 1)* "end" && "start" || 4 * 5 && "result";
console.log(exp23);
// The expression fasle equals false. Since false is a falsy value, the expression short-circuits to false.
// false || (++1 + 1)* "end" && "start" || 4 * 5 && "result"
// Since false is a falsy value, the expression will evaluate the next part:
// (++1 + 1)
// The expression ++1 equals 2. The expression 2 + 1 equals 3.
// 3 * "end"
// The expression 3 * "end" equals NaN (because you cannot multiply a number by a string).
// NaN && "start"
// Since NaN is a falsy value, the expression short-circuits to NaN.
// false || NaN || 4 * 5 && "result"
// Since both false and NaN are falsy values, the expression will evaluate the next part:
// The expression 4 * 5 equals 20.
// 20 && "result"
// Since both expressions are truthy values, the expression evaluates to "result".
// false || NaN || "result"
// Since "result" is a truthy value.
// The final answer is: "result"


//exp 24 
let exp24 = 3 + 2 * "test" || (false + 1--) * "hello" && "world" + 1 || 2;
console.log(exp24);
// The expression 2 * "test" equals NaN (because you cannot multiply a number by a string).
// The expression 3 + NaN equals NaN.
// NaN || (false + 1--) * "hello" && "world" + 1 || 2
// Since NaN is a falsy value, the expression will evaluate the next part:
// (false + 1--)
// The expression 1-- equals 1 (because the decrement operator decreases the value after the expression is evaluated). The expression false + 1 equals 1.
// 1 * "hello"
// The expression 1 * "hello" equals NaN (because you cannot multiply a number by a string).
// NaN && "world" + 1
// Since NaN is a falsy value, the expression short-circuits to NaN.
// NaN || 2
// Since NaN is a falsy value, the expression evaluates to 2.
// The final answer is: 2



//exp 25
let exp25 = ( 3 + 4) * ( false || 1-- ) && 5 || "start" + 1 + "test" && 0;
console.log(exp25);
// The expression 3 + 4 equals 7.
// (false || 1--)
// The expression false || 1-- equals 1 (because the decrement operator decreases the value after the expression is evaluated).
// The expression 7 * 1 equals 7.
// 7 && 5
// Since both expressions are truthy values, the expression evaluates to 5.
// 5 || "start" + 1 + "test" && 0
// Since 5 is a truthy value, the expression short-circuits to 5. The rest of the expression is not evaluated.
// The final answer is: 5


//exp 26
let exp26 = "hello" && 3 * 2 + (1++ + 1) || (false + true) * "result" + "end";
console.log(exp26);
// "hello" && 3 * 2
// Since "hello" is a truthy value, the expression will evaluate the next part:
// The expression 3 * 2 equals 6.
// 6 + (1++ + 1)
// The expression 1++ equals 1. The expression 1 + 1 equals 2. The expression 6 + 2 equals 8.
// 8 || (false + true) * "result" + "end"
// Since 8 is a truthy value, the expression short-circuits to 8. The rest of the expression is not evaluated.
// The final answer is: 8

//exp 27
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + 5++;
console.log(exp27);
// The expression 3 * "test" equals NaN (because you cannot multiply a number by a string).
// The expression true + 2 equals 3. The expression NaN + 3 equals NaN.
// NaN && (false || "value")
// Since NaN is a falsy value, the expression short-circuits to NaN. The rest of the expression is not evaluated for the && operator.
// However, we need to evaluate the expression for the || operator:
// The expression false || "value" equals "value".
// NaN || "value" || "start" + 5++
// Since NaN is a falsy value, the expression will evaluate the next part:
// "value" || "start" + 5++
// Since "value" is a truthy value.
// The final answer is: "value"


//exp 28
let exp28 = (false + 1) * "hello" || 3 + (1-- && 5) * "result" || "world";
console.log(exp28);
// (false + 1)
// The expression false + 1 equals 1.
// The expression 1 * "hello" equals NaN (because you cannot multiply a number by a string).
// NaN || 3 + (1-- && 5) * "result" || "world"
// Since NaN is a falsy value, the expression will evaluate the next part:
// (1-- && 5)
// The expression 1-- equals 1. The expression 1 && 5 equals 5.
// The expression 5 * "result" equals NaN (because you cannot multiply a number by a string).
// The expression 3 + NaN equals NaN.
// NaN || "world"
// Since NaN is a falsy value, the expression evaluates to "world".
// The final answer is: "world"


//exp 29
let exp29 = "start"+ 2 * (true || 1) && (false || "value") * 5 + "result";
console.log(exp29);
// The expression true || 1 equals true.
// The expression 2 * true equals 2 (because true is converted to 1).
// "start" + 2
// The expression "start" + 2 equals "start2".
// false || "value"
// The expression false || "value" equals "value".
// "value" * 5
// The expression "value" * 5 equals NaN (because you cannot multiply a string by a number).
// "start2" && NaN
// Since NaN is a falsy value, the expression short-circuits to NaN.
// NaN + "result"
// The expression NaN + "result" equals "NaNresult".
// The final answer is: "NaNresult"


//exp 30
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || 4--;
console.log(exp30);
// The expression true + 3 equals 4.
// The expression 4 * "test" equals NaN (because you cannot multiply a number by a string).
// NaN || 1 * 5 &&(false + "value") + "end" || 4--
// Since NaN is afalsy value, the expression will evaluate the next part:
// 1 * 5
// The expression 1 * 5 equals 5.
// (false + "value")
// The expression false + "value" equals "value" (because false is converted to 0).
// "value" + "end"
// The expression "value" + "end" equals "valueend".
// 5 && "valueend"
// Since both expressions are truthy values, the expression evaluates to "valueend".
// NaN || "valueend" || 4--
// Since "valueend" is a truthy value.
// The final answer is: "valueend"


//exp 31
let exp31 = 3 + "end" || 2 * "test" && (++0 + true) || "start" + 1;
console.log(exp31);
// 3 + "end"
// The expression 3 + "end" equals "3end".
// "3end" || 2 * "test" && (++0 + true) || "start" + 1
// Since "3end" is a truthy value, the expression short-circuits to "3end". The rest of the expression is not evaluated.
// The final answer is: "3end.

//exp 23
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
console.log(exp32);
// The expression 0 + 3 equals 3.
// (true + false)
// The expression true + false equals 1 (because true is converted to 1 and false is converted to 0).
// The expression 3 * 1 equals 3.
// 3 || 5 * "hello" + 2 && (false + "test")
// Since 3 is a truthy value.
// The final answer is: 3

//exp 33 
let exp33 =  2 + 3 && ("end" + 1++) || (false + "test") * 4 && 5;
console.log(exp33);
// The expression 2 + 3 equals 5.
// 5 && ("end" + 1++)
// Since 5 is a truthy value, the expression will evaluate the next part:
// ("end" + 1++)
// The expression 1++ equals 1. The expression "end" + 1 equals "end1".
// 5 && "end1"
// Since both expressions are truthy values, the expression evaluates to "end1".
// "end1" || (false + "test") * 4 && 5
// Since "end1" is a truthy value,
// The final answer is: "end1"

//exp 34 
let exp34 = "hello" + 4 * (false + 1--) || 3 && "start" + 1 || (true + "test");
console.log(exp34);
// (false + 1--)
// The expression 1-- equals 1. The expression false + 1 equals 1.
// The expression 4 * 1 equals 4.
// "hello" + 4
// The expression "hello" + 4 equals "hello4".
// "hello4" || 3 && "start" + 1 || (true + "test")
// Since "hello4" is a truthy value, the expression short-circuits to "hello4". The rest of the expression is not evaluated.
// The final answer is: "hello4"


//exp 35 
let exp35 = "start" && (1-- || "test") * 4 + 5 && (false + "end") || 2;
console.log(exp35);
// (1-- || "test")
// The expression 1-- equals 1. The expression 1 || "test" equals 1.
// The expression 1 * 4 equals 4.
// "start" && 4
// Since "start" is a truthy value, the expression evaluates to 4.
// The expression 4 + 5 equals 9.
// 9 && (false + "end")
// The expression false + "end" equals "end". Since 9 is a truthy value, the expression evaluates to "end".
// "end" || 2
// Since "end" is a truthy value, the expression evaluates to "end".
// The final answer is: "end"


//exp 36 
let exp36 = 1 + "value" && (++0 + 2) || (3 + "result") * true && 4;
console.log(exp36);
// The expression 1 + "value" equals "1value".
// "1value" && (++0 + 2)
// Since "1value" is a truthy value, the expression will evaluate the next part:
// (++0 + 2)
// The expression ++0 equals 1. The expression 1 + 2 equals 3.
// "1value" && 3
// Since both expressions are truthy values, the expression evaluates to 3.
// 3 || (3 + "result") * true && 4
// Since 3 is a truthy value.
// The final answer is: 3

//exp 37
let exp37 = "hello" && 2 + "test" || (++0 + 3) && (true + "value") + 1;
console.log(exp37);
// "hello" && 2
// Since "hello" is a truthy value, the expression will evaluate the next part:
// 2 + "test"
// The expression 2 + "test" equals "2test".
// "2test" || (++0 + 3) && (true + "value") + 1
// Since "2test" is a truthy value, 
// The final answer is: "2test"



//exp38 
let exp38 = 5 * (1-- || "test") && 6 + "result" || 2 + "end" ;
console.log(exp38);
// (1-- || "test")
// The expression 1-- equals 1. The expression 1 || "test" equals 1.
// 5 * 1
// The expression 5 * 1 equals 5.
// 5 && 6 + "result"
// Since 5 is a truthy value, the expression will evaluate the next part:
// The expression 6 + "result" equals "6result".
// 5 && "6result"
// Since both expressions are truthy values, the expression evaluates to "6result".
// "6result" || 2 + "end"
// Since "6result" is a truthy value.
// The final answer is: "6result"


//exp 39
let exp39 = "start" && (false + 1) * 2 || 3 +4 * "hello" + 5 && 0 ;
console.log(exp39);
// The expression false + 1 equals 1.
// 1 * 2
// The expression 1 * 2 equals 2.
// "start" && 2
// Since "start" is a truthy value, the expression evaluates to 2.
// 2 || 3 + 4 * "hello" + 5 && 0
// Since 2 is a truthy value, the expression short-circuits to 2. The rest of the expression is not evaluated.
// The final answer is: 2

//exp40
let exp40 = (false || "test") * 5 || 6 + (1-- && "result") *4 ;
console.log(exp40);
// The expression false || "test" equals "test".
// "test" * 5
// The expression "test" * 5 equals NaN (because you cannot multiply a string by a number).
// NaN || 6 + (1-- && "result") * 4
// Since NaN is a falsy value, the expression will evaluate the next part:
// (1-- && "result")
// The expression 1-- equals 1. Since 1 is a truthy value, the expression will evaluate the next part:
// "result" is a truthy value, so the expression evaluates to "result".
// "result" * 4
// The expression "result" * 4 equals NaN (because you cannot multiply a string by a number).
// 6 + NaN
// The expression 6 + NaN equals NaN.
// Since both expressions are falsy values, the final result is NaN.



//exp 41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
console.log(exp41);
// The expression 3 + 2 equals 5.
// 5 * "test"
// The expression 5 * "test" equals NaN (because you cannot multiply a number by a string).
// "start" && NaN + 5
// Since "start" is a truthy value, the expression will evaluate the next part:
// NaN + 5 equals NaN.
// NaN || 4 * (false + 1) && "hello"
// Since NaN is a falsy value, the expression will evaluate the next part:
// The expression false + 1 equals 1.
// The expression 4 * 1 equals 4.
// 4 && "hello"
// Since 4 is a truthy value, the expression evaluates to "hello".
// The final answer is: "hello"


//esp 42
let exp42 =  1 + 2 *  "end" || (false + 3) && "result" * 4 + 5--;
console.log(exp42);
// The expression 2 * "end" equals NaN (because you cannot multiply a number by a string).
// 1 + NaN
// The expression 1 + NaN equals NaN.
// NaN || (false + 3) && "result" * 4 + 5--
// Since NaN is a falsy value, the expression will evaluate the next part:
// (false + 3)
// The expression false + 3 equals 3.
// "result" * 4
// The expression "result" * 4 equals NaN (because you cannot multiply a string by a number).
// 3 && NaN
// Since NaN is a falsy value, the expression evaluates to NaN.
// NaN + 5--
// The expression 5-- equals 5. The expression NaN + 5 equals NaN.
// The final answer is: NaN


//exp 43 
let exp43 = (false && 1--) || 4 * ( 3 + 2) && "start" + 5;
console.log(exp43);
// (false && 1--)
// The expression 1-- equals 1. Since false is a falsy value, the expression is to false.
// false || 4 * (3 + 2) && "start" + 5
// Since false is a falsy value, the expression will evaluate the next part:
// (3 + 2
// The expression 3 + 2 equals 5.
// 4 * 5
// The expression 4 * 5 equals 20.
// "start" + 5
// The expression "start" + 5 equals "start5".
// 20 && "start5"
// Since 20 is a truthy value, the expression evaluates to "start5".
// The final answer is: "start5"


//exp 44 
let exp44 = 3 +2 * (true + 5) && "value" + 1 || (++0 + 2) + "test";
console.log(exp44);
// (true + 5)
// The expression true + 5 equals 6.
// 2 * 6
// The expression 2 * 6 equals 12.
// 3 + 12
// The expression 3 + 12 equals 15.
// 15 && "value" + 1
// Since 15 is a truthy value, the expression will evaluate the next part:
// "value" + 1 equals "value1".
// 15 && "value1"
// Since both epxressions are truthy values, the expression evaluates to "value1".
// "value1" || (++0 + 2) + "test"
// Since "value1" is a truthy value
// The final answer is: "value1"



//exp 45
let exp45 = (false || 1) + "test" && 5 + (3 * 1--) || "end" + 2;
console.log(exp45);
// (false || 1)
// The expression false || 1 equals 1.
// 1 + "test"
// The expression 1 + "test" equals "1test"
// "1test" && 
// Since "1test" s a truthy value, the expression will evaluate the next part:
// (3 * 1--)
// The expression 1-- equals 1. The expression 3 * 1 equals 3.
// 5 + 3
// The expression 5 + 3 equals 8.
// "1test" && 8
// Since both expressions are truthy values, the expression evaluates to 8.
// 8 || "end" + 2
// Since 8 is a truthy value, the expression is to 8. The rest of the expression is not evaluated.
// The final answer is: 8



//exp 46
let exp46 = ( 2 * 1-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
console.log(exp46);
// (2 * 1--)
// The expression 1-- equals 1. The expression 2 * 1 equals 2.
// 2 + 4
// The expression 2 + 4 equals 6
// 6 && "test"
// Since 6 is a truthy value, the expression evaluates to "test".
// "test" || 3 + "hello" && (false + 1) * 5
// Since "test" is a truthy value.
// The final answer is: "test".




//exp 47
let exp47 = 0 + "result" && ( 3 + 1) * 2 || (false + 1--) * "end";
console.log(exp47);
// Evaluating 0 + "result":
// The + operator between a number (0) and a string ("result") causes type coercion, and the number is converted to a string.
// So, 0 + "result" becomes "0result" (a string).
//"0result" && (3 + 1) * 2:
// The && (logical AND) operator checks the first operand. Since "0result" is a non-empty string, it is truthy in JavaScript, so the second part of the && expression is evaluated.
// Now, evaluate (3 + 1) * 2:
// 3 + 1 equals 4.
// 4 * 2 equals 8.
// So, "0result" && 8 evaluates to 8 (since the second operand is evaluated and returned when the first is truthy).
// Evaluating the second part: 8 || (false + 1--) * "end":
// Now, we need to evaluate the || (logical OR) expression.
// Since 8 is a truthy value 
//  the || expression (false + 1--) * "end" is not evaluated because 8 is already truthy.
// Final Result:
// Since the right-hand side of || is not evaluated due to short-circuiting, the result of the expression is simply 8.
// Thus, the answer is 8.



//exp 48
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + 5--;
console.log(exp48);
// (false || 1):
// So, (false || 1) evaluates to 1.
// Evaluating (1) * "test":
// Therefore, 1 * "test" evaluates to NaN.
// Evaluating NaN && 4:
// The && (logical AND) operator evaluates the left-hand side (NaN), which is falsy.
// Since the left-hand side is falsy, short-circuiting occurs, and the right-hand side (4) is not evaluated. The result of the entire NaN && 4 expression is NaN (because the left-hand side is falsy).
// Evaluating NaN || (true + 2) * "hello" + 5--:
// The || (logical OR) operator checks the left-hand side first, which is NaN. Since NaN is falsy, it proceeds to evaluate the right-hand side.
// Now, evaluate (true + 2):
// true is coerced to 1, so true + 2 equals 3.
// Now evaluate 3 * "hello":
// Multiplying 3 by "hello" results in NaN because multiplying a number by a non-numeric string results in NaN.
// So, (true + 2) * "hello" evaluates to NaN.
// Evaluating NaN + 5--:
// The post-decrement operator 5-- first uses the value of 5 and then decrements it.
// So, NaN + 5-- is NaN + 5, which results in NaN.
// After this operation, the value of 5 is decremented to 4, but the expression evaluates to NaN.
// Final Result:
// Now, the entire expression is NaN || NaN. Since both are falsy, the result of the || operation is NaN.
// Thus, the value of exp48 is NaN.




//exp 49
let exp49 = ( 2 * 3) + "result" && 4 * (1-- + 1) || "start" + 2 + "end";
console.log(exp49);
// So, (2 * 3) evaluates to 6.
// Evaluating 6 + "result"
// The + operator between a number (6) and a string ("result") causes type coercion, where the number 6 is converted to a string and concatenated with "result".
// Therefore, 6 + "result" evaluates to the string "6result".
// So, 6 + "result" evaluates to "6result".
// Evaluating "6result" && 4 * (1-- + 1)
// The && (logical AND) operator checks the left-hand side first ("6result"), which is a non-empty string and hence truthy.
//  Evaluating 4 * (1-- + 1)
// The 1-- is the post-decrement operator. It uses the current value of 1 before decrementing it.
// So, 1-- + 1 is evaluated as 1 + 1, which equals 2. After this, 1 is decremented to 0, but this doesn't affect the expression result since the value was used before the decrement.
// Therefore, 1-- + 1 evaluates to 2.
// Now, multiply 4 * 2, which equals 8.
// So, 4 * (1-- + 1) evaluates to 8.
// Evaluating "6result" && 8
// So, "6result" && 8 evaluates to 8.
// Evaluating 8 || "start" + 2 + "end"
// The || operator returns the left-hand side (8), as it is truthy.
// So, 8 || "start" + 2 + "end" evaluates to 8.
// The answer is 8.



//exp 50 
let a = 5;
let exp50 = 32 && true - ++a && " " || "true" ;
console.log(exp50);
// 32 && true - ++a:
// 32 is a truthy value, so JavaScript will evaluate the right-hand side: true - ++a.
// ++a has already set a = 6, so now the expression becomes:
// true - 6
// 1 - 6 = -5
// Therefore, the result of 32 && true - ++a is -5.
// Evaluate -5 && " ";
// -5 && " "
// -5 is a truthy value (since any non-zero number is truthy in JavaScript), so the second part of the && operator will be evaluated. The result will be " ".
// Evaluate " " || "true":
// " " || "true"
// The || operator is a logical OR operator. It works by evaluating the left-hand side first. If the left-hand side is truthy, it will immediately return that value without evaluating the right-hand side.
// Since " " (a non-empty string) is truthy, the result of this expression will be " ".
// Final Value:
// So, the final value of exp50 will be:
// exp50 = " ";
// Conclusion:
// The value of exp50 after evaluating the entire expression is " ".




//exp 51
let exp51 = ( 5 + 2) * (1-- + 1) || "starrt" + (++0 + "end") * 3;
console.log(exp51);



















//exp 52
let exp52 = (++0 && 3) * "test" || 4 + "start" * (1-- + "result");
console.log(exp52);
// The ++0 expression is the pre-increment operator, which increments 0 before using it in the expression. So:
// ++0 = 1
// (1 && 3) * "test" || 4 + "start" * (1-- + "result")
// Step 2: Evaluate 1 && 3
// 1 && 3 = 3
// Now, the expression becomes:
// 3 * "test" || 4 + "start" * (1-- + "result")
// Step 3: Evaluate 3 * "test"
//  multiplying a string by a number results in NaN (Not-a-Number), because strings cannot be directly multiplied. So:
// 3 * "test" = NaN
// NaN || 4 + "start" * (1-- + "result")
// The || operator evaluates the left-hand side first. Since NaN is falsy, JavaScript evaluates the right-hand side.
// 4 + "start" * (1-- + "result")
//  Evaluate 1-- + "result"
// First, 1-- evaluates to 1.
// After evaluating, 1 becomes 0 due to the post-decrement.
// 1-- + "result" = 1 + "result" = "1result"
// 4 + "start" * "1result"
//Evaluate "start" * "1result"
// Since both "start" and "1result" are strings, JavaScript cannot perform a numeric multiplication operation on them, and the result is NaN (Not-a-Number). So:
// "start" * "1result" = NaN
// Now the expression becomes:
// 4 + NaN
// Final Evaluation of 4 + NaN
// When you add a number to NaN, the result is NaN. So:
// 4 + NaN = NaN
// Final Answer:
// So, the final value of exp52 is NaN :



//exp 53
let exp53 = 3 + "value" * (++0 + 1) || (--1 && "start") + "end";
console.log(exp53);
// 3 + "value" become = "3value"
// (++0 + 1) means it become a 2;
//then, "3value" * by 2
//so,
// 0 && "start" = 0
// Now the expression becomes:
// 0 + "end"
// Evaluate 0 + "end"
// When you add a number (0) to a string ("end"), JavaScript coerces the number to a string and concatenates them. So:
// 0 + "end" = "0end"
// Final Result:
// Thus, the final value of exp53 is:
// exp53 = "0end"


//exp 54
let exp54 = (--1 + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp54);
// The --1 expression is the pre-decrement operator, meaning the value of 1 is decremented before using it. So:
// --1 = 0
// (0 + 2) * "result" || (false && 5) * "test" + 4;
// Evaluate 0 + 2
// 0 + 2 = 2
//now,
// 2 * "result" || (false && 5) * "test" + 4;
// Evaluate 2 * "result"
// In JavaScript, multiplying a string by a number results in NaN (Not-a-Number) because you can't directly multiply a string by a number. So:
// 2 * "result" = NaN
// NaN || (false && 5) * "test" + 4;
// Evaluate || (Logical OR) Operator (Short-Circuiting)
// The || operator evaluates the left-hand side first. Since NaN is falsy, it does not short-circuit, and the right-hand side will be evaluated.
// Now the expression becomes:
// (false && 5) * "test" + 4
// Evaluate (false && 5)
// The && (logical AND) operator will short-circuit if the left-hand side is falsy. Since false is falsy, JavaScript does not evaluate the right-hand side (5). So:
// false && 5 = false
// false * "test" + 4
// Evaluate false * "test"
// In JavaScript, multiplying a boolean (false) by a string ("test") results in 0, because false is coerced to 0 in arithmetic operations. So:
// false * "test" = 0
// 0 + 4
// Evaluate 0 + 4
// 0 + 4 = 4
// Final Result:
// Thus, the final value of exp54 is 4:



//exp55 
let exp55 = "start" + 5 (1-- + "test") || (false + 2) * "value";
console.log(exp55);
// 1-- + "test"
// The 1-- expression is a post-decrement operator, which means the value of 1-- is evaluated first as 1, and then 1 is decremented after the expression.
// 1-- = 1 (before decrementing), and after this, 1 becomes 0.
// 1-- + "test" = "1" + "test" = "1test"
// Evaluate 5 * "1test"
// When you multiply a string ("1test") by a number (5), JavaScript coerces the string into a number. Since "1test" cannot be converted into a valid number, the result will be NaN (Not-a-Number).
// 5 * "1test" = NaN
// "start" + NaN
//  when a string is added to NaN, the result is the string "NaN" because NaN is coerced into a string for concatenation. So:
// "start" + NaN = "startNaN"
// "startNaN" || (false + 2) * "value"
// Evaluate (false + 2)
// The expression (false + 2) first coerces false to a number. false is coerced to 0 in numeric operations.
// false + 2 = 0 + 2 = 2
// "startNaN" || 2 * "value"
// Evaluate 2 * "value"
// When a number is multiplied by a string, JavaScript attempts to convert the string to a number. Since "value" cannot be converted to a number, the result will be NaN.
// 2 * "value" = NaN
// "startNaN" || NaN
// Evaluate || (Logical OR) Operator (Short-Circuiting)
// Thus, the final result is "startNaN":



