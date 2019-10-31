$(document).ready(function() {

    $('.nav-links li').removeClass('current');
    $('.website-link').addClass('current');
    
    let $list = $('#website-list .container');
    const preUrl = 'https://anst9000.xyz/api/';
    let webUrl = preUrl + 'website/read.php';
    let output = `<ul class="website-list">`

    // Request options
    let options = {
      method: 'GET',
    }

    // Send GET request
    fetch(webUrl, options)
	.then(res => res.json())
	.then(res => {

      for (let i in res.records) {

	let webId = res.records[i].id
        let webTitle = res.records[i].title
        let webUrl = res.records[i].url
	let webLink = 'https://' + webUrl
        let webDescription = res.records[i].description

	    output += `
	    <li class="list-item">
	    
		<h2>${webTitle}</h2>		  
		<div class="card">

		    <div class="card-header">
			<h3>ID ${webId}<span>${webTitle}</span></h3>
		    </div>

		    <div class="card-body">
			<p>${webTitle}</p>
			<p>${webDescription}</p>
			<p>${webUrl}</p>
			<p><a href="${webLink}">${webTitle}</a></p>
		    </div>

		</div>

	    </li>
	    <hr>`
	}
    
	output += `</ul>`;

	$list.empty();
	$list.html(output);
	addClick();
    });
    
    function addClick() {
	$('.card').hide();   

	$('.list-item h2').click(function() {
	    let $card = $(this).next('.card');

	    if ($card.is(':hidden')) {
		$card.slideDown();
		$(this).addClass('close');
	    } else {
		$card.slideUp();
		$(this).removeClass('close');
	    }
	}); // end click
    }

});
