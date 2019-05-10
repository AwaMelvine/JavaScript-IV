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

  modifyGrade(student) {
    const points = Math.floor(Math.random() * 10);
    const signTest = Math.floor(Math.random() * 10);

    if (signTest < 5) {
      student.grade = student.grade - points;
    } else {
      if (this.grade * 1 + points < 100) {
        student.grade = 1 * student.grade + 1 * points;
      }
    }

    console.log(`${student.name}'s new grade is ${student.grade}`);
  }
}

// Student Class
class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
    this.grade = 70;
  }

  listsSubjects() {
    this.favSubjects.forEach((subject, index) => {
      console.log(`${index + 1} - ${subject}`);
    });
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade < 70) {
      console.log(`Sorry ${this.name} you do not qualify to graduate`);
    } else {
      console.log(
        `Congratulations ${this.name}, you have graduated from Lambda!!`
      );
    }
  }
}

// ProjectManager Class

class ProjectManager extends Instructor {
  constructor(object) {
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const boy = new Person({
  name: "Bob",
  location: "Lagos",
  age: "20",
  gender: "Male"
});

const student = new Student({
  name: "Sam",
  location: "Nigeria",
  age: "22",
  gender: "Male",
  previousBackground: "PHP",
  className: "CS132",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const instructor = new Instructor({
  name: "John",
  location: "London",
  age: "30",
  gender: "Male",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the homies"
});

const pm = new ProjectManager({
  name: "Dave",
  location: "New York",
  age: "35",
  gender: "Male",
  gradClassName: "CS1",
  favInstructor: "Sean"
});

// Testing Person Class
console.log(boy.name); // outputs 'Bob' to the console
console.log(boy.speak()); // outputs 'Hello my name is Bob, I am from Lagos'

// Testing Instructor Class
console.log(instructor.name); // outputs 'John'
instructor.demo("React"); // outputs 'Today we are learning about React'
instructor.grade(student, "Git"); // outputs 'Sam receives a perfect score on Git'

// Testing Student Class
console.log(student.name); // outputs 'Sam'
student.listsSubjects(); /*outputs:
                            1 - Html
                            2 - CSS 
                            3 - JavaScript */
student.PRAssignment("CSS"); // outputs 'Sam has submitted a PR for CSS'
student.sprintChallenge("Advanced CSS"); // Sam has begun sprint challenge on Advanced CSS

// Testing ProjectManager class
console.log(pm.name); // outputs 'Dave'
pm.standUp("webeu2"); // outputs 'Dave announces to webeu2, @channel standy times!​​​​​'
pm.debugsCode(student, "React"); // outputs "Dave debugs Sam's code on React"

// Test Stretch Goals
console.log(student.grade); // outputs 70
instructor.modifyGrade(student); // ouputs "Sam's new grade is 77"
pm.modifyGrade(student); // outputs "Sam's new grade is 71"
student.graduate(); // outputs "Congratulations Sam, you have graduated from Lambda!!"
