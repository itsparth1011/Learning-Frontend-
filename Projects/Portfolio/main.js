const dynamicText = document.getElementById("dynamic-effect");
console.log(dynamicText);


const phrases = ["Software Engineer...", "Entrepreneur..", "Mentor.."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 75;



function printLetters(phrase)
{
    if(letterIndex == phrase.length)
    {
        clearLetters();
    }
    
    if(letterIndex < phrase.length)
    {
        dynamicText.textContent = phrase.charAt(letterIndex);
        letterIndex = letterIndex+1;
        setTimeout(function(){
            printLetters(phrase);
        }, typingSpeed)
    }
}

function clearLetters()
{
    if(letterIndex == -1)
    {
        phraseIndex = (phraseIndex+1)% phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    }
    else if(letterIndex > -1)
    {
        let updatedPhrase = "";
        for(let index = 0; index < phrases[phraseIndex].length; index++)
        {
            updatedPhrase = updatedPhrase + phrases[phraseIndex].charAt(index);
        }
        console.log(updatedPhrase);
        dynamicText.textContent = updatedPhrase;
        letterIndex  = letterIndex - 1;
        setTimeout(clearLetters, erasingSpeed)
    }
}
printLetters(phrases[phraseIndex])