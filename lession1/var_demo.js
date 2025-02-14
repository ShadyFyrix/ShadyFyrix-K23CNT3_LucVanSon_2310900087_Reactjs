var x=100; //globle variable
function varDemo(){
    console.log("x ben tron ham: ",x);
}
//
console.log("x ben ngoai ham: ",x);
// thuc thi ham
varDemo();
//local variable
function fn_Demo1(){
    var y=200;
    console.log("y ben trong ham: ",y);
}
//
fn_Demo1();
console.log("y ben ngoai ham: ",y); // ==error  ko ti m thay y
