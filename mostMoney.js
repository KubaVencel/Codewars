/*

Description:

You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

    Each student will have a unique name
    There will always be a clear winner: either one person has the most, or everyone has the same amount
    If there is only one student, then that student has the most money

*/

function mostMoney(students) {
  let sortable = [];
  for (let student = 0; student < students.length; student++) {
    students[student]["money"] = 0
    for (let key in students[student]) {
      if (key === "name") continue
      else {
        if (key === "fives") {
          students[student]["money"] += 5 * students[student][key]
        } else if (key === "tens") {
          students[student]["money"] += 10 * students[student][key]
        } else if (key === "twenties") {
          students[student]["money"] += 20 * students[student][key]
        }
      }
    }
    sortable.push([students[student]["name"], students[student]["money"]])
  }

  sortable = sortable.sort((a, b) => a[1] - b[1]).reverse()
  if (sortable.length === 1) return sortable[0][0]
  else if (sortable[0][1] === sortable[1][1]) return "all"
  else return sortable[0][0]
}
