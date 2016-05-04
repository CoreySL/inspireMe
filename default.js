function changeBackground() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomNumber = randomNumber(1,12);
  var backgroundImage = document.getElementById('background-image');
  $('#background-image').fadeOut('100', function() {
    backgroundImage.className = '';
      if (randomNumber == 1) {
        $('#background-image').addClass('image1').fadeIn('fast');
      }
      if (randomNumber == 2) {
        $('#background-image').addClass('image2').fadeIn('fast');
      }
      if (randomNumber == 3) {
        $('#background-image').addClass('image3').fadeIn('fast');
      }
      if (randomNumber == 4) {
        $('#background-image').addClass('image4').fadeIn('fast');
      }
      if (randomNumber == 5) {
        $('#background-image').addClass('image5').fadeIn('fast');
      }
      if (randomNumber == 6) {
        $('#background-image').addClass('image6').fadeIn('fast');
      }
      if (randomNumber == 7) {
        $('#background-image').addClass('image7').fadeIn('fast');
      }
      if (randomNumber == 8) {
        $('#background-image').addClass('image8').fadeIn('fast');
      }
      if (randomNumber == 9) {
        $('#background-image').addClass('image9').fadeIn('fast');
      }
      if (randomNumber == 10) {
        $('#background-image').addClass('image10').fadeIn('fast');
      }
      if (randomNumber == 11) {
        $('#background-image').addClass('image11').fadeIn('fast');
      }
      if (randomNumber == 12) {
        $('#background-image').addClass('image12').fadeIn('fast');
      }
  })
}

window.setInterval(function() {
  $('#space-div').fadeToggle('slow');
}, 2000);

var getQuote = function() {
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    dataType: 'jsonp',
    success: function(data) {
      var post = data.shift();
      if (post.content.length > 200) {
        getQuote();
      }
      else {
        var postTitle = post.title;
        var dashTitle = '- ' + post.title;
        // $('#quote-title').fadeOut('100', function() {
          $('#quote-title').html(dashTitle);
        // })
        var content = post.content;
        var sliceP1 = content.slice(3, content.length);
        var sliceP2 = sliceP1.slice(0, sliceP1.length - 5);
        var quotedContent = '"' + sliceP2 + '"';
        // $('#quote-content').fadeOut(function() {
          $('#quote-content').html(quotedContent);
        // })
      }
    },
    cache: false
  });
}

$(document).ready(function() {
  $(document).keydown(function(e) {
    if(e.keyCode == 32){
       // user has pressed space
       getQuote();
       changeBackground();
    }
  });
  $('#space-div').click(function(e) {
    e.preventDefault();
    getQuote();
    changeBackground();
  });
});
