// window.onload = function(){
//   main();
// }


// function main(){
//   console.log('Hello Aidan');

//   var quoteOfDay = document.getElementById('quote-of-the-day')
//   console.log(quoteOfDay);

//   var button = document.getElementsByTagName('button');
//   console.log(button[0]);

//   // var lastQuote = document.getElementById('last-quote')
//   // console.log(lastQuote);

//   var quotes = document.getElementsByClassName('quote')
//   var lastQuote = quotes[quotes.length-1] 
//   console.log(lastQuote.innerText);

//   // quoteOfDay.style.visibility = 'hidden';
//   quoteOfDay.hidden = true;

//   var articles = document.getElementsByTagName('article');
//   for (var i = articles.length - 1; i >= 0; i--) {
//     articles[i].style.backgroundColor = 'wheat';
//   }
//   createQuote();

// }

// function createQuote(){
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

//   var blockQuote = document.createElement('blockquote');
//   blockQuote.innerText = "Open the pod bay doors HAL";

//   var cite = document.createElement('cite');
//   cite.innerText = "Dave";


//   blockQuote.appendChild(cite);

//   quoteArticle.appendChild(blockQuote);

//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);

// }

window.onload = function(){
  main();
}




var listOfQuotes = [
{
  text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.",
  author: " Jay Chetty"
},
{
  text: "The only CSS you need to know is background-color: tomato",
  author: " Rick"
},
{
  text: "I used the jQuery diet plugin and lost 10kg in a week.",
  author: " Keith"
},
{
  text: "Scaffolding is nothing but a fiery hell.",
  author: " Valerie"
}
]

function main(){
  console.log('lets do this');

    var button = document.getElementsByTagName('submit');
    button.onlclick = handleClick;

  var handleClick = function(){
    console.log('caliiick!');
    var input = document.getElementsByTagName('blockquote');
    var userQuote = input.value
    appendQuote(userQuote);
  }

  var appendQuote = function(userQuote){
    var li = document.createElement('li');
    li.innertext = userQuote;
    console.log(li);
    document.getElementsByTagName('blockquote').appendChild(li);
  }



  var quotesPoster = function(){
    for(var i in listOfQuotes){
      // console.log(i);
      var text = listOfQuotes[i].text;
      var author = listOfQuotes[i].author;
      
      var quoteArticle = document.createElement('article');
      quoteArticle.classList.add('quote');

     var blockQuote = document.createElement('blockquote');
          blockQuote.innerText = text

          var cite = document.createElement('cite');
          cite.innerText = author

          blockQuote.appendChild(cite);

          quoteArticle.appendChild(blockQuote);

          var quotes = document.querySelector('#quotes');
          quotes.appendChild(quoteArticle);
        
    }
  }
 

quotesPoster(listOfQuotes)

newQuote();

}





function newQuote(){


var quoteArticle = document.createElement('article');
quoteArticle.classList.add('quote');
var input1 = document.createElement('input');
  input1.type = 'text';

var blockQuote = document.createElement('blockquote');
blockQuote.innertext = input1

blockQuote.appendChild(input1)


var input2 = document.createElement('input');
  input2.type = 'text';

  var button2 = document.createElement('button');
  button2.type = 'submit';
  var t = document.createTextNode('Add Quote');
  button2.appendChild(t);

var cite = document.createElement('cite');
cite.innertext = input2

cite.appendChild(input2)
cite.appendChild(button2)


blockQuote.appendChild(cite);

quoteArticle.appendChild(blockQuote);

var quotes = document.querySelector('#quotes');
quotes.appendChild(quoteArticle);



}


























