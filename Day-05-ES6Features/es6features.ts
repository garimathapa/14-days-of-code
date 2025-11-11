// Problem Statement

// Object Merger Pro:
// Write a function that merges two user profile objects, where the second object’s values override the first when keys overlap.
// Additionally, extract (destructure) specific fields — name, age, and email — from the merged object and return a formatted summary string using template literals:
// "User <name> (age <age>) can be contacted at <email>."

type UserProfile = {
  name: string;
  age: number;
  email: string;
  [key: string]: any;
};

function mergeProfilesTS(profileA: UserProfile, profileB: Partial<UserProfile>): string {
  // Type-safe merge
  const merged: UserProfile = { ...profileA, ...profileB };

  // Type-safe destructuring
  const { name, age, email } = merged;

  return `User ${name} (age ${age}) can be contacted at ${email}.`;
}

// Example
const user1: UserProfile = { name: "Bob", age: 30, email: "bob@mail.com", city: "London" };
const user2: Partial<UserProfile> = { age: 31, email: "bob.new@mail.com" };

console.log(mergeProfilesTS(user1, user2));
