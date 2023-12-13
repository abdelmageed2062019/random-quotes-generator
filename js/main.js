var quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
];

var prevQuoteIdx = null;

function getQuote() {
  var randomIdx;

  do {
    randomIdx = Math.floor(Math.random() * quotes.length);
  } while (randomIdx === prevQuoteIdx);

  prevQuoteIdx = randomIdx;

  var quoteContainer = document.getElementById("quoteContainer");

  quoteContainer.innerHTML = "";
  quoteContainer.style.display = "block";

  var newQuote = document.createElement("p");
  var newAuthor = document.createElement("p");
  var soundBtn = document.createElement("button");
  var copyBtn = document.createElement("button");

  newQuote.innerHTML = `"${quotes[randomIdx].quote}"`;
  newAuthor.innerHTML = "- " + quotes[randomIdx].author;

  soundBtn.id = "sound";
  copyBtn.id = "copy";

  copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
  soundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

  soundBtn.addEventListener("click", function () {
    speechTxt(randomIdx);
  });

  copyBtn.addEventListener("click", function () {
    copyTxt(randomIdx);
  });

  quoteContainer.appendChild(newQuote);
  quoteContainer.appendChild(newAuthor);
  quoteContainer.appendChild(soundBtn);
  quoteContainer.appendChild(copyBtn);
}

function speechTxt(idx) {
  let speechText = new SpeechSynthesisUtterance();
  speechText.text = `${quotes[idx].quote}`;
  speechText.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(speechText);
}

function copyTxt(idx) {
  navigator.clipboard.writeText(quotes[idx].quote);
  alert("Quote Copied To Your Clipboard");
}
