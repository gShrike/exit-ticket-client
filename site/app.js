document.body.onload = getData;

const QUESTIONS_URL = 'https://exit-ticketer.herokuapp.com/v1/api/questions';

var orderedList = document.getElementsByTagName('ol');
var listItem = document.createElement('li');

function getData() {
  fetch(QUESTIONS_URL)
    .then(function(response) {
      return response.json()
    })
    .then(function(questions) {
      // for (var i = 0; i < questions.length; i++) {
      //   listItem.innerHTML = questions[i].question_text
      //   orderedList[0].appendChild(listItem)
      // }
    })
};
