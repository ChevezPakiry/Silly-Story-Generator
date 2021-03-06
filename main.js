var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}



var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. After getting to :inserty:, he stared in awe for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a chilled evening.';

var insertX = ["Mr Shorty", "Aaron Mwaniki", "Alhaji Micheal", "Boda Dayo"];

var insertY = ["white house", "a night club at Osu", "Aso Rock", "A and C Mall"];

var insertZ = ["just saw big money","spontaneously jumped", "flew away", "was whisked off in a car"];

randomize.addEventListener('click', result);

function result() {
 
	var newStory = storyText;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	  newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {

    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature); 
    newStory = newStory.replace('300 pounds', weight);  

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}