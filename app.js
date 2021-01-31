let userName = prompt('what is your name?');
alert('hello ' + (userName) + ' welcome to my page');
function food(){ 
let quetionOne = prompt('Do you like salmon');
if (quetionOne === 'yes'){
  alert('Good choice salmon is delicious');
} else{
  alert('You should try it!');
}

}
food();


function imagesOnScreen(){
  userAnswer = prompt('How many dinners would you like?!');
  for (let i = 0; i < userAnswer;i++){
      document.write('<img src="img/dinner.jpg">')
  }
}
imagesOnScreen();

