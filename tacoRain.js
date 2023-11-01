/*

Description:
It's Raining Tacos!

A line of tacos is falling out of the sky onto the landscape.

Your task is to predict what the landscape will look like when the tacos fall on it.

                   
INPUT:             
           *********

                   
OUTPUT:    TACOTACOT
           *********

The landscape is represented as any ASCII character, with the air being represented as whitespaces. The rows are separated by newline characters.

Tacos fall from left to right, distributing the word TACO repeadetly over the landscape. Each letter falls on the topmost part of the landscape in that area.

If there are no characters in that location, the taco falls all the way to the bottom.

                   
INPUT:       *  ** 
           *** **** 

             C  AC 
OUTPUT:    TA* T**O
           ***O****T

If there is no space for tacos to fall, then that space is skipped. The next letter still continues forward in the TACO sequence.

           **      
INPUT:     ****    
           ******   

           **CO    
OUTPUT:    ****TA  
           ******COT

Tacos cannot fall through solid material. If there is a floating island, TACO should be placed on the island, not below it.

                   
INPUT:      *****  
                    

            COTAC 
OUTPUT:     ***** 
          TA     OT

The width and height of the landscape can be anywhere from 1 to 100.

In the case of an empty string, return an empty string.

Good Luck!

*/

const S = "TACO"

function rainTacos(landscape) {
  let arr = landscape.split`\n`.map(x => [...x])
  for (let i = 0; i < arr[0].length; i++) {
    let j = 0
    while (arr[j][i] == ' ') {
      j++
      if (j == arr.length) break
    }
    if (j > 0) arr[j - 1][i] = S[i % 4]
  }
  return arr.map(x => x.join``).join`\n`
}
