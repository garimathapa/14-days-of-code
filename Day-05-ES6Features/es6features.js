// Problem Statement

// Object Merger Pro:
// Write a function that merges two user profile objects, where the second object’s values override the first when keys overlap.
// Additionally, extract (destructure) specific fields — name, age, and email — from the merged object and return a formatted summary string using template literals:
// "User <name> (age <age>) can be contacted at <email>."

function mergeProfilesJS(profileA, profileB) {
  // Merge using spread
  const merged = { ...profileA, ...profileB };

  // Destructure merged object
  const { name, age, email } = merged;

  // Return formatted string
  return `User ${name} (age ${age}) can be contacted at ${email}.`;
}

// Example
const user1 = { name: "Garima", age: 25, email: "garima@mail.com", city: "Paris" };
const user2 = { age: 27, email: "garima.new@mail.com" };

console.log(mergeProfilesJS(user1, user2));
