$(document).ready(function() {

  'use strict';

  var $loader = $(".loader");
  var $quote = $("#quote-container");
  var $anotherButton = $("#another-button")

  $(".new-quote").click(function() {
      $.ajax({
          // where the data live
          url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
          headers: {
            'X-Mashape-Key': 'it4o1uG5pxmshtMBdkNgvx66OWJYp1pdLGxjsndxwVOLShk5Oe',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          type: 'POST',
          data: {cat: 'movies'},
          dataType: 'json',
          beforeSend: function(xhr) {
            $loader.show();
            $quote.show();
            $anotherButton.hide();
            $('html, body').animate({
                scrollTop: $quote.offset().top
            }, 1000);
          }
        }).done(successFunction)
          .fail(failFunction);
    });


    //success function
    function successFunction(data, dataType, status) {
      $("#text").text(data.quote);
      $("#author").text(data.author);
      $loader.hide();
      $anotherButton.show();
    };


    // fail function
    function failFunction(request, textStatus, errorThrown) {
        alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    };
  });
