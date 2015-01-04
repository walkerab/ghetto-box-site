(function() {
	var el_sidebar = document.getElementById('sidebar');
	var top;

	var determineTopAndWidth = function() {
		el_sidebar.classList.remove('js-sticky-sidebar');
		el_sidebar.style.width = null;
		var original_width = window.getComputedStyle(el_sidebar).width;
		el_sidebar.style.width = original_width;
		var jump_menu_rect = el_sidebar.getBoundingClientRect();
		var body_rect = document.body.getBoundingClientRect();
		top = jump_menu_rect.top - body_rect.top - 52;
		onscroll();
	};

	// Assuming that any custom fonts will have loaded
	// within half a second. This is an unreliable way
	// of doing it, but since this is not an important
	// feature, it's not a big deal if it breaks.
	// The only difference is that the sidebar may
	// "stick" a little earlier than intended.
	setTimeout(determineTopAndWidth, 500);

	window.addEventListener('resize', determineTopAndWidth);

	var onscroll = function(e) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= top) {
			el_sidebar.classList.add('js-sticky-sidebar');
		} else
		if (scrollTop < top) {
			el_sidebar.classList.remove('js-sticky-sidebar');		
		}
	};
	window.addEventListener('scroll', onscroll);
})();