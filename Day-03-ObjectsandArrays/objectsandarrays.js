// Problem Statement

// Create a function that takes an array of user objects (each containing id, name, age, and hobbies) and performs the following operations:
// Add a new hobby "coding" to every user under 25 years old.
// Remove any hobby that contains the word "extreme".
// Add a new field isAdult (boolean) based on whether the user’s age is 18 or above.
// Return the updated array of users.

const users = [
  { id: 1, name: "Alice", age: 22, hobbies: ["reading", "extreme sports"] },
  { id: 2, name: "Bob", age: 30, hobbies: ["cooking", "traveling"] },
  { id: 3, name: "Charlie", age: 17, hobbies: ["gaming", "extreme biking"] }
];

function updateUsers(users) {
  return users.map(user => {
    let updatedHobbies = user.hobbies
      .filter(hobby => !hobby.toLowerCase().includes("extreme"));

    if (user.age < 25) {
      updatedHobbies.push("coding");
    }

    return {
      ...user,
      hobbies: updatedHobbies,
      isAdult: user.age >= 18
    };
  });
}

console.log(updateUsers(users));
