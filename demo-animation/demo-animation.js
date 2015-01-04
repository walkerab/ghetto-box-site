(function() {
	var el_source = document.getElementById('source');
	var el_result = document.getElementById('result');
	var el_animation_controls = document.getElementById('animation-controls');

	var openAnimation = function(filename) {
		var resolver = function(resolve) {
			var request = new XMLHttpRequest();
			var parser = new DOMParser();
			request.onload = function() {
				var response_doc = parser.parseFromString(request.responseText, 'text/html');
				resolve(response_doc.getElementsByClassName('animation-frame'));
			};
			request.open('get',filename);
			request.send();
		};
		return new Promise(resolver);
	};

	var highlightString = function(str) {
		return '<ins>'+str+'</ins>';
	};

	var highlightDifferences = function(html) {
		// First line is empty so we slice it off.
		var lines = html.split('\n').slice(1);
		var result = [];
		var regex_matcher = /<span class="token comment" spellcheck="true">&lt;!-- \/(.*)\/ --><\/span>$/;
		lines.forEach(function(line) {
			var match = regex_matcher.exec(line);
			if (match !== null) {
				var regex_str = match[1];
				var regex = new RegExp(regex_str);
				result.push(line.substr(0,line.length-match[0].length).replace(regex,highlightString));
			} else {
				result.push(line);
			}
		});
		result = result.map(function(line) {
			// Remove some indentation.
			return line.substr(1);
		});
		return result.join('\n');
	};

	var context = {
		logo_src: '../examples/images/logo.svg',
		links: [
			{
				title: 'Home',
				href: '#'
			},
			{
				title: 'Examples',
				href: '#'
			},
			{
				title: 'Whatever',
				href: '#'
			}
		]
	};

	var showFrame = function(frame) {
		var highlighted_text = highlightDifferences(Prism.highlight(
			frame.innerHTML,
			Prism.languages.markup
		));
		el_source.innerHTML = highlighted_text;
		var template = Handlebars.compile(frame.innerHTML);
		el_result.innerHTML = template(context)+'<div class="commentary">'+frame.getAttribute('data-title')+'</div>';
	};

	var hideFrame = function(frame) {

	};

	var renderAnimationControls = function(frames, current_frame_index) {
		var animationControlClicked = function(frame, index) {
			pauseAnimation();
			showFrame(frame);
			renderAnimationControls(frames, index);
		};
		var fragment = document.createDocumentFragment();
		var len = frames.length;
		for (var i = 0; i < len; i++) {
			var frame = frames[i];
			var el = document.createElement('div');
			el.className = 'animation-control tile pad-h-xs';
			if (i === current_frame_index) {
				el.className += ' animation-control-active';
			}
			el.textContent = i + 1;
			el.addEventListener('click', animationControlClicked.bind(null, frame, i));
			fragment.appendChild(el);
		}
		el_animation_controls.innerHTML = '';
		el_animation_controls.appendChild(fragment);
	};

	var pauseAnimation = function() {
		clearTimeout(animation_timeout);
	};

	var draw = function(frames, current_frame_index) {

	};

	var animation_timeout;

	var main = function(frames) {
		var current_frame_index = -1;
		var current_frame;
		var num_frames = frames.length;

		var loop = function() {
			if (current_frame) {
				hideFrame(current_frame);
			}
			current_frame_index = (current_frame_index + 1) % num_frames;
			current_frame = frames[current_frame_index];
			showFrame(current_frame);
			renderAnimationControls(frames, current_frame_index);
			animation_timeout = setTimeout(loop, current_frame.getAttribute('data-duration'));
		};
		loop();
	};
	openAnimation('nav-bar.html').then(main);
})();