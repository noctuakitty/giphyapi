var gifs = ["earth", "mars", "jupiter", "saturn", "mercury", "venus", "neptune", "uranus", "pluto"];

$(document).on("click", ".btn btn-secondary btn-lg", displayGIFInfo);

function displayGIFInfo() {
    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Wpqlo4Ez5UTppNABHdFvBYO6eCXGyhQr&tag=" + gif + "&rating=PG"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (q) {
        console.log(q)
        var gifDiv = $("<div class='gif'>");

        var rating = q.rating;

        var pOne = $("<p>").text("Rating: " + rating);

        gifDiv.append(pOne);

        var imgURL = q.url; 

        var pTwo = $("<p>").text("URL: " + url);

        gifDiv.append(pTwo);

        var image = $("<img>").attr("src", imgURL);

        gifDiv.append(image);

        $("#gif-view").prepend(gifDiv);
    });

};

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < gifs.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-secondary btn-lg");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var giphy = $("#gif-input").val().trim();
    gifs.push(giphy);
    renderButtons();
});



renderButtons();