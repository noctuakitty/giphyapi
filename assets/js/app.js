var gifs = ['earth', 'mars', 'jupiter', 'saturn', 'mercury', 'venus', 'neptune', 'uranus', 'pluto'];

function displayGIFInfo() {
	//JOE ADD - TINKERED WITH THE CALL
	var limit = 10;
	var gif = $(this).attr('data-name');
	let queryURL = `https://api.giphy.com/v1/gifs/search?q=${gif}&limit=${limit}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9`;

	// var queryURL =
	// 	'https://api.giphy.com/v1/gifs/search?=' + gif + '&rating=PG&api_key=Wpqlo4Ez5UTppNABHdFvBYO6eCXGyhQr&tag';

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function(q) {
		//JOE ADD
		let results = q.data;
		console.log(results);

		for (let i = 0; i < results.length; i++) {
			var gifDiv = $("<div class='gif'>");

			var rating = results[i].rating;

			var pOne = $("<p>").text("Rating: " + rating);

			gifDiv.append(pOne);

			var imgURL = results[i].url;

			var pTwo = $("<p>").text("URL: " + imgURL);

			gifDiv.append(pTwo);

            var image = $("<img class= 'image'>").attr('src', results[i].images.fixed_height_small_still.url);
            image.attr("still-image-state",  results[i].images.fixed_height_small_still.url);
            image.attr("moving-image-state", results[i].images.fixed_height_small.url);
            
			gifDiv.append(image);
			//JOE NOTE - YOUR DIV ON HTML IS A CLASS, NOT AN ID
            $(".gif-view").prepend(gifDiv);
            
            
            
        }

    });
    
}

function renderButtons() {
	$('#buttons-view').empty();

	for (var i = 0; i < gifs.length; i++) {
		var a = $('<button>');
		a.addClass('btn btn-secondary btn-lg');
		a.attr('data-name', gifs[i]);
		a.text(gifs[i]);
		$('#buttons-view').append(a);
	}
	//I MOVED YOUR CLICK HANDLER HERE SO THEY WOULD ACTUALLY SEE RENDERED BUTTONS
	$('.btn').click(displayGIFInfo);
}

$('#add-gif').on('click', function(event) {
	event.preventDefault();
	var giphy = $('#gif-input')
		.val()
		.trim();
	gifs.push(giphy);
	renderButtons();
});

$(document).on("click", ".image", displayGIFInfo);
    $(this).attr("moving-image-state");

renderButtons();