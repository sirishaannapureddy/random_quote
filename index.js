 const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  }
];

let quote=document.getElementById("quote")
let author=document.getElementById("author")
let btn=document.getElementById("btn")


btn.addEventListener("click", () => {
           
            const Index = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[Index]
            
            quote.value = randomQuote.quote;
            author.value = randomQuote.author;
        });
window.addEventListener("load",()=>{
    quote.value= "In the middle of every difficulty lies opportunity"
    author.value="Albert Einstein"

})