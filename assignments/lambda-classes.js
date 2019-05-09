// CODE here for your Lambda Classes

// Person Class
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

// Instructor Class
class Instructor extends Person {
  constructor(object) {
    super(object);
    this.specialty = object.specialty;
    this.favLanguage = object.favLanguage;
    this.catchPhrase = object.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}
