const api = "https://api.quotable.io/random"

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

btn.addEventListener('click', getQuote);

function getQuote() {
fetch(api)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      quote.innerHTML = `${data.content}`;
      author.innerHTML = ` -${data.author}`
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}