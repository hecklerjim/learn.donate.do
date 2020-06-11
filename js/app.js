// FILTERS
$(document).ready(function(){
  var links = $('.bound');
  var divs = $('.col-md-4');
  links.click(function(event){
     divs.hide();
     divs.filter('.' + event.target.id).show();
  });
});

// SHOW ALL FILTER
$(document).ready(function(){
  var link = $('.bound_all');
  var divs = $('.col-md-4');
  link.click(function(event){
     divs.show();
  });
});

// RANDOM CARD

function randomize(){
  var cards = $(".col-md-4");
  for(var i = 0; i < cards.length; i++){
      var target = Math.floor(Math.random() * cards.length -1) + 1;
      var target2 = Math.floor(Math.random() * cards.length -1) +1;
      cards.eq(target).before(cards.eq(target2));
  }
}

// RANDOM QUOTE

const quotes = ["“I raise my voice not so that I can shout, but so that those without a voice can be heard” <br> Malala Yousafzai", "“We who engage in nonviolent direct action are not the creators of tension. We merely bring to the surface hidden tension that is already alive” <br> Martin Luther King Jr.", "“If you tremble with indignation at every injustice then you are a comrade of mine.” <br> Ernesto Che Guevara", "“Our problems stem from our acceptance of this filthy, rotten system.” <br> Dorothy Day", "“Once you realize that trickle-down economics does not work, you will see the excessive tax cuts for the rich as what they are -- a simple upward redistribution of income, rather than a way to make all of us richer, as we were told.” <br> Ha-Joon Chang", "“Genuine equality means not treating everyone the same, but attending equally to everyone’s different needs.” <br> Terry Eagleton", "“When asked if I am pessimistic or optimistic about the future, my answer is always the same: If you look at the science about what is happening on earth and aren’t pessimistic, you don’t understand data. But if you meet the people who are working to restore this earth and the lives of the poor, and you aren’t optimistic, you haven’t got a pulse. What I see everywhere in the world are ordinary people willing to confront despair, power, and incalculable odds in order to restore some semblance of grace, justice, and beauty to this world.” <br> Paul Hawken", "“Prisons do not disappear social problems, they disappear human beings. Homelessness, unemployment, drug addiction, mental illness, and illiteracy are only a few of the problems that disappear from public view when the human beings contending with them are relegated to cages.” <br> Angela Davis", "“The world howls for social justice, but when it comes to social responsibility, you sometimes can't even hear crickets chirping.” <br> Dean Koontz", "“People don't move into action because of statistics. They move because of their hearts. We're hardwired with empathy neurons, billions of them, and human beings are evolutionarily programmed to help one another.” <br> Rivera Sun", "“Social advance depends as much upon the process through which it is secured as upon the result itself.” <br> Jane Addams", '"First they came for the Jews and I did not speak out because I was not a Jew. <br> Then they came for the Communists and I did not speak out because I was not a Communist.<br> Then they came for the trade unionists and I did not speak out because I was not a trade unionist. <br> Then they came for me and there was no one left to speak out for me." <br> Martin Niemöller', '"Silence is Violence" <br> Anonymous', '"If you are neutral in situations of injustice, you have chosen the side of the oppressor. If an elephant has its foot on the tail of a mouse and you say that you are neutral, the mouse will not appreciate your neutrality." <br> Desmond Tutu', '“The world suffers a lot. Not because the violence of bad people. But because of the silence of the good people.” <br> Napoléon Bonaparte'];
const length = quotes.length;
var rand = Math.round(Math.random()*(length - 1));

function quoteGenerator() {
  document.getElementById("quoteGenerator").innerHTML = quotes[rand];
}

// COPY FUNCTION

function cardButtonShareLoader() {
  const URL = window.location.href;
  document.getElementById('card-button-copy').innerHTML = '<a onClick="copiedToClipboardCard()" class="btn btn-outline-secondary btn-lg btnClipboardJS" data-clipboard-text="' + URL + '" id="alertCard">Share This Card</a>'
}



function copiedToClipboard() {
  document.getElementById('alert').innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Copied!';
  setTimeout(function(){document.getElementById('alert').innerHTML = '<i class="fa fa-link" aria-hidden="true"></i> Copy URL';}, 5000);
}

function copiedToClipboardCard() {
  document.getElementById('alertCard').innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> URL Copied!';
  // function revertCopied() {
  //   document.getElementById('alert').innerHTML = '<i class="fa fa-link" aria-hidden="true"></i> Copy URL';
  // }
  setTimeout(function(){document.getElementById('alertCard').innerHTML = '<i class="fa fa-link" aria-hidden="true"></i> Copy URL Again';}, 5000);
}

// CONTENT LOADERS

function navLoader(){
$(function(){
  $("#nav-placeholder").load("nav.html");
});
}

function footerLoader(){
  $(function(){
    $("#footer-placeholder").load("footer.html");
  });
  }