function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var A = 11;
var B = 10;
var ret = 0;
ret = Addition(A, B);
console.log("Addition is : " + ret);
ret = Substraction(A, B);
console.log("Substraction is : " + ret);
