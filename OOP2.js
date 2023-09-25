var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    return Arithmetic;
}());
var obj5 = new Arithmetic(11, 10);
var obj6 = new Arithmetic(21, 10);
var ret = 0;
ret = obj5.Addition();
console.log("Addition of obj5 is : " + ret);
ret = obj5.Substraction();
console.log("sub of obj5 is : " + ret);
ret = obj6.Addition();
console.log("Addition of obj6 : " + ret);
ret = obj6.Substraction();
console.log("sub of obj6 : " + ret);
