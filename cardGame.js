/*

Lеt's create function to play cards. You receive 3 arguments: card1 and card2 are cards from a single deck; trump is the main suit, which beats all others.

You have a preloaded deck (in case you need it):

deck = ["joker","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣",
                "2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦",
                "2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥",
                "2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"]

Game rules

    If both cards have the same suit, the higher one wins
    If both cards have trump, the higher one wins
    If the cards have different suits and no one has trump, return "Let us play again."
    If one card has trump, but not the other, the one with the trump wins
    If there is a winner, return "The first/second card won."
    If the two cards are the same, return "Someone cheats."
    The joker always wins

Examples

"3♣", "Q♣", "♦"  -->  "The second card won."
"5♥", "A♣", "♦"  -->  "Let us play again."
"8♠", "8♠", "♣"  -->  "Someone cheats."
"2♦", "A♠", "♦"  -->  "The first card won."
"joker", "joker", "♦"  -->  "Someone cheats."

*/
function cardGame(card1, card2, trump) {

  let ranks = '2345678910JQKA';
  let rank = card => ranks.indexOf(card.slice(0, -1));
  let suit = card => card.slice(-1);

  if (card1 === card2)
    return 'Someone cheats.';

  if (card1 === 'joker')
    return 'The first card won.';

  if (card2 === 'joker')
    return 'The second card won.';

  if (suit(card1) === suit(card2))
    if (rank(card1) > rank(card2))
      return 'The first card won.';
    else
      return 'The second card won.';

  if (suit(card1) === trump)
    return 'The first card won.';

  if (suit(card2) === trump)
    return 'The second card won.';

  return 'Let us play again.';

}
