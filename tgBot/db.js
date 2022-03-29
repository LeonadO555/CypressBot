import fs from 'fs';

let dataActualUser = fs.readFileSync('MacintoshHD/Users/leo/Downloads/dojob-main/tmp/dataActualUser.json', 'utf8');
let dataAllUsers = fs.readFileSync('MacintoshHD/Users/leo/Downloads/dojob-main/tmp/dataAllUser.json', 'utf8');
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
