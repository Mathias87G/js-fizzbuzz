// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
// numeri divisibili per 3 e 5
  if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById('list').innerHTML += "<li>" + "FizzBuzz" + "</li>";
    console.log("FizzBuzz");
// numeri divisibili per 3
  } else if (i % 3 == 0) {
    document.getElementById('list').innerHTML += "<li>" + "Fizz" + "</li>";
    console.log("Fizz");
// numeri divisibili per 5
  } else if (i % 5 == 0) {
    document.getElementById('list').innerHTML += "<li>" + "Buzz" + "</li>";
    console.log("Buzz");
// altri numeri
  }  else {
    document.getElementById('list').innerHTML += "<li>" + i + "</li>";
    console.log(i);
  }
}
