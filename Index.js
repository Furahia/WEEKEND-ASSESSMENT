
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    work() {
      console.log(`${this.name} is working.`);
    }
  }
  
  // Pharmacist class
  class Pharmacist extends Employee {
    constructor(name, salary) {
      super(name, salary);
    }
  
    writePrescription(patient) {
      console.log(`${this.name} writes a prescription for ${patient}.`);
    }
  }
  
  // Cashier class
  class Cashier extends Employee {
    constructor(name, salary) {
      super(name, salary);
    }
  
    collectCash(amount) {
      console.log(`${this.name} collects ${amount} cash.`);
    }
  
    returnCash(amount) {
      console.log(`${this.name} returns ${amount} cash to the pharmacy.`);
    }
  }
  
  // Manager class
  class Manager extends Employee {
    constructor(name, salary) {
      super(name, salary);
      this.isPharmacist = false;
      this.isCashier = false;
    }
  
    setPharmacist() {
      this.isPharmacist = true;
    }
  
    setCashier() {
      this.isCashier = true;
    }
  
    manageEmployees() {
      console.log(`${this.name} is managing employees.`);
    }
  
    work() {
      if (this.isPharmacist) {
        console.log(`${this.name} is working as a pharmacist.`);
      } else if (this.isCashier) {
        console.log(`${this.name} is working as a cashier.`);
      } else {
        console.log(`${this.name} is managing employees.`);
      }
    }
  }


// NO.2

// function groupAndReverse(string) {
//     let stringArray = string.split("");
//     let groupLength = 4;

//     let groups = [];
//     let reversedGroups = ""; // This will be our final string
    
   
//     let index = 0;

    // Loop while index is less than the array length
    // while(index < stringArray.length) {
        // slice out from the index + the groups length and puh push to the groups array
        // groups.push(stringArray.slice(index, index + groupLength));
        
        // Increase by group length
    //     index += groupLength;
    // }

    // groups.forEach(group => {
    //     reversedGroups += group.reverse().join(""); // Add to our string
    // });

//     return reversedGroups;
// }

// console.log(groupAndReverse("Lorem at"));
// console.log(groupAndReverse("Tempor ip"));


        // N0 3
// function arraySum(array) {
//     let total = 0; 

//     array.forEach(function(number) {
//         total += number;
//     })

//     return total;
// }

// let array = [1,2,4,7];
// console.log(arraySum(array));



            //No 4
// Constructive criticism
// This is a type of feedback given to a person with the intention of improving the person or his/her work. It is not harsh as compared to negative critcism. It's aimed atis building a person's selfconfidence and skills in the kindest way possible 


              // EG. 
//    I noticed an errors in your code have been frequent lately. Mistakes happen i understand. is there anything i need to be aware of thet might help you do your best work?
//    Be free to tell me any challenges you might be facing. "This is a type of feedback given to a person with the intention of improving the person or his/her work. Constructive criticism is not harsh as compared to negative critcism. It's main objective is building a person's selfconfidence and skills rather than tearing them down. Consturctive criticism is considered a  tool for personal growth and development"

