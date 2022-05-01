const quotes = [
    {quote : "Whenever you find yourself on the side of the majority it is time to pause and reflect.",
    author : "Mark Twiain",
    },
    {quote : "Happiness can be found even in the darkest of times if one only remembers to turn on the light",
    author : "Albus Dumbledore",
    },
    {quote : "Once you make a decision the universe conspires to make it happen.",
    author : "Ralph Waldo Emerson",
    },
    {quote : "It’s ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.",
    author : "Mark Twain",
    },
    {quote : "Twenty years from now you will be more disappinted by the things you didn’t do than by the ones you did so.",
    author : "Mark Twain",
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote
author.innerText = todaysQuotes.author