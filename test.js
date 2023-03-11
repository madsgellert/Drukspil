// Definerer array med tekster
var texts = [
  "Mim en af de andre spillere - de andre skal gætte hvem. Alle tager en tår",
  "Stå op indtil det er din tur igen",
  "Hvem er mest tilbøjelig til at få nye venner i byen? Personen drikker 2 tåre",
];

// Variabel til at holde index for aktuelt tekst-element
var currentIndex = 0;

// Funktion til at blande elementerne i tekster-array'et
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Funktion til at vise forrige tekst-element
function showPreviousText() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = texts.length - 1;
  }
  document.getElementById("text").innerHTML = texts[currentIndex];
}

// Funktion til at vise næste tekst-element
function showNextText() {
  currentIndex++;
  if (currentIndex >= texts.length) {
    currentIndex = 0;
  }
  document.getElementById("text").innerHTML = texts[currentIndex];
}

// Kalder shuffleArray-funktionen for at blande tekster-array'et
shuffleArray(texts);
