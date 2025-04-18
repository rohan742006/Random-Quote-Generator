const quotes=[
    "The best way to predict the future is to create it. -Abraham Lincoln",
    "It's your game; make up your own rules. -Barbara Corcoran",
    "Success is not the key to happiness. Happiness is the key to success. -Albert Schweitzer",
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Act as if what you do makes a difference. It does. -William James",
    "You are never too Old to set another goal or to dream a new dream. -C.S Lewis",
    "Opportunities don't happen. You create them. -Chris Grosser",
    "It always seems impossible until it's done. -Nelson Mandela",
    "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
    "If you want to lift yourself up, lift up someone else. -Booker T. Washington",
    "If you're going through hell, keep going. -Winston Churchill",
    "The best way to get started is to quit talking and begin doing. -Walt Disney",
    "Don’t let yesterday take up too much of today. -Will Rogers"
];


// taken refernce to dom elements
const quoteText=document.getElementById("quote");
const newQuotebtn=document.getElementById("newQuotebtn");


function getrandomquote(){
    const randomindex=Math.floor(Math.random()*quotes.length);   //we get random index here
    quoteText.textContent=quotes[randomindex];   //updates the quote by selecting randomly
}

newQuotebtn.addEventListener("click",getrandomquote);



