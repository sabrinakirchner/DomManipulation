let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event)) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitleEl = document.getElementById('main-title');
  mainTitleEl.textContent = " ";
  

  // Part 2
const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = 'blue'

  // Part 3
  const favoriteThingsList = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  lastListItem.remove();

  // Part 4
const specialTitles = document.querySelectorAll('.special-title');
specialTitlesElements.forEach(element =>{
  element.style.fontSize ='2rem'; 
});

  // Part 5
const pastRacesList = document.getElementById('#past-races');
const chicagoListItem = pastRacesList.querySelector('li');
chicagoListRace.remove(); 
}

  // Part 6
const newCity = 'Miami';
const newLi = document.createElement('li');
newLi.textContent = newCity;
pastRacesList.appendChild(newLi);

// part 7 
const blogPostContainer = document.querySelector('.blog-posts');
const newBlogPost =document.createElement('div');
newBlogPost.classList.add('blog-post')
const newHeading = document.createElement('h2');
newHeading.textContent = newCity;
const newParagraph = document.createElement('p') 
newParagraph.appendChild(newHeading);
newBlogPost.appendChild(newParagraph);
blogPostContainer.appendChild(newBlogPost); 
// Part 8
const quoteTitleEL = document.querySelector('#quote-title');
quoteTitleEL.addEventListoner('click', randomQuote);

// Part 9
const blogPost = document.querySelectorAll('.blog-post');
blogPost.forEach(post => {
  post.addEventListener('mouseout',function(){
    this.classList.toggle('blue');
  });
  post.addEventListener('mouseenter', function(){
    this.classList.toggle('red');
  });
});
