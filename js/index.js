var quote = ['“Be yourself; everyone else is already taken.”',

"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",

"“A room without books is like a body without a soul.",

"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",

"“If you tell the truth, you don't have to remember anything.”",

"“To live is the rarest thing in the world. Most people exist, that is all.”",

"“Always forgive your enemies; nothing annoys them so much.”",

"“Good friends, good books, and a sleepy conscience: this is the ideal life.”"

]
 var auther =['― Oscar Wilde','― Marilyn Monroe','― Marcus Tullius Cicero','― Bernard M. Baruch','― Mark Twain',
              '― Oscar Wilde','― Oscar Wilde','― Mark Twain']



 var oldRandom ;
 var newRandom ;
 function generateQuote(){
     
    do {
        newRandom = Math.floor(Math.random() * quote.length); 
    } while (oldRandom === newRandom);

    oldRandom = newRandom;

     document.getElementById('quoteoutput').innerHTML=quote[newRandom];
     document.getElementById('autheroutput').innerHTML=auther[newRandom];
     
 }
