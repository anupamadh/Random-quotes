$(function() {

    'use strict';

    $("#new-quote").click(function() {
        $.ajax({
            // where the data live
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            headers: {
              'X-Mashape-Key': 'it4o1uG5pxmshtMBdkNgvx66OWJYp1pdLGxjsndxwVOLShk5Oe',
              // 'Accept': 'text/plain'
            },
            type: 'POST',
            data: {cat: 'movies'},
            dataType: 'json',
            beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "it4o1uG5pxmshtMBdkNgvx66OWJYp1pdLGxjsndxwVOLShk5Oe");
            }
          }).done(successFunction)
            .fail(failFunction);
      });


      //success function
      function successFunction(data, dataType, status) {
        $("#text").text(data.quote);
        $("#author").text(data.author);
      };


      // fail function
      function failFunction(request, textStatus, errorThrown) {
          alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      };
    });
