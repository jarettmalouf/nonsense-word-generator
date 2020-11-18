const consonants = "bcdfghjklmnprstvwxz".split("");
consonants.push("qu");
const vowels = "aeiou".split("");
const stops = "pbtdkg".split("");
const nasals = ["m", "n", "ng"];
const fricatives = ["f", "v", "th", "s", "z", "sh", "zh", "ch"];
const approximants = ["r", "l", "y"];

for (let i = 0; i < 100; i++) {
	console.log(getRandomWord());
}

function getRandomWord() {
	return getRandomWordWithNSyllables(rand(2) + 1);
}

function getRandomWordWithNSyllables(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += getRandomSyllable();
  }
  return result;
}

function getRandomSyllable() {
	const r = rand(10);
  let onset = "", coda = "";
  if (r > 2) {
  	onset = getRandomOnset();
  }
  const r2 = rand(10);
  if (r > 3) {
  	coda = getRandomCoda();
  }
  const nucleus = getRandomNucleus();
  return onset + nucleus + coda;
}

function getRandomNucleus() {
	return vowels[rand(vowels.length)];
}

function getRandomCoda() {
	const r = rand(3);
  switch (r) {
  	case 0:
    	return getRandomConsonant();
    case 1:
    	return getRandomPhoneme("nasal");
    case 2:
    	return getRandomPhoneme("fricative");
    default:
    	return getRandomConsonant();
  }
}

function getRandomOnset() {
  return getRandomOnsetWithNLetters(rand(2) + 1);
}

function getRandomOnsetWithNLetters(n) {
	if (n === 3) {
  	return "s" + getRandomPhoneme("stop") + getRandomPhoneme("approximant");
  }
  else if (n === 2) {
  	return getRandomConsonant() + getRandomPhoneme("approximant");
  }
  else {
  	return getRandomConsonant();
  }
}

function getRandomConsonant() {
	return consonants[rand(consonants.length)];
}

function getRandomPhoneme(manner) {
	switch (manner) {
  	case "stop":
    	return stops[rand(stops.length)];
     case "nasal":
     	return nasals[rand(nasals.length)];
     case "fricative":
     	return fricatives[rand(fricatives.length)];
     case "approximant":
      return approximants[rand(approximants.length)];
     default:
     	return "";
  }
}

function rand(n) {
  return Math.floor(Math.random() * n);
}
