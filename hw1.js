

   var gif = [];

     
      function displayGifs() {

        var animation = $(this).attr("makeGif");

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animation + "&api_key=dc6zaTOxFJmzC&limit=10";

      
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        
        .done(function(response) {
        
          var results = response.data;

        
          for (var i = 0; i < results.length; i++) {

       
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              
              var gifDiv = $("<div class='item'>");

              var rating = results[i].rating;

              
              var p = $("<p>").text("Rating: " + rating);

              var gifpic = results[i].url;
              var gifImage = $("<img>");

              //<gifImage  data-animate="http://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
            
             gifImage.attr("src", results[i].images.fixed_height.url);
           
           // if(state === "still"){
           //   gifImage.attr("src", gifImage.attr("data-animate"));
           //   gifImage.attr("data-state", "animate");
           //  }
           //   else{
           //    gifImage.attr("src", gifImage.attr("data-still"));
           //    gifImage.attr("data-state", "still");
           //   }        

              gifDiv.append(p);
              gifDiv.append(gifImage);
                    
              $("#animals-view").append(gifDiv);

            }

          }

        });
    
       $("#animals-view").empty();
      }

      function renderButtons() {

        $("#animal-view").empty();

       
        for (var i = 0; i < gif.length; i++) {

          var a = $("<button>");
         
          a.addClass("itsAgif");
         
          a.attr("makeGif", gif[i]);
    
          a.text(gif[i]);
     
          $("#animal-view").append(a);
        }
      }


      $("#add-animal").on("click", function(event) {
        event.preventDefault();
        
        var gifs = $("#animal-input").val().trim();

        gif.push(gifs);


        renderButtons();
      });


      $("#animal-view").on("click", ".itsAgif", displayGifs);


      renderButtons();