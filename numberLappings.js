/*

You are running a race on a circular race track against the ghost of your past self.

Each time you lap your ghost, you get a confidence boost because you realize how much faster you got.

Given your speed (km/h), your ghosts speed (km/h), the length of the circular race track (km) and the time you run (h), predict how often you will lap your ghost.

Lapping your ghost means going from being behind your ghost to being in front of your ghost.

*/

function number_lappings(my_speed, ghost_speed, time, round_length) {
  let diffSpeed = my_speed - ghost_speed;
  if (diffSpeed <= 0) {
    return 0;
  }
  else {
    let timeToLap = round_length / diffSpeed;
    return time % timeToLap === 0 ? time / timeToLap - 1 : Math.floor(time / timeToLap);
  }
}
