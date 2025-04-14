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

//Wason, P. C. (1968). Reasoning about a Rule. Quarterly Journal of Experimental Psychology, 20(3), 273–281. https://doi.org/10.1080/14640746808400161
//P(Q), Q(not-P), not-P(not-Q), not-Q(P)
//"If there is a D on one side of any card, then there is a 3 on its other side."
function getOriginalWasonValues() {
  const cardValues = [];

  //P(Q)
  cardValues.push({
    "front": "D",
    "back": "3",
    "relevant": true
  });
  // Q(not-P)
  cardValues.push({
    "front": "3",
    "back": "K",
    "relevant": false
  });
  //not-P(not-Q)
  cardValues.push({
    "front": "B",
    "back": "5",
    "relevant": false
  });
  //not-Q(P)
  cardValues.push({
    "front": "7",
    "back": "D",
    "relevant": true
  });

  shuffle(cardValues);
  return cardValues;
}

function getAbstractWasonValues() {
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

//"Every time I go to Miami I travel by car."
function getTransitWasonValues() {
  const cardValues = [];

  //P(Q)
  cardValues.push({
    "front": "Miami",
    "back": "Car",
    "relevant": true
  });
  // Q(not-P)
  cardValues.push({
    "front": "Car",
    "back": "Atlanta",
    "relevant": false
  });
  //not-P(not-Q)
  cardValues.push({
    "front": "Atlanta",
    "back": "Plane",
    "relevant": false
  });
  //not-Q(P)
  cardValues.push({
    "front": "Plane",
    "back": "Miami",
    "relevant": true
  });

  shuffle(cardValues);
  return cardValues;
}

//"If a person is drinking beer, they must be [21] or older."
function getBeerWasonValues() {
  const cardValues = [];

  //P(Q)
  cardValues.push({
    "front": "Beer",
    "back": "22",
    "relevant": true
  });
  // Q(not-P)
  cardValues.push({
    "front": "23",
    "back": "Coke",
    "relevant": false
  });
  //not-P(not-Q)
  cardValues.push({
    "front": "Coke",
    "back": "17",
    "relevant": false
  });
  //not-Q(P)
  cardValues.push({
    "front": "16",
    "back": "Beer",
    "relevant": true
  }); 

  shuffle(cardValues);
  return cardValues;
}