
    $("#submit").click(function () {

        var apiUrl = "https://slack.com/api/chat.postMessage";
        var token = creds.token;
        var channel = "#bot";
        var text = document
            .getElementById("messageC")
            .value;
        var mail = document
            .getElementById("courrielC")
            .value;

        $.ajax({
            data: {
                "token": token,
                "channel": channel, 
                "text":"Mail : " + mail + " : " + text,
            },
            dataType: 'text',
            type: 'POST',
            url: apiUrl,
            error: function (error) {
                console.log("error: " + error);
            },
            success: function (data) {
                console.log("result: " + data);
            }
        });

    })

