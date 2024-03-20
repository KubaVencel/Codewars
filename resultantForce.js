/*

Given two forces (F1 and F2 ) and the angle F2 makes with F1 find the resultant force R and the angle it makes with F1.
input

Three values :

    F1
    F2 making an angle θ with F1
    angle θ

output

An array consisting of two values :

    R (the resultant force)
    angle R makes with F1 (φ)

notes

Units for each of the following are given as under :

    F1 = Newton
    F2 = Newton
    angle θ = degree
    R = Newton
    φ = degree

*/

function solution(F1, F2, θ) {
  θ = θ * Math.PI / 180;
  const
    F2x = F2 * Math.cos(θ), F2y = F2 * Math.sin(θ),
    Fx = F1 + F2x, Fy = F2y;
  return [Math.hypot(Fx, Fy), Math.atan2(Fy, Fx) * 180 / Math.PI];
}
