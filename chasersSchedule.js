/*
 
Description:

A runner, who runs with base speed s with duration t will cover a distances d: d = s * t
However, this runner can sprint for one unit of time with double speed s * 2
After sprinting, base speed s will permanently reduced by 1, and for next one unit of time runner will enter recovery phase and can't sprint again.

Your task, given base speed s and time t, is to find the maximum possible distance d.
Input:

1 <= s < 1000
1 <= t < 1000
Example:

Given s = 2 and t = 4.
We could schedule when runner should sprint so we could get these possible sequences:

Seq.: RRRR
=> s + s + s + s
=> 2 + 2 + 2 + 2 = 8
Seq.: RRRS
=> s + s + s + s*2
=> 2 + 2 + 2 + 2*2 = 10
Seq.: RRSR
=> s + s + s*2 + (s-1)
=> 2 + 2 + 2*2 + (2-1) = 9
Seq.: RSRR
=> s + s*2 + (s-1) + (s-1)
=> 2 + 2*2 + (2-1) + (2-1) = 8
Seq.: RSRS
=> s + s*2 + (s-1) + (s-1)*2
=> 2 + 2*2 + (2-1) + (2-1)*2 = 9
Seq.: SRRR
=> s*2 + (s-1) + (s-1) + (s-1)
=> 2*2 + (2-1) + (2-1) + (2-1) = 7
Seq.: SRRS
=> s*2 + (s-1) + (s-1) + (s-1)*2
=> 2*2 + (2-1) + (2-1) + (2-1)*2 = 8
Seq.: SRSR
=> s*2 + (s-1) + (s-1)*2 + (s-1-1)
=> 2*2 + (2-1) + (2-1)*2 + (2-1-1) = 7

Where:
- R: Normal Run / Recovery
- S: Sprint

Based on above sequences, the maximum possible distance d is 10.}

*/

function solution(s, t) {
  //This calculates the base distance if the runner never sprints
  let baseDistance = s * t;

  //This calculates the max number of sprints available rounded up i.e. 5t === 3 sprints
  let maxSprints = Math.ceil(t / 2)

  //This will calculate the distance gains from sprints, 
  //ideally these sprints would be done at the end to minimize the 
  //speed lose caused by the sprint.
  for (let i = 0; i < maxSprints; i++) {

    //This calulates the distance gained each time that we sprint and we want to sprint as 
    //long as it still provides an increase in distance. The first time that you sprint
    //the runner gets the full distance, each sprint after will lose 3 distance.

    //Example: if s === 20, the first sprint gains 20, the runner loses 1 speed from sprinting
    //and two speed from the new maximum sprint which is 18. This is why we minus 3. 
    if (s - 3 * i > 0) {
      baseDistance += s - 3 * i;
    }
  }
  return baseDistance;
}
