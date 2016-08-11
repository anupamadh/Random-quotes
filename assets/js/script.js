$(document).ready(function() {

  'use strict';

  var $loader = $(".loader");
  var $quoteSection = $("#quoteSection");
  var $quoteContainer = $("#quoteContainer");
  var $mainSection = $("#mainSection");
  var $anotherButton = $("#another-quote");

  var firstQuote = function() {
    $quoteSection.show();
    $('html, body').animate({
        scrollTop: $quoteSection.offset().top
    }, 1000, function() {
      $mainSection.hide();
    });
    loadQuote();
  };

  var loadQuote = function() {
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
            $quoteContainer.hide();
          }
        }).done(successFunction)
          .fail(failFunction);
    };


    //success function
    function successFunction(data, dataType, status) {
      $loader.hide();
      $quoteContainer.show();
      $("#text").text("\"" + data.quote + "\"");
      $("#author").text("From the movie " + data.author);
    };


    // fail function
    function failFunction(request, textStatus, errorThrown) {
        alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    };

    $("#new-quote").click(firstQuote);
    $("#another-quote").click(loadQuote);
  });
