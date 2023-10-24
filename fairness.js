/*

Description:

A military camp has their recruits do guard duty as part of their monthly course there. All recruits are required to do guard duty as part of their course.
The camp attempts to have the recruits do an equal amount of guard duty each such that none of them do too much or too little guard duty. To do so, 
the camp implemented a point system where the recruits earn points when they do guard duty. Guard duties done on weekdays (except Friday) is worth 1 point,
duties done on Friday is worth 1.5 points and duties on weekdays is worth 2 points.

Code a function that will attempt to ensure all recruits do a fair amount of guard duty throughout the course, which lasts for 30 days.The function should
take in an array of names and return an array of 30 values, each value a string representing the name of the person doing the guard duty for that day. You 
may assume the course starts on the Monday. The difference in points between the person with the highest score and the person with the lowest score cannot
be more than 1. There will never be a course with more than 30 people.

*/

function guardChoosing(names) {
  let res = []
  for (let i = 0; i < 30; i++) {
    let cur = i % 7 < 4 ? 1 : i % 7 == 4 ? 1.5 : 2
    res.push(cur)
  }
  let obj = {}
  names.forEach(e => {
    obj[e] = 0
  })
  for (let i = 2; i >= 1; i -= 0.5) {
    while (res.includes(i)) {
      let min = Math.min(...Object.values(obj))
      for (let key in obj) {
        if (obj[key] === min) {
          obj[key] += i
          res[res.indexOf(i)] = key
          break
        }
      }
    }
  }
  return res
}
