var texts = [
    "Mim en af de andre spillere - de andre skal gætte hvem. Alle tager en tår",
    "Stå op indtil det er din tur igen",
    "Hvem er mest tilbøjelig til at få nye venner i byen? Personen drikker 2 tåre"
];
var currentIndex = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function showPreviousText() {
    currentIndex--;
    if (currentIndex <
