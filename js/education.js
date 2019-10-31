$(document).ready(function() {

    $('.nav-links li').removeClass('current');
    $('.education-link').addClass('current');
    
    let $list = $('#education-list .container');
    const preUrl = 'https://anst9000.xyz/api/';
    let eduUrl = preUrl + 'education/read.php';
    let output = `<ul class="edu-list">`

    // Request options
    let options = {
      method: 'GET',
    }

    // Send GET request
    fetch(eduUrl, options)
	.then(res => res.json())
	.then(res => {

	for (let i in res.records) {

	    let eduId = res.records[i].id
	    let eduSchool = res.records[i].school
	    let eduCourse = res.records[i].course
	    let eduStart = res.records[i].start_date
	    let eduEnd = res.records[i].end_date

	    output += `
	    <li class="list-item">
	    
		<h2>${eduSchool}</h2>		  
		<div class="card">

		    <div class="card-header">
			<h3>ID ${eduId}<span>${eduSchool}</span></h3>
		    </div>

		    <div class="card-body">
			<p>${eduCourse}</p>
			<p>Start: ${eduStart}</p>
			<p>Slut : ${eduEnd}</p>
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
