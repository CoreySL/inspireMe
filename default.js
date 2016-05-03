var getQuote = function() {
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    dataType: 'jsonp',
    success: function(data) {
      var post = data.shift();
      if (post.content.length > 75) {
        getQuote();
      }
      else {
        var postTitle = post.title;
        var dashTitle = '- ' + post.title;
        $('#quote-title').fadeOut('100', function() {
          $('#quote-title').html(dashTitle).fadeIn('100');
        })
        var content = post.content;
        var sliceP1 = content.slice(3, content.length);
        var sliceP2 = sliceP1.slice(0, sliceP1.length - 5);
        var quotedContent = '"' + sliceP2 + '"';
        $('#quote-content').fadeOut(function() {
          $('#quote-content').html(quotedContent).fadeIn('100');
        })
      }
    },
    cache: false
  });
}

$(document).ready(function() {
  $(document).keydown(function(e) {
    // e.preventDefault();
    if(e.keyCode == 32){
       // user has pressed space
       getQuote();

    }
  });
});
