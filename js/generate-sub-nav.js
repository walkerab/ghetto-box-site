(function() {
	var elheadings = document.getElementsByTagName('h2');
	var len = elheadings.length;
	var elsub_navs_content = [];
	for (var i = 0; i < len; i++) {
		var elheading = elheadings[i];
		elheading.id = elheading.textContent.toLowerCase().replace(' ','-');
		elsub_navs_content.push(
			'<li class="tile md-stack cs-',
				(i%2)+1, // alternate 1 and 2
				'"><a class="stack pad-h-md lg-pad-h-lg pad-v-sm" href="#',elheading.id,'">',
				elheading.textContent,
			'</a></li>');
	}
	var elsub_navs = document.getElementsByClassName('js-sub-nav');
	len = elsub_navs.length;
	elsub_navs_content = elsub_navs_content.join('');
	for (var i = 0; i < len; i++) {
		elsub_navs[i].innerHTML = elsub_navs_content;
	}
})();