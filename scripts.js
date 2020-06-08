//Need a form with text fields on the webpage

//Write js/jquery code to gather the input of the form fields

// put the form input into a sinlge array

// use square bracket notation to access second, first and third elements of the original array
// and use push to add these elements to a new array

//display new array in your page as list items in a ul tag

$(document).ready(function() {
  $('form#fav-things').submit(function(event) {
    event.preventDefault();
    const answer1 = $('#fav-thing1').val();
    const answer2 = $('#fav-thing2').val();
    const answer3 = $('#fav-thing3').val();
    const answer4 = $('#fav-thing4').val();
    const answer5 = $('#fav-thing5').val();
    const originalArray = [];
    const modifiedArray = [];

    originalArray.push(answer1, answer2, answer3, answer4, answer5);

    modifiedArray.push(originalArray[1], originalArray[0], originalArray[2])

    $('#original-answers').append(`<li>${originalArray[0]}</li>`)
    $('#original-answers').append(`<li>${originalArray[1]}</li>`)
    $('#original-answers').append(`<li>${originalArray[2]}</li>`)
    $('#original-answers').append(`<li>${originalArray[3]}</li>`)
    $('#original-answers').append(`<li>${originalArray[4]}</li>`)

    modifiedArray.forEach((answer) => {
      $('#modified-answers').append(`<li>${answer}</li>`)
    })
  })
})