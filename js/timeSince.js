function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " h ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " min ago";
  }
  return Math.floor(seconds) + " sec ago";
}
var aDay = 24*60*60*1000;