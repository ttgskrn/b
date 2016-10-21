var maxposts = 100;

function tocbylabel(posts) {

  for (var i = 0; i < maxposts; i++) {

    var post = posts.feed.entry[i];
    var posttitle = post.title.$t;
    var posturl;

    if (i == posts.feed.entry.length) break;

    for (var j = 0; j < post.link.length; j++) {

      if (post.link[j].rel == 'alternate') {
        posturl = post.link[j].href;
        break;
      }
    }

    posttitle = posttitle.link(posturl);

    document.write('<li>' + posttitle + '</li>');
  }
}