let quotesContainer = document.querySelector('.quotes-container')


let quotesArray = [
    {
        quote : 'The only way to do great work is to love what you do.',
        author : '- Steve Jobs'
    },

    {
        quote : 'The future belongs to those who believe in the beauty of their dreams.',
        author : '- Eleanor Roosevelt'
    },

    {
        quote : 'It does not matter how slowly you go as long as you do not stop.',
        author : '- Confucius'
    },

    {
        quote : 'In the end, it’s not the years in your life that count. It’s the life in your years.',
        author : '- Abraham Lincoln'
    },

    {
        quote : 'You miss 100% of the shots you don’t take.',
        author : '- Wayne Gretzky'
    },

    {
        quote : 'I have not failed. I’ve just found 10,000 ways that won’t work.',
        author : '- Thomas A. Edison'
    },

    {
        quote : 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author : '- Albert Einstein'
    },

    {
        quote : 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author : '- Winston Churchill'
    },

    {
        quote : 'Believe you can and you’re halfway there.',
        author : '- Theodore Roosevelt'
    },

    {
        quote : "Common sense is a flower that does not grow in everyone's garden",
        author : '- Kakashi Hatake'
    }
] 


let button = document.querySelector('.New-quote')
button.addEventListener('click', displayQuotes)

function displayQuotes () {
    const index = Math.floor(Math.random() * quotesArray.length)
    const quoteObject = quotesArray[index]

    let quotes = document.querySelector('.quotes')
    let authorName = document.querySelector('.author-name')

    quotes.textContent = quoteObject.quote
    authorName.textContent =  `- ${quoteObject.author}`
}

// displays initial quote
displayQuotes()











