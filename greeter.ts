class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string)
    {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Lee", lastName: "heyrim" };

document.body.textContent=greeter(user);