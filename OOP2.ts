class Arithmetic
{
    No1 : number;
    No2 : number;

   public constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

 public Addition() : number
    {
        return this.No1 + this.No2;
    }

  public Substraction() : number
    {
        return this.No1 - this.No2;
    }

}

var obj5 = new Arithmetic(11, 10);
var obj6 = new Arithmetic(21, 10);
var ret : number = 0;
ret = obj5.Addition();
console.log("Addition of obj5 is : "+ret);
ret = obj5.Substraction();
console.log("sub of obj5 is : "+ret);
ret = obj6.Addition();
console.log("Addition of obj6 : "+ret)
ret = obj6.Substraction();
console.log("sub of obj6 : "+ret);