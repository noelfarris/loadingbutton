'use strict';
var submit = $('button');

function loading() {
	$(submit).html('Loading...');
	setTimeout(function() {$(submit).html('Submit')}, 2000);
}

$(submit).click(loading);