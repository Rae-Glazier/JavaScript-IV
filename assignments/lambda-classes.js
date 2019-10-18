// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
      this.name = attributes.name,
      this.location = attributes.location, 
      this.age = attributes.age  
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }

  class Instructor extends Person{
    constructor(attributes){
    super(attributes);
      this.speciality = attributes.speciality,
      this.favLanguage = attributes.favLanguage,
      this.catchPhrase = attributes.catchPhrase,
      this.subject = attributes.subject
    }
    demo(){
      return `Today we are learning about ${this.subject}`;
    }
    grade(){
        return `${student.name} recieves a perfect score on ${this.subject}`;
    }
  }

  class Student extends Person{
    constructor(attributes){
    super(attributes);
      this.previousBackground = attributes.previousBackground,
      this.className = attributes.className,
      this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are:${this.favSubjects}`)
    }
    PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge(){
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`)
    }
  }
  
  class ProjectManagers extends Instructor{
    constructor(attributes){
      super(attributes);
      this.gradClassName = attributes.gradClassName,
      this.favInstructor = attributes.favInstructor,
      this.channel = attributes.channel
    }
    standUp(){
      console.log(`${this.name} announces to ${this.channel}, @channel standup times!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${new Student}'s code on ${this.subject}`);
    }
  }

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'JavaScript'
  });

  const rae = new Student({
    name: 'Rae',
    location: 'Phoenix',
    age: 30,
    previousBackground: 'Stay-At-Home-Mom',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const chris = new ProjectManagers({
    name: 'Chris',
    location: 'Adams',
    age: 37,
    gradClassName: 'WebPT9',
    favInstructor: 'John Knell',
    catchPhrase: `Stand up time! time to get in here`
  });

console.log(fred.demo());
console.log(fred.speak());
console.log(rae.listsSubjects());
console.log(rae.PRAssignment());
console.log(chris.standUp());
console.log(chris.debugsCode());