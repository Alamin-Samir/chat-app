
$(document).ready(function () {

    $("#send").click(function () {
        send();
    });

    $("#msg").keypress(function (e) {
        if (e.key === "Enter") send();
    });

    function send() {
        let text = $("#msg").val().trim();
        if (!text) return;

        $("#messages").append("<div>" + text + "</div>");

        $("#msg").val("");
    }

});
