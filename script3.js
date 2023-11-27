//03.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Aathi", "Lakshmi",99, "Commerce", "aathilakshmi2416@gmail.com", 1234567890, "Coimbatore");
let person2 = new Person("Shiva","Aththu", 88, "Commerce", "shivaaththu@gmail.com", 9876543210, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());