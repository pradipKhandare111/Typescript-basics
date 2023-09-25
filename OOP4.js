var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.calculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(10.7);
var ret = 0;
ret = obj.calculateArea();
console.log("area of the circle is : " + ret);
var CircleEx = /** @class */ (function (_super) {
    __extends(CircleEx, _super);
    function CircleEx(Data) {
        return _super.call(this, Data) || this;
    }
    CircleEx.prototype.calculateCircumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleEx;
}(Circle));
var objx = new CircleEx(12);
var retuu = 0;
retuu = objx.calculateCircumference();
console.log("Circumference of the circle is : " + retuu);
