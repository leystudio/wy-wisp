window.addEventListener("load", function () {
    $.ajax({
        url: "logo-url",
        type: "POST",
        data: {
            _token: $("#token").val(),
        },
        dataType: "json",
        success: function (urlLogo) {
            if (!urlLogo[0]) {
                $(".logo_empresa").attr("src", "/storage/w.png");
                console.log('logo al cargar la pagina home')
            } else {
                $(".logo_empresa").attr("src", urlLogo[0]);
                console.log('logo al cargar una pagina')

            }
            $(".brand-text").html(urlLogo[1]);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 419) {
                location.reload();
            }
        },
    });
});
