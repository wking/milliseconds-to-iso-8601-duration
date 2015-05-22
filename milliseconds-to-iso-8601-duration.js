(function (millisecondsToISO8601Duration) {
	'use strict';

	millisecondsToISO8601Duration.iso8601duration = function(milliseconds) {
		var offset = Math.floor(milliseconds);
		var milliseconds = offset % 1000;
		offset = Math.floor(offset / 1000);
		var seconds = offset % 60;
		offset = Math.floor(offset / 60);
		var minutes = offset % 60;
		offset = Math.floor(offset / 60);
		var hours = offset % 24;
		var days = Math.floor(offset / 24);
		var parts = ['P'];
		if (days) {
			parts.push(days + 'D');
		}
		if (hours || minutes || seconds || milliseconds) {
			parts.push('T');
			if (hours) {
				parts.push(hours + 'H');
			}
			if (minutes) {
				parts.push(minutes + 'M');
			}
			if (seconds || milliseconds) {
				parts.push(seconds);
				if (milliseconds) {
					milliseconds = milliseconds.toString();
					while (milliseconds.length < 3) {
						milliseconds = '0' + milliseconds;
					}
					parts.push('.' + milliseconds);
				}
				parts.push('S');
			}
		}
		return parts.join('')
	};
})(typeof exports === 'undefined' ? millisecondsToISO8601Duration = {} : exports);
