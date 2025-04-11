const evenNumbers = Array(5).fill(0).map((x, i) => 2*(i + 1));
const oddNumbers = Array(5).fill(0).map((x, i) => 2*i + 1);
const numbers = Array(10).fill(0).map((x, i) => i + 1);
const vowels = Array(5).fill(0).map((x, i) => "AEIOU".charAt(i));
//not including Y to avoid confusion
const consonants = Array(20).fill(0).map((x, i) => "BCDFGHJKLMNPQRSTVWXZ".charAt(i));
const letters = Array(25).fill(0).map((x, i) => "ABCDEFGHIJKLMNOPQRSTUVWXZ".charAt(i));

//examples, E rating, alcoholic beverages
//cheater detection
//unfair leeching resources -> evolutionarily advantageous to
//spot cheaters, people not being cooperative in group, better
//group survival

https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function getNormalWasonValues() {
  const cardValues = [];
  shuffle(evenNumbers);
  shuffle(oddNumbers);
  shuffle(numbers);
  shuffle(vowels);
  shuffle(consonants);
  shuffle(letters);

  cardValues.push({
    "front": vowels[0],
    "back": numbers[0],
    "relevant": false
  });
  cardValues.push({
    "front": consonants[0],
    "back": numbers[1],
    "relevant": true
  });
  cardValues.push({
    "front": evenNumbers[1],
    "back": letters[0],
    "relevant": true
  });
  cardValues.push({
    "front": oddNumbers[1],
    "back": letters[1],
    "relevant": false
  });

  shuffle(cardValues);
  return cardValues;
}

function getAlcoholWasonValues() {
  const cardValues = [];

  cardValues.push({
    "front": "Coke",
    "back": "18",
    "relevant": false
  });
  cardValues.push({
    "front": "Beer",
    "back": "17",
    "relevant": true
  });
  cardValues.push({
    "front": "16",
    "back": "Water",
    "relevant": true
  });
  cardValues.push({
    "front": "22",
    "back": "Water",
    "relevant": false
  });

  shuffle(cardValues);
  return cardValues;
}