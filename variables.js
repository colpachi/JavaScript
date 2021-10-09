/* Accordingly to MDN a 

Var statement:

declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable 
and function declarations prior to execution of the code.

*/

testingVar(); //hoisting example, calling a function before its own declaration.

function testingVar() {
    var x = 'abc'
    return console.log(x);
}
