// get all albums

var photos = $.ajax({
    type: "GET",
    url: "https://picsum.photos/v2/list",
    async: false
}).responseText;

photos = JSON.parse(photos);

for (item in photos) {
	photo = photos[item];

	var card = '<div class="card bg-light">'
					+'<div class="card-img">'
						+'<img src="'+ photo.download_url +'" class="card-img-top">'
						+'<div class="card-img-hover">'
							+'<div class="text-light">'
								+'<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-suit-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'
									+'<path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>'
								+'</svg>'
								+ photo.id
							+'</div>'
						+'</div>'
					+'</div>'
					+'<div class="card-body">'
				    	+'<div class="card-text">'
				    		+'<img class="rounded-circle" src="https://api.adorable.io/avatars/285/'+ photo.width +'@hi.png"/>'
				    		+ photo.author
			    		+'</div>'
					+'</div>'
				+'</div>';

	var cardHtml = $(card);

	$("#albums").append( cardHtml );
}
