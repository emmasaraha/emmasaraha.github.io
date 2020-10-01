var randomlinks = [];
randomlinks[0]="/meme-articles/meme-article-1.html";
randomlinks[1]="/meme-articles/meme-article-2.html";
randomlinks[2]="/meme-articles/meme-article-3.html";
randomlinks[3]="/meme-articles/meme-article-2.html";
randomlinks[4]="/meme-articles/meme-article-1.html";
randomlinks[5]="/meme-articles/meme-article-3.html";
randomlinks[6]="/meme-articles/meme-article-1.html";
randomlinks[7]="/meme-articles/meme-article-2.html";
randomlinks[8]="/meme-articles/meme-article-3.html";
randomlinks[9]="/meme-articles/meme-article-2.html";
randomlinks[10]="/meme-articles/meme-article-1.html";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}