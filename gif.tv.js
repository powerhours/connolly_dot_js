(function() {
  jQuery(function() {
    var getImage, onGetImage, changeAndResizeGif;

    $("body").css({
      background: 'none',
      margin: '0'
    });

    $("#tv, #logo, #black, #remote, #footer, #apDiv4, #facebutt, #twitbutt, #gbutt").hide();

    $("#gif").css({
      height: '100%',
      left: '0',
      margin: '0',
      top: '0',
      width: '100%'
    });

    getImage = function() {
      $.get('/gifs/get.php', onGetImage);
    }

    onGetImage = function(filename) {
      $("#gif").html("<img src=\"/gifs/"+filename+".gif\" width=\"100%\" height=\"100%\" alt=\"The Gif\" />");
      document.location.hash = '#/'+filename;
    }

    changeAndResizeGif = function() {
      getImage();
    };
    return window.setInterval(changeAndResizeGif, 30000);
    
  });
}).call(this);