/*

Description:
Classify a Texas hold'em hand

Your task is to inspect a hand in Texas hold'em poker after the first stage of dealing and decide whether it contains various valuable card combos. A hand at this stage of the game consists of five cards; two "hole cards" dealt to you individually, and three community cards in "the flop".

Cards are represented by objects like so:

{
  val: 'Ace',
  suit: 'Hearts'
}

For this kata you should implement three functions, each accepting the hole cards and the flop and returning a boolean value:

isPair(): Should return true if there is a pair in the hand; two cards having the same val.

isTwoPair(): Should return true if there are two distinct pairs; two cards sharing one val, and two cards sharing another.

isSet(): Should return true if there is a three-of-a-kind in the hand; three cards sharing the same val.

These three classifications may overlap; for example, a hand with four-of-a-kind in it has a pair and a set, but not two pairs.
Example:

In the hole you have:

[ 
  {val: 'Ace', suit: 'Spades'}, 
  {val: '9', suit: 'Hearts'} 
]

and in the flop you have:

[
  {val: '9', suit: 'Diamonds'}, 
  {val: 'Jack', suit: 'Hearts'}, 
  {val: '10', suit: 'Clubs'}
]

Because there are a pair of nines, but only one pair and no set:

isPair - must return true.

isTwoPair - must return false.

isSet - must return false.

*/

function isPair(hole, flop) {
  const allCards = [...hole, ...flop];
  const dictionary = {}
  for (let i = 0; i < allCards.length; i++) {
    const cardValue = allCards[i].val
    if (dictionary[cardValue]) return true
    dictionary[cardValue] = cardValue
  }
  return false
}

function isTwoPair(hole, flop) {
  const pairs = []
  const allCards = [...hole, ...flop];
  const dictionary = {}

  for (let i = 0; i < allCards.length; i++) {
    const cardValue = allCards[i].val
    if (dictionary[cardValue]) {
      dictionary[cardValue] += 1
      if (dictionary[cardValue] === 2) pairs.push(dictionary[cardValue])
    } else dictionary[cardValue] = 1
  }
  return pairs?.length === 2
}

function isSet(hole, flop) {
  const allCards = [...hole, ...flop];
  const dictionary = {}
  for (let i = 0; i < allCards.length; i++) {
    const cardValue = allCards[i].val
    if (dictionary[cardValue]) {
      dictionary[cardValue] += 1
      if (dictionary[cardValue] === 3) {
        return true
      }
    } else dictionary[cardValue] = 1
  }
  return false
}
