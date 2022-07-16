const quoteText=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");
// rnadom quote function 
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML="Loading...";
    // fetching random quotes/data from the API and parsing it into javascript object
    fetch("https://hindi-quotes.vercel.app/random").then(res=>res.json()).then(result=>{
       
        quoteText.innerText=result.quote;
        authorName.innerText=result.type;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    });
}

// soundBtn.addEventListener("click",()=>{
//     des
//     // the speechSynthesisisUtterance is a web speech api that represents a speech request
//  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${ authorName.innerText}`);
//  speechSynthesis.speak(utterance);//speak method of speechSyncthesis speaks the utternance
// });
copyBtn.addEventListener("click",()=>{
 //copying the quote text on copybtn
 // writeText() property writes the specified text string to the system clipboard
 navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);