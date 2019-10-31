$(document).ready(function() {
    
    $('.nav-links li').removeClass('current');
    $('.job-link').addClass('current');
    
    let $list = $('#job-list .container');
    const preUrl = 'https://anst9000.xyz/api/';
    let jobUrl = preUrl + 'job/read.php';
    let output = `<ul class="job-list">`

    // Request options
    let options = {
      method: 'GET',
    }

    // Send GET request
    fetch(jobUrl, options)
	.then(res => res.json())
	.then(res => {

      for (let i in res.records) {
	  
        let jobId = res.records[i].id
        let jobCompany = res.records[i].company
        let jobTitle = res.records[i].title
        let jobStart = res.records[i].start_date
        let jobEnd = res.records[i].end_date

	    output += `
	    <li class="list-item">

		<h2>${jobCompany}</h2>
		<div class="card">

		    <div class="card-header">
			<h3>ID ${jobId}<span>${jobCompany}</span></h3>
		    </div>

		    <div class="card-body">
			<p>${jobTitle}</p>
			<p>Start: ${jobStart}</p>
			<p>Slut : ${jobEnd}</p>
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
