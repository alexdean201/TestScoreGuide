//
//
//

$(function(){
	
	// Go!
	$('html').removeClass('no-js').addClass('js');

	// detects IE
	var isIE = detectIE();
	if( isIE ) {
		$('html').addClass('ie').addClass('ie'+isIE);
	}
	// console.log( '-isIE: '+ isIE );

	// detech OSX
	var isOSX = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
	if( isOSX ) { $('html').addClass('osx'); }
	// console.log( '-isOSX: '+ isOSX );

	// detect flash
	var hasFlash = false;
	try {
		var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if(fo) { hasFlash = true; }
	}catch(e){
		if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) { hasFlash = true; }
	}
	$('html').addClass('hasFlash');
	// console.log( '-hasFlash: '+hasFlash );

	var isMoz = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	if( isMoz ) {
		$('html').addClass('moz');
	}
	
	// buttons that are really just links
	// <button type="button" link="URL">text</button>
	//
	$('button[data-link]').click(function(){
		window.location.href = $(this).data('link');
	});
	
	// pdfs need to open in a new window
	$('a[href$=".pdf"]').each(function(){
		$(this).attr('title','This link opens in a new window').attr('target','_blank');
	}); // end: .pdf-each
	// pdfs need to open in a new window	
	
	// hrefs to NOT THIS SITE need to open in an new window
		// first find all the http|https links and tag them with a class
		$('a[href*="http://"]:not([href*="'+ location.hostname +'"]),a[href*="https://"]:not([href*="'+ location.hostname +'"])')
			.addClass('external')
			;

		// could filter the class='external' links some more if needed

		// and now deal with all the class=external links
		$('a.external')
			.attr('target','_blank')
			.attr('title', 'this link opens in a new window')
		;
	// hrefs to NOT THIS SITE need to open in an new window
	
	$('.link-img').magnificPopup({type:'image'});				
		
	$('#navbar-btn').attr({
		'role': 'button',
		'aria-controls': 'nav',
		'aria-label': 'search form',
		'aria-expanded': 'false'
	}).on('click',function(e){
		// console.log('language trigger: click');
		e.preventDefault();

		toggleNav('navbar-btn','nav-rwd', false);

	});
	
	
	
}); // end document.ready

jQuery(function(t) {
    function n() {
        return t(".navbar-wrap").offset().top;
    }
    var a = t("body"),
        e = t(".navbar");
    if (a.hasClass("navbar-fixed-top-active") && e.length > 0) {
        t(window).scroll(function() {
            t(this).scrollTop() >= n() ? e.addClass("navbar-fixed-top") : e.removeClass("navbar-fixed-top");
        })
    }
})

function toggleNav( trigger, nav ){

	var	$trigger = $('#'+trigger), 
		$menu = $('#'+ nav ), // the menu below the trigger
		menuVisible = !($menu.is(":visible")); // is the menu visible?

	console.log('toggleNav');
	console.log('menuVisible ' + menuVisible);
		
	$menu.slideToggle({ // open or close the menu (majestically)
		duration: 200,
		complete: function(anime,progr,remain){
	
			console.log('toggleNav complete');

			if( menuVisible ) {
				// console.log('menu is visible');
				$trigger.attr({'aria-expanded':'true'});
			} else {
				// console.log('menu is hidden')
				$trigger.attr({'aria-expanded':'false'});
			}
		}
	});  

	
	
} // end toggleNav

 
jQuery.fn.exists = function(){ return this.length > 0; }

String.prototype.splice = function( idx, rem, s ) {
	return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
	
} // end detectIE()

/**
 * Copyright (c) 2008 Michael Manning (http://actingthemaggot.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/
jQuery.parseQuery = function(qs,options) {
	var q = (typeof qs === 'string'?qs:window.location.search), o = {'f':function(v){return unescape(v).replace(/\+/g,' ');}}, options = (typeof qs === 'object' && typeof options === 'undefined')?qs:options, o = jQuery.extend({}, o, options), params = {};
	jQuery.each(q.match(/^\??(.*)$/)[1].split('&'),function(i,p){
		p = p.split('=');
		p[1] = o.f(p[1]);
		params[p[0]] = params[p[0]]?((params[p[0]] instanceof Array)?(params[p[0]].push(p[1]),params[p[0]]):[params[p[0]],p[1]]):p[1];
	});
	return params;
}

/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f[0].replace(u,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t&&t(m,l)||m.replace(u,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n()});


// [[ fin ]]




