/*

Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8

*/

function getAge(birthDate, nowDate) {
  var currentDate = nowDate || new Date();

  var differenceInMs = currentDate - birthDate;
  var years = Math.round(differenceInMs / 1000) / 31536000;
  var currentMonth = currentDate.getMonth();
  var birthMonth = birthDate.getMonth();
  var currentDay = currentDate.getDate();
  var birthDay = birthDate.getDate();

  //if both birth month and birth day are less than current month and current day, subtract one from age
  if (currentDay < birthDay && currentMonth === birthMonth) {
    years--;
  }
  return Math.round(years);
}
