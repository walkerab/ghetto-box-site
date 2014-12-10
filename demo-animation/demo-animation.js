(function() {
	var el_source = document.getElementById('source');
	var el_result = document.getElementById('result');

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

	var changeFrame = function(next_frame) {
		// var current_frame, next_frame;
		// transitionFrames(current_frame, next_frame);
	};

	var highlightString = function(str) {
		return '<ins>'+str+'</ins>';
	};

	var highlightDifferences = function(html) {
		var lines = escapeHTML(html).split('\n');
		var result = [];
		var regex_matcher = /&lt;!--\s*\/(.*)\/\s*--&gt;/;
		lines.forEach(function(line) {
			if (line.substr(-5) === '-&gt;') {
				var match = regex_matcher.exec(line);
				var regex_str = match[1];
				var regex = new RegExp(regex_str);
				result.push(line.substr(0,line.length-match[0].length).replace(regex,highlightString));
			} else {
				result.push(line);
			}
		});
		return result.join('\n');
	};

	function escapeHTML(html) {
		return html.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}

	var showFrame = function(frame) {
		var highlighted_text = highlightDifferences(frame.innerHTML);
		el_source.innerHTML = highlighted_text;
		el_result.innerHTML = frame.innerHTML;
	};

	var hideFrame = function(frame) {

	};

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
			setTimeout(loop, current_frame.getAttribute('data-duration'));
		};
		loop();
	};
	openAnimation('nav-bar.html').then(main);
})();