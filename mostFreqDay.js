/*

What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

    Week starts on Monday.
    Year is between 1583 and 4000.
    Calendar is Gregorian.

Examples (input -> output):

* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']

*/

function mostFrequentDays(year) {
  var days = [
    new Date(year, 0, 1).getDay(),
    new Date(year, 11, 31).getDay()
  ];

  if (days[0] === days[1])
    days.pop();

  else if (!days[0] || days[0] > days[1] && days[1])
    days.reverse();

  return days.map(n => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][n] + 'day');
}
