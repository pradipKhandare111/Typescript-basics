var Student = /** @class */ (function () {
    //Behaviours
    function Student(N, M, A, C) {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student : " + this.Name);
        console.log("Marks of student : " + this.Marks);
        console.log("Age of student : " + this.Age);
        console.log("City of student : " + this.City);
    };
    return Student;
}());
var obj1 = new Student("Pradip", 100, 25, "Pune");
var obj2 = new Student("shubham", 200, 26, "Mumbai");
var obj3 = new Student("Avinash", 300, 26, "Kolhapur");
obj1.Display();
obj2.Display();
obj3.Display();
