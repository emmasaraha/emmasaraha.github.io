var randomlinks = [];
randomlinks[0]="/meme-articles/meme-article-1.html";
randomlinks[1]="/index.html";
randomlinks[2]="/index.html";
randomlinks[3]="/index.html";
randomlinks[4]="/meme-articles/meme-article-1.html";
randomlinks[5]="/index.html";
randomlinks[6]="/meme-articles/meme-article-1.html";
randomlinks[7]="/index.html";
randomlinks[8]="/index.html";
randomlinks[9]="/index.html";
randomlinks[10]="/meme-articles/meme-article-1.html";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}