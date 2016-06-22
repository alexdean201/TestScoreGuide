//
//
//

	var gradeRanges = {
		"ela3" : [
			{ "range": "not-met",    "text": "2114-2366" },
			{ "range": "nearly-met", "text": "2367-2431" },
			{ "range": "met",        "text": "2432-2489" },
			{ "range": "exceeded",   "text": "2490-2623" }
		],
		"math3" : [
			{ "range": "not-met",    "text": "2189-2380" },
			{ "range": "nearly-met", "text": "2381-2435" },
			{ "range": "met",        "text": "2436-2500" },
			{ "range": "exceeded",   "text": "2501-2621" }
		],
		"ela4" : [
			{ "range": "not-met",    "text": "2131-2415" },
			{ "range": "nearly-met", "text": "2416-2472" },
			{ "range": "met",        "text": "2473-2532" },
			{ "range": "exceeded",   "text": "2533-2663" }
		],
		"math4" : [
			{ "range": "not-met",    "text": "2204-2410" },
			{ "range": "nearly-met", "text": "2411-2484" },
			{ "range": "met",        "text": "2485-2548" },
			{ "range": "exceeded",   "text": "2549-2659" }
		],
		"ela5" : [
			{ "range": "not-met",    "text": "2201-2441" },
			{ "range": "nearly-met", "text": "2442-2501" },
			{ "range": "met",        "text": "2502-2581" },
			{ "range": "exceeded",   "text": "2582-2701" }
		],
		"math5" : [
			{ "range": "not-met",    "text": "2219-2454" },
			{ "range": "nearly-met", "text": "2455-2527" },
			{ "range": "met",        "text": "2528-2578" },
			{ "range": "exceeded",   "text": "2579-2700" }
		],
		"ela6" : [
			{ "range": "not-met",    "text": "2210-2456" },
			{ "range": "nearly-met", "text": "2457-2530" },
			{ "range": "met",        "text": "2531-2617" },
			{ "range": "exceeded",   "text": "2618-2724" }
		],
		"math6" : [
			{ "range": "not-met",    "text": "2235-2472" },
			{ "range": "nearly-met", "text": "2473-2551" },
			{ "range": "met",        "text": "2552-2609" },
			{ "range": "exceeded",   "text": "2610-2748" }
		],
		"ela7" : [
			{ "range": "not-met",    "text": "2258-2478" },
			{ "range": "nearly-met", "text": "2479-2551" },
			{ "range": "met",        "text": "2552-2648" },
			{ "range": "exceeded",   "text": "2649-2745" }
		],
		"math7" : [
			{ "range": "not-met",    "text": "2250-2483" },
			{ "range": "nearly-met", "text": "2484-2566" },
			{ "range": "met",        "text": "2567-2634" },
			{ "range": "exceeded",   "text": "2635-2778" }
		],
		"ela8" : [
			{ "range": "not-met",    "text": "2288-2486" },
			{ "range": "nearly-met", "text": "2487-2566" },
			{ "range": "met",        "text": "2567-2667" },
			{ "range": "exceeded",   "text": "2668-2769" }
		],
		"math8" : [
			{ "range": "not-met",    "text": "2265-2503" },
			{ "range": "nearly-met", "text": "2504-2585" },
			{ "range": "met",        "text": "2586-2652" },
			{ "range": "exceeded",   "text": "2653-2802" }
		],
		"ela11" : [
			{ "range": "not-met",    "text": "2299-2492" },
			{ "range": "nearly-met", "text": "2493-2582" },
			{ "range": "met",        "text": "2583-2681" },
			{ "range": "exceeded",   "text": "2682-2795" }
		],
		"math11" : [
			{ "range": "not-met",    "text": "2280-2542" },
			{ "range": "nearly-met", "text": "2543-2627" },
			{ "range": "met",        "text": "2628-2717" },
			{ "range": "exceeded",   "text": "2718-2862" }
		]
	};
	
function updateSubjects(g) {
	
	// the first subject option is always the same
	var subjectOptions = '<option value="-1" aria-hidden="true">Select subject </option>';
	
	if( g == "-1" ) {
		// reset the subject dropdown if the grade resets
		subjectOptions += '<option value="-1" aria-hidden="true">First select a grade</option>';
	} else {
		// update the subject dropdown
		// with the available subjects
		subjectOptions += '<option value="ela">English language arts/literacy</option>';
		subjectOptions += '<option value="math">Mathematics</option>';				
	}
	// update the dom with the correct list of subjects
	$('select#subject').html(subjectOptions);	
		
} // end updateSubjects

