const findTheOldest = function(arr) {
    const oldest = arr.reduce((groupedPeople, person) => {
        if (person.yearOfDeath === undefined) {
          person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        return Math.max(groupedPeople, age)
      }, 0);
  
      const name = arr.reduce((groupedPeople, person) => {
        if (person.yearOfDeath === undefined) {
          person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;  
        if (age == oldest) {
          groupedPeople = person;
        } 
        return groupedPeople;
      });
      return name;
};

// Do not edit below this line
module.exports = findTheOldest;
