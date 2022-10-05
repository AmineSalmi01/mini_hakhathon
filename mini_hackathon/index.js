const RANDOM_API_URL = 'https://api.quotable.io/random';
var QueteElement = document.getElementById('quoteDisplay');
var TimerElement = document.getElementById('timer');
var input = document.getElementById('input');
var paragh = document.getElementById('paragh');
var paragh2 = document.getElementById('paragh2');
let score = 0;


input.addEventListener('input', () => {
    const array_span = QueteElement.querySelectorAll('span')
    const array_value = input.value.split('')
    let correct = true;
    let error = 0;
    

    array_span.forEach((CharacterSpan, index) => {
        
        const Character = array_value[index]
        if(Character == null){
            CharacterSpan.classList.remove('correct')
            CharacterSpan.classList.remove('incorrect')
            correct = false;
        }else if(Character === CharacterSpan.innerText){
            CharacterSpan.classList.add('correct')
            CharacterSpan.classList.remove('incorrect')
        }else{
            CharacterSpan.classList.remove('correct')
            CharacterSpan.classList.add('incorrect')  
            correct = false;
            error++;
            paragh2.innerHTML = error;
        }
        if(Character === " "){
            CharacterSpan.classList.remove('correct')
            CharacterSpan.classList.add('incorrect')  
        }
    })

    if(correct){
        renderNextQuote();
        input.value = null
        score++;
        paragh.innerHTML = score;
    }
 })




//promise 

function getRandomQuote() {
   return fetch(RANDOM_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

//await

async function renderNextQuote() {
    const quote = await getRandomQuote();
    document.getElementById('quoteDisplay').innerHTML = ''
    
    quote.split('').forEach(Character => {
        const CharacterSpan = document.createElement('span')
        CharacterSpan.innerText = Character
        document.getElementById('quoteDisplay').appendChild(CharacterSpan)
    });
    Timer()
}

// let startTimer 
// function Timer(){
//     TimerElement.innerText = 0;
//     startTimer = new Date()
//     setInterval(() => {
//         TimerElement.innerText =  getTimer()
//     }, 1000)
// }

// function getTimer(){
//     return Math.floor((new Date() - startTimer / 1000))
// }


renderNextQuote()