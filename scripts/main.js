$.get('http://learn.gifi.co.il/api/users/', function (data) {
    console.log(data.users)
    var strHtml = null;
    for (var i = 0; i < data.users.length; i++) {

        strHtml += ('<option value="' + data.users[i].video + '">' + data.users[i].fullname + '</option>')

    }
    $('#select-user').html(strHtml);


});


var player;

function onYouTubePlayerAPIReady() {

    player = new YT.Player('video', {
        events: {

            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
        player.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () {
        player.pauseVideo();
    });

}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



