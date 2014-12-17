(function() {
	var elheadings = document.getElementsByTagName('h2');
	var len = elheadings.length;
	var elsub_nav_content = [];
	for (var i = 0; i < len; i++) {
		var elheading = elheadings[i];
		elheading.id = elheading.textContent.toLowerCase().replace(/\W/g,'-');
		elsub_nav_content.push([
			'<li class="tile w-1-3 md-w-fill md-stack cs-',
				(i%2)+1, // alternate 1 and 2
				'"><a class="stack pad-h-md lg-pad-h-lg pad-v-sm" href="#',elheading.id,'">',
				elheading.textContent,
			'</a></li>'].join(''));
	}
	var elsub_nav = document.getElementsByClassName('js-sub-nav')[0];
	elsub_nav.innerHTML = elsub_nav_content.join('\n');
})();