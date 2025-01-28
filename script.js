let blockQuotes = [
  '"Livet handler ikke om at finde sig selv. Livet handler om at skabe sig selv. – George Bernard Shaw"',
  '"Det er aldrig for sent at blive den, du kunne have været." – George Eliot',
  '"Hver dag er en ny mulighed for at ændre dit liv." – Anonym',
  '"Den eneste måde at gøre et stort arbejde på, er at elske det, du gør." – Steve Jobs',
  '"Du skal ikke vente på den perfekte mulighed, du skal skabe den." – Anonym',
  '"Vær den forandring, du ønsker at se i verden." – Mahatma Gandhi',
  '"Success er ikke endeligt, fiasko er ikke fatalt: Det er modet til at fortsætte, der tæller." – Winston Churchill',
  '"Livet er det, der sker, mens du er optaget af at lægge andre planer." – John Lennon',
  '"Det er ikke de stærkeste af arterne, der overlever, og ikke de mest intelligente, men de, der er mest modtagelige for forandring." – Charles Darwin',
  '"Hvad du end kan gøre eller drømme om at gøre, skal du begynde. Mod har i sig magi, kraft og vidunder." – Johann Wolfgang von Goethe',
];

let quotesListElm = document.querySelector('.quotes-list');

let i = 0;
let randomQuote = blockQuotes[Math.floor(Math.random() * blockQuotes.length)];

console.log(randomQuote);
// var quote = document.createElement('blockquote');


function showRandomQuote() {
    quotesListElm.innerHTML = randomQuote;}
showRandomQuote();


