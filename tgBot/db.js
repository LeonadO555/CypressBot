import fs from 'fs';

let dataActualUser = fs.readFileSync('tmp/dataActualUser.json', 'utf8');
let dataAllUsers = fs.readFileSync('tmp/dataAllUser.json', 'utf8');
export function getActualUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUser);
    }, 500);
  });
}
export function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataAllUsers);
    }, 500);
  });
}