function updateRanges(g,s) {
	var selectedGrade = g;
	var selectedSubject = s;
	var rangeName = selectedSubject + selectedGrade;
	
	// the firt 'subject' is always the same
	var rangeOptions = '<option value="-1" aria-hidden="true">Select score range</option>';
	if( selectedSubject == "-1" ) {
		// reset the range dropdown
		// if the user reset the subject, reset the ranges
		rangeOptions += '<option value="-1" aria-hidden="true">First select a subject</option>';
	} else {
		// update the subject dropdown
		// loop through the range options
		// for( var ii  = 0; ii < gradeRanges[rangeName].length; ii++ ){ // not-met to exceeded
		for( var ii = gradeRanges[rangeName].length-1; ii >= 0 ; ii-- ){    // exceeded to not-met
		
			// console.log(ii);
			
			var t = gradeRanges[rangeName][ii].text;
			var r = gradeRanges[rangeName][ii].range;
			
			switch (r) {
				case 'not-met':
					// t = 'Standard Not Met (Level 1): ' + t;
					t = 'Standard Not Met: ' + t;
					break;

				case 'nearly-met':
					// t = 'Standard Nearly Met (Level 2): ' + t;
					t = 'Standard Nearly Met: ' + t;
					break;

				case 'met':
					// t = 'Standard Met (Level 3): ' + t;
					t = 'Standard Met: ' + t;
					break;

				case 'exceeded':
					// t = 'Standard Exceeded (Level 4): ' + t;
					t = 'Standard Exceeded: ' + t;
					break;
					
				default:
					break;
			}
			
			rangeOptions += "<option value='" + r + "'>" + t + "</option>";
		}				
	}
	// update the dom with the correct ranges
	$('select#range').html(rangeOptions);
	
} // end updateRanges
	
function disableGetScores() {
	$('#get-scores').attr({'disabled':'disabled'});	
} // end disableGetScores

function enableGetScores() {
	$('#get-scores').removeAttr('disabled');
} // end enableGetScores


