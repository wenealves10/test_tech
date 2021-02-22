class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {

  constructor(firstName, lastName, identification, testScores){
    super(firstName, lastName, identification);
    this.testScores = testScores;
  }

  calculate(){
    let scoresArray = this.testScores.split(' ');
    let sumScores = 0;
    let result = 0;
    let division = scoresArray.length;
    let grading = ['O', 'E', 'A', 'P', 'D', 'T'];

    for(let index in scoresArray){
      sumScores += parseFloat(scoresArray[index], 10);
    }

    result = sumScores / division;

    if(result >=  90 && result  <= 100){
      return grading[0];
    }
    if(result >=  80 && result  < 90){
      return grading[1];
    }
    if(result >=  70 && result  < 80){
      return grading[2];
    }
    if(result >=  55 && result  < 70){
      return grading[3];
    }
    if(result >=  40 && result  < 55){
      return grading[4];
    }
    if(result <  40){
      return grading[5];
    }
  }

}

const student = new Student('Wene', 'Alves', 154121, '100 70 40');

student.printPerson();
console.log('Grade: ' + student.calculate());

// Result is //
/*
  Name: Alves, Wene
  ID: 154121
  Grade: A
*/
