// CODE here for your Lambda Classes

class Person {
  constructor(personData) {
    this.name = personData.name;
    this.location = personData.location;
    this.age = personData.age;
    this.gender = personData.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
