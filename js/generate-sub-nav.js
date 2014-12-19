(function() {
	var elheadings = document.getElementsByTagName('h2');
	var len = elheadings.length;
	var elsub_nav_content = [];
	for (var i = 0; i < len; i++) {
		var elheading = elheadings[i];
		elheading.id = elheading.textContent.toLowerCase().replace(/\W/g,'-');
		elsub_nav_content.push([
			'<li class="table-cell w-1-3 md-w-fill md-stack cs-',
				(i%2)+1, // alternate 1 and 2
				'"><a class="stack pad-h-md lg-pad-h-lg pad-v-sm fs-sm sm-fs-md hover-arrow" href="#',elheading.id,'">',
				elheading.textContent,
			'</a></li>'].join(''));
	}
	var rows = [];
	for (var i = 0; i < elsub_nav_content.length; i+=3) {
		rows.push('<div class="table-row md-stack">' + elsub_nav_content.slice(i,i+3).join('') + '</div>');
	}
	var elsub_nav = document.getElementsByClassName('js-sub-nav')[0];
	elsub_nav.innerHTML = rows.join('\n');

	if (rows.length % 2 === 0) {
		elsub_nav.classList.add('cs-2');
	} else {
		elsub_nav.classList.add('cs-1');
	}
})();