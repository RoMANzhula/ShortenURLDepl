
$(document).ready(function () {
    $('.form input, #reset-button').hide().show(500);
    $('#btn').on('click', () => {
        $.ajax({
            type: "POST",
            url: "/shorten",
            contentType: "application/json",
            data: JSON.stringify({url: $('.form input').val()}),
            dataType: "json",
            success: (data) => {
                $('#reset-button').attr('href',data.shortUrl).text(data.shortUrl);
            }
        })
    });
});

$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    // copy coupone code to clipboard
    $(".coupon-btn").on("click", function() {
        copyToClipboard("#coupon-field");
        $(".coupon-alert").fadeIn("slow");
    });
});
