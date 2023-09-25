

class Student
{
    //Characteristics
    Name : string;
    Marks : number;
    Age : number;
    City : string;

    //Behaviours
    constructor (N : string, M : number, A : number, C : string)
    {
        console.log("Inside constructor")
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;

    }

    Display() : void
    {

        console.log("Name of student : "+this.Name)
        console.log("Marks of student : "+this.Marks)
        console.log("Age of student : "+this.Age)
        console.log("City of student : "+this.City)

    }


}

    var obj1 = new Student("Pradip", 100, 25, "Pune");
    var obj2 = new Student("shubham", 200, 26, "Mumbai");
    var obj3 = new Student("Avinash", 300, 26, "Kolhapur");

    obj1.Display();
    obj2.Display();
    obj3.Display();