$.get('http://learn.gifi.co.il/api/users/', function (data) {
    console.log(data.users)
    var strHtml = null;
    for (var i = 0; i < data.users.length; i++) {

        strHtml += ('<option value="' + data.users[i].video + '">' + data.users[i].fullname + '</option>')

    }
    $('#select-user').html(strHtml);





});





