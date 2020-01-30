
    // $("#submit").click(function () {
        
        var token = creds.token;
        
        $.ajax({
            data: {
                "token": token,
                "channel": "#bot", 
                "text":"Mail : " + $("#courrielC").val() + " : " + $("#messageC").val(),
            },
            dataType: 'text',
            type: 'POST',
            url: "https://slack.com/api/chat.postMessage",
            error: function (error) {
                event.preventDefault();
                console.log("error: " + error);
            },
            success: function (data) {
                console.log("result: " + data);
            }
        });

    // })

