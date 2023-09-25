class Circle
{
    Radius : number
    PI : number

    constructor(Data  :number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    calculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius
        return Ans;
    }
}
var obj = new Circle(10.7);
var ret : number = 0;
ret = obj.calculateArea();
console.log("area of the circle is : "+ret); 

class CircleEx extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }


    calculateCircumference() : number
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var objx = new CircleEx(12);
var retuu : number = 0;
retuu = objx.calculateCircumference();
console.log("Circumference of the circle is : "+retuu);
