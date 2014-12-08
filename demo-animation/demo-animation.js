(function() {
	var nextFrame = function() {
		var current_frame, next_frame;
		transitionFrames(current_frame, next_frame);
		setTimeout(nextFrame, frame_duration);
	};

	nextFrame();
})();