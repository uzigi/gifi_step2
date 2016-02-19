(function ($) {
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $.get('http://learn.gifi.co.il/api/users/', function (data) {
        var strHtml = '<option selected="selected">Select friend</option>';
        for (var i = 0; i < data.users.length; i++) {
            strHtml += ('<option value="' + data.users[i].video + '">' + data.users[i].fullname + '</option>')
        }

        $('#select-user').html(strHtml).on('change', changeSong);

        function changeSong() {
            var url = $('#select-user')[0].value;
            var splitUrl = url.split('=');
            var songId = splitUrl[1];
            if (url !== 'Select friend') {
                player.loadVideoById(songId);
                console.log('url', url);
                console.log('sliced', songId);
            }
        }
    });

    function onPlayerReady(event) {
        var playButton = document.getElementById("play-button");
        var pauseButton = document.getElementById("pause-button");

        playButton.addEventListener("click", function () {
            player.playVideo();
        });

        pauseButton.addEventListener("click", function () {
            player.pauseVideo();
        });
    }

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('video', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady;
})(jQuery);

