console.log('sourced!');
$(document).ready(function(){
  console.log('jquery was correctly sourced!');

  getFishData();

  function getFishData() {

    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response) {
        console.log('response', response);
        $('#fishTank').empty();
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>');
        }
      }
    });//end of ajax

    $.ajax({
      type: 'GET',
      url: '/fish/first/name',
      success: function(response) {
        console.log('response', response);
        $('#firstFishy').text(response);
      }
    });//end of ajax
  }//end of getFishData()

  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    $("#errorMessage").empty();
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response){
        getFishData();
      },
      error: function (errorMesage){
        $("#errorMessage").text("Please add a fish name");


      }//end of response
    });//end of ajax
  });//end of click function
});//end of doc.ready
