import users from './users.js';

// ----------------------------task-1----------------------------
const getUserNames = users => {
  // --------------------------Вариант 1-------------------------
  // return users.map(function(user) {
  //   return user.name;
  // });
  // --------------------------Вариант 2-------------------------
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ----------------------------task-2----------------------------
const getUsersWithEyeColor = (users, color) => {
  // -------------------------Вариант 1--------------------------
  // return users.filter(function(user) {
  //   return user.eyeColor === color;
  // });
  // --------------------------Вариант 2-------------------------
  return users.filter(user => user.eyeColor === color);
};
console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ----------------------------task-3----------------------------
const getUsersWithGender = (users, gender) => {
  // -------------------------Вариант 1--------------------------
  // return users
  //   .filter(function(user) {
  //     return user.gender === gender;
  //   })
  //   .map(function(user) {
  //     return user.name;
  // });
  // --------------------------Вариант 2-------------------------
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ----------------------------task-4-----------------------------
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// ----------------------------task-5----------------------------
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// ----------------------------task-6----------------------------
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// ----------------------------task-7----------------------------