$(function(){
	
	// console.log('scores');
	
	// disable the 'get-scores' button until the grade, subject and range have been selected
	disableGetScores();
	
	// handle the grade-subject-range dropdowns
	//
	$('select#grade').on('change',function(){
		updateSubjects($('#grade option:selected').val());
		updateRanges('-1','-1');
		disableGetScores();
	});

	$('select#subject').on('change',function(){
		updateRanges($('#grade option:selected').val(),$('#subject option:selected').val());
		disableGetScores();
	});
	
	// try and select the current grade+subject on a scores pages
	// the currentpage hidden attribute may contain the information we're looking for
	//
	currentpageinfo = $('#currentpageinfo').val();
	if( currentpageinfo ) {
		grade = currentpageinfo.match(/\d+/);
		subject = currentpageinfo.match(/math|ela/);
		
		$('#grade').val(grade);
		updateSubjects($('#grade option:selected').val());
		$('#subject').val(subject);
		updateRanges($('#grade option:selected').val(),$('#subject option:selected').val());
		$('#range').val($.parseQuery().range);
		
	} else {
		// console.log('no match');
	}	
	
	$('#range').on('change',function(){
		( $(this).val() == "-1" ) ? disableGetScores() : enableGetScores();
	});
	
	$('#get-scores').on('click',function(e){
		e.preventDefault;
 
		baseUrl = $('input[type="hidden"][name="baseUrl"]').val();
		go = false;
		errMsg = "";
		scoreFor = "";
		grade = $('#grade').val();
		subject = $('#subject').val();
		range = $('#range').val();
				
		if( grade == '3' || grade == '4' || grade == '5' || grade == '6' || grade == '7' || grade == '8' || grade == '11' ){
			if( subject == 'ela' || subject == 'math' ) {
				if( range == 'exceeded' || range == 'met' || range == 'nearly-met' || range == 'not-met' ){
					go = true;					
					// console.log('ok');
					scoreFor = 'grade'+ grade + subject+'.html?range='+range;
				} else {
					go = false;
					errMsg = "Select the score range for your student's score";
				}
			} else {
				go = false;
				errMsg = "Select your student's subject";
			}
		} else {
			go = false;
			errMsg = "Select your student's grade";
		}
		
		if( go ){
			// console.log('get-scores: '+ scoreFor);
			// console.log('base '+baseUrl);
			location.href = baseUrl + "/scores/" + scoreFor;
		} else {
			//console.log('get-scores: false: '+ errMsg);
			// should we do anything with this error?
		}
	});

	// handle the expand-collapse sections
	//
	$accordions = $('div.accordion');
	$accordions.each(function(){
		var $accordion = $(this),
		    $trigger = $accordion.find('h3:first'),
			bellowsId = 'expand-'+ $trigger.attr('id').substr(5);

		$trigger.detach();
		
		$accordion.wrapInner('<div class="bellows" id="'+ bellowsId +'" />');
		// $accordion.prepend($trigger.prepend('<svg class="icon icon-menu-staus"><use xlink:href="#icon-menu-closed"></use></svg>'));
		$accordion.prepend($trigger.prepend('<span class="status-open-close closed">+</span>'));
		
		var $content = $accordion.find('.bellows');
		
		$trigger
			.attr({
				'tabindex': '0',
				'role': 'button',
				'aria-controls': bellowsId,
				'aria-label': 'expand description for standard ' + bellowsId.substr(7).replace('-',' '),
				'aria-expanded': 'false'
			})			
			.on('click',function(){
				var contentWasVisible = $content.is(':visible');				
				$content.slideToggle({
					duration: 200,
					complete: function(anime,progr,remain){
						// update the trigger depending on the state of the bellows
						if( contentWasVisible ) {
							// bellows NOT visible
							$trigger.attr({'aria-expanded':'false'})
							//
							// this doesn't work in IE
							//
							// $trigger
							// 	.find('svg')
							// 		.html('<use xlink:href="#icon-menu-closed"></use>');
							//
							// i <3 ie 
							// https://github.com/jquery/sizzle/issues/322
							//
							// hack here
							
							// $trigger.find('svg').remove();
							// $trigger.prepend('<svg class="icon icon-menu-staus"><use xlink:href="#icon-menu-closed" /></svg>');
							
						} else {
							// bellows visible
							$trigger.attr({'aria-expanded':'true'})
							// $trigger
							//	.find('svg')
							//		.toggleClass('foo')
							//		.html('<use xlink:href="#icon-menu-open"></use>');	

							// $trigger.find('svg').remove();
							// $trigger.prepend('<svg class="icon icon-menu-staus"><use xlink:href="#icon-menu-open" /></svg>');

						}
					}
				});
			})
			.on('keydown',function(e){
				if( e.keyCode == 13 || e.keyCode == 32 ) { // enter or space
					var contentWasVisible = $content.is(':visible');
					$content.slideToggle({
						duration: 200,
						complete: function(anime,progr,remain){
							// update the trigger depending on the state of the bellows
							if( contentWasVisible ) {
								// bellows NOT visible
								$trigger.attr({'aria-expanded':'false'})
								// $trigger
								// 	.find('svg')
								// 		.html('<use xlink:href="#icon-menu-closed"></use>');	
								
								// $trigger.find('svg').remove();
								// $trigger.prepend('<svg class="icon icon-menu-staus"><use xlink:href="#icon-menu-closed" /></svg>');
								
							} else {
								// bellows visible
								$trigger.attr({'aria-expanded':'true'})
								// $trigger
								// 	.find('svg')
								// 		.html('<use xlink:href="#icon-menu-open"></use>');	
								
								// $trigger.find('svg').remove();
								// $trigger.prepend('<svg class="icon icon-menu-staus"><use xlink:href="#icon-menu-open" /></svg>');
							
							}
						}
					});
				}
			})
			;	
	}); // end accordions.each
	
	// handle the standard-by-claim buttons
	//
	$('.by-claim .triggers a').on('click',function(e){
		e.preventDefault();
		// console.log('by-claim .triger click ' + $(this).attr('id').substr(8) );
	
		$(this).parents('.triggers').find('a').removeClass('on'); // remove all the trigger highlights
		$(this).parents('.standards').find('.std').removeClass('on'); // hide all the standards
		$(this).addClass('on'); // highlight the selected trigger
		$('#'+$(this).attr('id').substr(8)).addClass('on'); // show the selected standard
		
	});
	
	// $('.by-claim .triggers a[id$="above"]').click();
	$('.by-claim .triggers').after('<div class="std on text-italic">Select student’s claim (area) level on the left</div>');
	
	// if a range has been selected, open that range accordion
	var qString = $.parseQuery();
	var r = qString.range;
	if( $('#desc-'+r).exists() ) {
		$('#desc-'+r).click();
	}
	
	
	
	
	
	
}); // end document.ready

// fin