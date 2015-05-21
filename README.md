milliseconds-to-iso-8601-duration is a tiny library to convert
millisecond durations to [ISO 8601][durations-1]
[durations][durations-2].  The existing [xsdurations][] is usually
sufficient for consuming ISO 8601 durations, so use that if you have a
duration and want to add it to a date.  Here we are only concerned
with producing durations from dates.  Instances of [Date][] support
[subtraction returning millisecond offsets][subtraction], so you can
use this library for things like:

    var a = new Date(2015, 5, 21, 14, 11);
    var b = new Date(2015, 5, 22, 16, 45);
    var duration = millisecondsToISO8601Duration.iso8601duration(b - 1);

to set `duration` to `"P1DT2H34M"`.

[durations-1]: https://tools.ietf.org/html/rfc3339#page-13
[durations-2]: http://en.wikipedia.org/wiki/ISO_8601#Durations
[xsdurations]: https://github.com/revington/xsdurationjs
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[subtraction]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Example:_Calculating_elapsed_time
